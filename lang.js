<!-- ================= lang.js ================= -->
function setLang(lang){
document.querySelectorAll('[data-'+lang+']').forEach(el=>{
el.textContent = el.dataset[lang];
});
}
setLang('en');