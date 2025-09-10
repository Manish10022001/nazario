import React, { useEffect } from 'react';

function FilterPanel({ open, onClose, onApply, onClear, filters, setFilters }) {
  useEffect(() => {
    if (open) { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }
  }, [open]);

  const toggleArrayValue = (key, value) => {
    setFilters(prev => {
      const s = new Set(prev[key] || []);
      s.has(value) ? s.delete(value) : s.add(value);
      return { ...prev, [key]: Array.from(s) };
    });
  };

  return (
    <>
      <div className={`filter-overlay ${open ? 'show' : ''}`} onClick={onClose} aria-hidden={open ? 'false' : 'true'} />
      <aside className={`filter-panel ${open ? 'show' : ''}`} role="dialog" aria-modal="true" aria-labelledby="filterTitle">
        <div className="filter-header">
          <div id="filterTitle" className="fw-bold">Filters</div>
          <button className="btn btn-link text-decoration-none" type="button" onClick={onClear}>Clear all</button>
        </div>
        <div className="filter-body">
          <section className="border-bottom pb-2 mb-2">
            <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accType" aria-expanded="true">FRAME TYPE</button>
            <div id="accType" className="collapse show">
              <div className="row g-2 row-cols-3">
                {[
                  { val:'Full Rim', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png' },
                  { val:'Rimless', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png' },
                  { val:'Half Rim', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png' },
                ].map(({ val, img }) => {
                  const selected = filters.type?.includes(val);
                  return (
                    <div className="col" key={val}>
                      <label className={`tile w-100 ${selected ? 'selected':''}`} onClick={() => toggleArrayValue('type', val)}
                             role="checkbox" aria-checked={selected ? 'true':'false'} tabIndex={0}
                             onKeyDown={(e)=> e.key==='Enter' && toggleArrayValue('type', val)}>
                        <img src={img} alt={val} /><span>{val}</span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-bottom pb-2 mb-2">
            <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accPrice" aria-expanded="true">PRICE</button>
            <div id="accPrice" className="collapse show">
              <div className="chips" role="group" aria-label="Price ranges">
                {['Under ₹999','₹1000–1999','₹2000–2999','₹3000–4999','₹5000+'].map(label=>{
                  const selected = filters.priceRanges?.includes(label);
                  return (
                    <span key={label} className={`chip ${selected?'selected':''}`} role="checkbox" aria-checked={selected?'true':'false'} tabIndex={0}
                          onClick={()=>toggleArrayValue('priceRanges', label)}
                          onKeyDown={(e)=> e.key==='Enter' && toggleArrayValue('priceRanges', label)}>{label}</span>
                  );
                })}
              </div>
              <div className="d-flex align-items-center gap-2 mt-2">
                <input type="number" className="input-mini" placeholder="Min" aria-label="Min price"
                       value={filters.priceMin ?? ''} onChange={(e)=> setFilters(p=>({...p, priceMin:e.target.value}))}/>
                <span className="text-secondary">to</span>
                <input type="number" className="input-mini" placeholder="Max" aria-label="Max price"
                       value={filters.priceMax ?? ''} onChange={(e)=> setFilters(p=>({...p, priceMax:e.target.value}))}/>
              </div>
            </div>
          </section>

          <section className="border-bottom pb-2 mb-2">
            <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accBrand">BRANDS</button>
            <div id="accBrand" className="collapse">
              <div className="row g-2 row-cols-2 pt-2">
                {['Lenskart','John Jacobs','Vincent Chase','OJOS','Hooper','Ray-Ban'].map(brand=>{
                  const selected = filters.brands?.includes(brand);
                  return (
                    <div className="col" key={brand}>
                      <label className="d-flex align-items-center gap-2">
                        <input type="checkbox" className="form-check-input" checked={!!selected}
                               onChange={()=> toggleArrayValue('brands', brand)} />
                        <span>{brand}</span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          
<section className="border-bottom pb-2 mb-2">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accType" aria-expanded="true">
    FRAME TYPE
  </button>
  <div id="accType" className="collapse show">
    <div className="row g-2 row-cols-3">
      {[
        { val:'Full Rim', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png' },
        { val:'Rimless', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png' },
        { val:'Half Rim', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png' },
      ].map(({ val, img }) => {
        const selected = filters.type?.includes(val);
        return (
          <div className="col" key={val}>
            <label className={`tile w-100 ${selected ? 'selected':''}`}
                   onClick={()=>toggleArrayValue('type', val)}
                   role="checkbox" aria-checked={selected ? 'true':'false'} tabIndex={0}
                   onKeyDown={(e)=> e.key==='Enter' && toggleArrayValue('type', val)}>
              <img src={img} alt={val} /><span>{val}</span>
            </label>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* FRAME SHAPE (tiles) */}
<section className="border-bottom pb-2 mb-2">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accShape" aria-expanded="false">
    FRAME SHAPE
  </button>
  <div id="accShape" className="collapse">
    <div className="row g-2 row-cols-3 row-cols-md-4">
      {[
        { val:'Square', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png' },
        { val:'Rectangle', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png' },
        { val:'Round', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png' },
        { val:'Cat Eye', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png' },
        { val:'Geometric', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png' },
        { val:'Aviator', img:'https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png' },
        { val:'Wayfarer', img:'https://static1.lenskart.com/media/desktop/img/Dec20/app/Shape/Wayfarer.png' },
        { val:'Oval', img:'https://static1.lenskart.com/media/desktop/img/Dec20/app/Shape/Oval.png' },
      ].map(({ val, img }) => {
        const selected = filters.shape?.includes(val);
        return (
          <div className="col" key={val}>
            <label className={`tile w-100 ${selected ? 'selected':''}`}
                   onClick={()=>toggleArrayValue('shape', val)}
                   role="checkbox" aria-checked={selected ? 'true':'false'} tabIndex={0}
                   onKeyDown={(e)=> e.key==='Enter' && toggleArrayValue('shape', val)}>
              <img src={img} alt={val} /><span>{val}</span>
            </label>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* FRAME COLOR (list) */}
<section className="border-bottom pb-2 mb-2">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accColor">FRAME COLOR</button>
  <div id="accColor" className="collapse">
    <div className="row g-2 row-cols-2 pt-2">
      {['Black','Transparent','Blue','Gunmetal','Gold','Silver','Brown','Grey','Green','Pink','Purple','Red','Rose Gold','Yellow','Orange','Maroon','White','Copper'].map(color=>{
        const selected = filters.colors?.includes(color);
        return (
          <div className="col" key={color}>
            <label className="d-flex align-items-center gap-2">
              <input type="checkbox" className="form-check-input" checked={!!selected} onChange={()=>toggleArrayValue('colors', color)} />
              <span>{color}</span>
            </label>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* PRICE (chips + inputs) */}
<section className="border-bottom pb-2 mb-2">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accPrice" aria-expanded="true">PRICE</button>
  <div id="accPrice" className="collapse show">
    <div className="chips" role="group" aria-label="Price ranges">
      {['Under ₹999','₹1000–1999','₹2000–2999','₹3000–4999','₹5000+'].map(label=>{
        const selected = filters.priceRanges?.includes(label);
        return (
          <span key={label} className={`chip ${selected?'selected':''}`} role="checkbox" aria-checked={selected?'true':'false'} tabIndex={0}
                onClick={()=>toggleArrayValue('priceRanges', label)}
                onKeyDown={(e)=> e.key==='Enter' && toggleArrayValue('priceRanges', label)}>{label}</span>
        );
      })}
    </div>
    <div className="d-flex align-items-center gap-2 mt-2">
      <input type="number" className="input-mini" placeholder="Min" aria-label="Min price"
             value={filters.priceMin ?? ''} onChange={(e)=> setFilters(p=>({...p, priceMin:e.target.value}))}/>
      <span className="text-secondary">to</span>
      <input type="number" className="input-mini" placeholder="Max" aria-label="Max price"
             value={filters.priceMax ?? ''} onChange={(e)=> setFilters(p=>({...p, priceMax:e.target.value}))}/>
    </div>
  </div>
</section>

{/* FRAME SIZE (chips) */}
<section className="border-bottom pb-2 mb-2">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accSize">FRAME SIZE</button>
  <div id="accSize" className="collapse">
    <div className="chips" role="group" aria-label="Frame size">
      {['Small','Medium','Large'].map(s=>{
        const selected = filters.size?.includes(s);
        return (
          <span key={s} className={`chip ${selected?'selected':''}`} role="checkbox" aria-checked={selected?'true':'false'} tabIndex={0}
                onClick={()=>toggleArrayValue('size', s)}
                onKeyDown={(e)=> e.key==='Enter' && toggleArrayValue('size', s)}>{s}</span>
        );
      })}
    </div>
  </div>
</section>

{/* MATERIAL (list) */}
<section className="border-bottom pb-2 mb-2">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accMaterial">MATERIAL</button>
  <div id="accMaterial" className="collapse">
    <div className="row g-2 row-cols-2 pt-2">
      {['Acetate','TR90','Metal','Stainless Steel','Titanium','Wood Finish'].map(m=>{
        const selected = filters.material?.includes(m);
        return (
          <div className="col" key={m}>
            <label className="d-flex align-items-center gap-2">
              <input type="checkbox" className="form-check-input" checked={!!selected} onChange={()=>toggleArrayValue('material', m)} />
              <span>{m}</span>
            </label>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* WEIGHT GROUP (chips) */}
<section className="border-bottom pb-2 mb-2">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accWeight">WEIGHT GROUP</button>
  <div id="accWeight" className="collapse">
    <div className="chips" role="group" aria-label="Weight group">
      {['Lightweight','Medium','Heavier'].map(w=>{
        const selected = filters.weight?.includes(w);
        return (
          <span key={w} className={`chip ${selected?'selected':''}`} role="checkbox" aria-checked={selected?'true':'false'} tabIndex={0}
                onClick={()=>toggleArrayValue('weight', w)}
                onKeyDown={(e)=> e.key==='Enter' && toggleArrayValue('weight', w)}>{w}</span>
        );
      })}
    </div>
  </div>
</section>

{/* PRESCRIPTION TYPE (list) */}
<section className="border-bottom pb-2 mb-2">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accRx">PRESCRIPTION TYPE</button>
  <div id="accRx" className="collapse">
    <div className="row g-2 row-cols-2 pt-2">
      {['Single Vision','Progressive','Reading','Non-Power'].map(t=>{
        const selected = filters.rxType?.includes(t);
        return (
          <div className="col" key={t}>
            <label className="d-flex align-items-center gap-2">
              <input type="checkbox" className="form-check-input" checked={!!selected} onChange={()=>toggleArrayValue('rxType', t)} />
              <span>{t}</span>
            </label>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* SUPPORTED POWERS (chips) */}
<section className="border-bottom pb-2 mb-2">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accPower">SUPPORTED POWERS</button>
  <div id="accPower" className="collapse">
    <div className="chips" role="group" aria-label="Power range">
      {['0 to -2.00','-2.25 to -4.00','-4.25 to -6.00','+0.25 to +2.00'].map(r=>{
        const selected = filters.powers?.includes(r);
        return (
          <span key={r} className={`chip ${selected?'selected':''}`} role="checkbox" aria-checked={selected?'true':'false'} tabIndex={0}
                onClick={()=>toggleArrayValue('powers', r)}
                onKeyDown={(e)=> e.key==='Enter' && toggleArrayValue('powers', r)}>{r}</span>
        );
      })}
    </div>
  </div>
</section>

{/* FRAME WIDTH (inputs) */}
<section className="border-bottom pb-2 mb-2">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accWidth">FRAME WIDTH</button>
  <div id="accWidth" className="collapse">
    <div className="d-flex align-items-center gap-2">
      <input type="number" className="input-mini" placeholder="Min (mm)" aria-label="Min width"
             value={filters.widthMin ?? ''} onChange={(e)=> setFilters(p=>({...p, widthMin:e.target.value}))}/>
      <span className="text-secondary">to</span>
      <input type="number" className="input-mini" placeholder="Max (mm)" aria-label="Max width"
             value={filters.widthMax ?? ''} onChange={(e)=> setFilters(p=>({...p, widthMax:e.target.value}))}/>
    </div>
  </div>
</section>

{/* PRODUCT TYPE (list) */}
<section className="border-bottom pb-2 mb-2">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accProdType">PRODUCT TYPE</button>
  <div id="accProdType" className="collapse">
    <div className="row g-2 row-cols-2 pt-2">
      {['Eyeglasses','Sunglasses','Computer Glasses','Power Sunglasses'].map(t=>{
        const selected = filters.prodType?.includes(t);
        return (
          <div className="col" key={t}>
            <label className="d-flex align-items-center gap-2">
              <input type="checkbox" className="form-check-input" checked={!!selected} onChange={()=>toggleArrayValue('prodType', t)} />
              <span>{t}</span>
            </label>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* COLLECTION (list) */}
<section className="border-bottom pb-4">
  <button className="btn w-100 text-start py-2" type="button" data-bs-toggle="collapse" data-bs-target="#accCollection">COLLECTION</button>
  <div id="accCollection" className="collapse">
    <div className="row g-2 row-cols-2 pt-2">
      {['BLU (Blue-cut)','Air (Lightweight)','Hydra','Tortoise'].map(c=>{
        const selected = filters.collection?.includes(c);
        return (
          <div className="col" key={c}>
            <label className="d-flex align-items-center gap-2">
              <input type="checkbox" className="form-check-input" checked={!!selected} onChange={()=>toggleArrayValue('collection', c)} />
              <span>{c}</span>
            </label>
          </div>
        );
      })}
    </div>
  </div>
</section>
      

        </div>
        <div className="filter-footer">
          <button className="btn btn-outline-secondary flex-fill" onClick={onClose}>Close</button>
          <button className="btn btn-buynow flex-fill" onClick={onApply}>Apply Filters</button>
        </div>
      </aside>
    </>
  );
}

export default React.memo(FilterPanel);
