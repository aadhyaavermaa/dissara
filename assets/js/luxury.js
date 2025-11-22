// Parallax scrolling and small interactions
(function(){
  const raf = window.requestAnimationFrame || (fn=>setTimeout(fn,16));
  const doc = document;

  // Parallax on elements with data-parallax
  const items = [];
  function collect(){
    doc.querySelectorAll('[data-parallax]')?.forEach(el=>{
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
      items.push({el, speed, baseY:0});
    });
  }

  function onScroll(){
    const y = window.scrollY || window.pageYOffset;
    for(const it of items){
      const t = `translate3d(0, ${Math.round(y*it.speed)}px, 0)`;
      it.el.style.transform = t;
    }
  }

  // Simple sparkle reposition for subtle motion
  function animateSparks(){
    const sparks = doc.querySelectorAll('.spark');
    sparks.forEach((s, i)=>{
      const jitterX = (Math.sin(Date.now()/1000 + i)*2);
      const jitterY = (Math.cos(Date.now()/1200 + i)*2);
      s.style.transform = `translate(${jitterX}px, ${jitterY}px)`;
    });
    raf(animateSparks);
  }

  // Products data (sample). Replace images/values with real ones.
  const products = [
    {
      id: 'p1',
      title: 'Luxury Hand Mangalsutra Design Gold Bracelet',
      brand: 'DISSARA',
      img: 'mainpagepic.png',
      mrp: 1499,
      now: 499,
      discount: 66,
      rating: 4.6,
      specs: ['18K Gold Plated', 'AAA Zircon', 'Adjustable', 'Hypoallergenic'],
      reviews: [
        {name:'Aarushi', stars:5, text:'Sparkles beautifully and feels premium.'},
        {name:'Neeraj', stars:4, text:'Great value. Packaging was elegant.'}
      ]
    },
    {
      id: 'p2',
      title: 'Celestial Drop Earrings',
      brand: 'DISSARA',
      img: 'mainpagepic.png',
      mrp: 1999,
      now: 899,
      discount: 55,
      rating: 4.8,
      specs: ['22K Microplated', 'Swarovski Crystal', 'Nickel Free', 'Gift Box Included'],
      reviews: [
        {name:'Maya', stars:5, text:'Lightweight with a luxe shine!'},
        {name:'Simran', stars:5, text:'Perfect for weddings and parties.'}
      ]
    },
    {
      id: 'p3',
      title: 'Auric Chain Necklace',
      brand: 'DISSARA',
      img: 'mainpagepic.png',
      mrp: 2499,
      now: 1499,
      discount: 40,
      rating: 4.4,
      specs: ['18" length', '18K Gold Plated', 'Tarnish Resistant', 'Everyday Wear'],
      reviews: [
        {name:'Rhea', stars:4, text:'Minimal yet classy. Love the finish.'}
      ]
    }
  ];

  function stars(n){
    const full = '★'.repeat(Math.round(n));
    const empty = '☆'.repeat(5-Math.round(n));
    return `<span title="${n.toFixed(1)} / 5">${full}${empty}</span>`;
  }

  function currency(x){ return `Rs. ${x.toFixed(2)}`; }

  function renderProducts(){
    const grid = doc.getElementById('productGrid');
    if(!grid) return;
    grid.innerHTML = products.map(p=>`
      <article class="card" data-id="${p.id}">
        <div class="media">
          <img src="${p.img}" alt="${p.title}">
          <span class="badge">-${p.discount}% OFF</span>
        </div>
        <div class="content">
          <div class="brand">${p.brand}</div>
          <div class="title">${p.title}</div>
          <div class="price"><span class="now">${currency(p.now)}</span> <span class="mrp">${currency(p.mrp)}</span></div>
          <div class="rating">${stars(p.rating)}</div>
          <div class="actions">
            <button class="btn-link" data-view="${p.id}">View details</button>
            <button class="btn-link" data-cart="${p.id}">Add to cart</button>
          </div>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('[data-view]')
      .forEach(btn=>btn.addEventListener('click', ()=>{
        const id = btn.getAttribute('data-view');
        const p = products.find(x=>x.id===id);
        if(p) openModal(p);
      }));

    // Also support clicking the whole card image
    grid.querySelectorAll('.card .media img')
      .forEach(img=>img.addEventListener('click', (e)=>{
        const card = e.target.closest('.card');
        const id = card?.getAttribute('data-id');
        const p = products.find(x=>x.id===id);
        if(p) openModal(p);
      }));
  }

  function openModal(p){
    const modal = doc.getElementById('productModal');
    if(!modal) return;
    modal.querySelector('#modalImage').src = p.img;
    modal.querySelector('#modalTitle').textContent = p.title;
    modal.querySelector('#modalBrand').textContent = p.brand;
    modal.querySelector('#modalRating').innerHTML = stars(p.rating);
    modal.querySelector('#modalNow').textContent = currency(p.now);
    modal.querySelector('#modalMrp').textContent = currency(p.mrp);
    modal.querySelector('#modalDisc').textContent = `-${p.discount}% OFF`;
    const specs = modal.querySelector('#modalSpecs');
    specs.innerHTML = p.specs.map(s=>`<div class="spec">${s}</div>`).join('');
    const reviews = modal.querySelector('#modalReviews');
    reviews.innerHTML = `<h4 style="margin:6px 0 10px">Reviews</h4>` +
      p.reviews.map(r=>`<div class="review"><div class="who"><span>${r.name}</span><span>${stars(r.stars)}</span></div><div>${r.text}</div></div>`).join('');
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden','false');
  }

  function closeModal(){
    const modal = doc.getElementById('productModal');
    if(!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
  }

  function initModal(){
    const modal = doc.getElementById('productModal');
    if(!modal) return;
    modal.addEventListener('click', (e)=>{
      if(e.target.matches('[data-close="modal"], #modalClose, .backdrop')) closeModal();
    });
    doc.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });
  }

  // Chatbot toggle
  function initChatbot(){
    const btn = doc.getElementById('chatbotBtn');
    const popup = doc.getElementById('chatbotPopup');
    if(!btn || !popup) return;

    function open(){
      popup.style.display = 'block';
      popup.setAttribute('aria-hidden','false');
    }
    function close(){
      popup.style.display = 'none';
      popup.setAttribute('aria-hidden','true');
    }
    function toggle(){
      const isOpen = popup.style.display === 'block';
      isOpen ? close() : open();
    }

    btn.addEventListener('click', toggle);
    doc.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') close();
    });
  }

  function init(){
    collect();
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
    animateSparks();
    initChatbot();
    renderProducts();
    initModal();
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init);
  else init();
})();
