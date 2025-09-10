import React, { useState } from 'react';

function ButtonBar({ onTryVR, onBuyNow, disabled }) {
  const [vrLoading, setVrLoading] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);

  const handleVR = async () => {
    if (disabled || vrLoading) return;
    setVrLoading(true);
    try { await onTryVR?.(); } finally { setVrLoading(false); }
  };
  const handleBuy = async () => {
    if (disabled || buyLoading) return;
    setBuyLoading(true);
    try { await onBuyNow?.(); } finally { setBuyLoading(false); }
  };

  return (
    <div className="d-flex flex-column flex-md-row gap-3 align-items-stretch">
      <button type="button" className="btn btn-vr flex-fill d-flex align-items-center justify-content-center px-4 py-3 gap-2"
              onClick={handleVR} aria-pressed={vrLoading ? 'true' : 'false'}
              aria-disabled={disabled || vrLoading ? 'true' : 'false'}>
        <i className="bi bi-view-list fs-5" aria-hidden="true"></i>
        <span className="fw-bold fs-5">{vrLoading ? 'Launching VR...' : 'Try On VR'}</span>
      </button>
      <button type="button" className="btn btn-buynow flex-fill d-flex align-items-center justify-content-center px-4 py-3 gap-2"
              onClick={handleBuy} aria-pressed={buyLoading ? 'true' : 'false'}
              aria-disabled={disabled || buyLoading ? 'true' : 'false'}>
        <span className="fw-bold fs-5">{buyLoading ? 'Processing...' : 'Buy Now'}</span>
        <i className="bi bi-arrow-right-short fs-4" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default React.memo(ButtonBar);
