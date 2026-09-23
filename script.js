const sections=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1});
 sections.forEach(s=>observer.observe(s));
}else{sections.forEach(s=>s.classList.add('visible'))}
const form=document.getElementById('contactForm');
form.addEventListener('submit',e=>{e.preventDefault();document.getElementById('formStatus').textContent='Form delivery will be connected before launch.'});
