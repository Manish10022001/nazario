import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const EyewearScene3D = () => {
  const mountRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const rimLight = new THREE.DirectionalLight(0x4a90e2, 0.3);
    rimLight.position.set(-5, 3, -5);
    scene.add(rimLight);

    // Create eyewear frame
    const glassesGroup = new THREE.Group();

    // Frame material
    const frameMaterial = new THREE.MeshPhongMaterial({
      color: 0x2c3e50,
      shininess: 80,
      specular: 0x444444,
    });

    // Lens material
    const lensMaterial = new THREE.MeshPhongMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.3,
      shininess: 100,
      specular: 0xffffff,
    });

    // Left lens
    const lensGeometry = new THREE.SphereGeometry(0.5, 32, 32, 0, Math.PI);
    const leftLens = new THREE.Mesh(lensGeometry, lensMaterial);
    leftLens.position.set(-0.7, 0, 0);
    leftLens.rotation.y = Math.PI / 2;
    glassesGroup.add(leftLens);

    // Right lens
    const rightLens = new THREE.Mesh(lensGeometry, lensMaterial);
    rightLens.position.set(0.7, 0, 0);
    rightLens.rotation.y = Math.PI / 2;
    glassesGroup.add(rightLens);

    // Left frame
    const frameGeometry = new THREE.TorusGeometry(0.5, 0.05, 16, 32);
    const leftFrame = new THREE.Mesh(frameGeometry, frameMaterial);
    leftFrame.position.set(-0.7, 0, 0);
    glassesGroup.add(leftFrame);

    // Right frame
    const rightFrame = new THREE.Mesh(frameGeometry, frameMaterial);
    rightFrame.position.set(0.7, 0, 0);
    glassesGroup.add(rightFrame);

    // Bridge
    const bridgeGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.4, 16);
    const bridge = new THREE.Mesh(bridgeGeometry, frameMaterial);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, 0.05, 0);
    glassesGroup.add(bridge);

    // Left temple
    const templeGeometry = new THREE.CylinderGeometry(0.04, 0.04, 2, 16);
    const leftTemple = new THREE.Mesh(templeGeometry, frameMaterial);
    leftTemple.position.set(-1.2, 0, -0.5);
    leftTemple.rotation.set(0, 0, Math.PI / 2);
    glassesGroup.add(leftTemple);

    // Right temple
    const rightTemple = new THREE.Mesh(templeGeometry, frameMaterial);
    rightTemple.position.set(1.2, 0, -0.5);
    rightTemple.rotation.set(0, 0, Math.PI / 2);
    glassesGroup.add(rightTemple);

    scene.add(glassesGroup);

    // Floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x4a90e2,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Mouse move handler - fixed for proper interaction
    const handleMouseMove = (e) => {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      mouseX.current = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY.current = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Add event listener to the container
    const container = mountRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    // Animation
    let animationFrame;
    const autoRotationSpeed = 0.003;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      // Auto-rotate continuously
      glassesGroup.rotation.y += autoRotationSpeed;

      // Add mouse interaction on top of auto-rotation
      const targetRotationY = glassesGroup.rotation.y + mouseX.current * 0.3;
      const targetRotationX = mouseY.current * 0.2;

      glassesGroup.rotation.y +=
        (targetRotationY - glassesGroup.rotation.y) * 0.05;
      glassesGroup.rotation.x +=
        (targetRotationX - glassesGroup.rotation.x) * 0.05;

      // Gentle floating motion
      glassesGroup.position.y = Math.sin(Date.now() * 0.001) * 0.2;

      // Rotate particles
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(animationFrame);
      renderer.dispose();
      particlesGeometry.dispose();
      lensGeometry.dispose();
      frameGeometry.dispose();
      bridgeGeometry.dispose();
      templeGeometry.dispose();
      frameMaterial.dispose();
      lensMaterial.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", minHeight: "400px" }}
    />
  );
};

export default EyewearScene3D;
