// Set year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Intersection-based reveal for better perf
const io = new IntersectionObserver((entries)=>{
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.style.animationPlayState = 'running';
      e.target.classList.remove('will-hide');
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.06 });

document.querySelectorAll('.reveal').forEach(el => {
  el.style.animationPlayState = 'paused';
  el.classList.add('will-hide');
  io.observe(el);
});

// Subtle animated background with particles
(function(){
  const c = document.getElementById('bg');
  if (!c) return;
  const ctx = c.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  let w, h; const dots = [];
  const COLORS = ['#6ee7f6', '#7c8cff', '#2dd4bf'];

  function resize(){
    w = c.clientWidth = window.innerWidth;
    h = c.clientHeight = Math.max(window.innerHeight, document.body.scrollHeight);
    c.width = w * DPR; c.height = h * DPR; ctx.scale(DPR, DPR);
    if (dots.length === 0) init();
  }

  function init(){
    const count = Math.round(Math.min(120, w * h / 18000));
    for (let i=0;i<count;i++) {
      dots.push({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()-.5)*0.6,
        vy: (Math.random()-.5)*0.6,
        r: Math.random()*1.8+0.6,
        c: COLORS[i%COLORS.length]
      });
    }
  }

  function step(){
    ctx.clearRect(0,0,w,h);
    for (const d of dots){
      d.x += d.vx; d.y += d.vy;
      if (d.x<-50||d.x>w+50) d.vx*=-1;
      if (d.y<-50||d.y>h+50) d.vy*=-1;
      ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,Math.PI*2); ctx.fillStyle=d.c; ctx.globalAlpha=.6; ctx.fill();
    }
    // light connecting lines
    ctx.globalAlpha=.12; ctx.lineWidth=1;
    for (let i=0;i<dots.length;i++){
      for (let j=i+1;j<dots.length;j++){
        const a=dots[i], b=dots[j];
        const dx=a.x-b.x, dy=a.y-b.y; const dist= Math.hypot(dx,dy);
        if (dist<110) { ctx.strokeStyle=a.c; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
      }
    }
    ctx.globalAlpha=1;
    requestAnimationFrame(step);
  }

  resize(); step();
  addEventListener('resize', resize);
})();
