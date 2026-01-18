let menuOpen = false;

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.left = menuOpen ? "-220px" : "0";
  menuOpen = !menuOpen;
}

function hideAll() {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });
}

function showHome() {
  hideAll();
  document.getElementById('home').classList.add('active');
}

function openAlbum(id) {
  hideAll();
  document.getElementById(id).classList.add('active');
}

function openLink(url) {
  window.open(url, '_blank');
}

function openModal(src) {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modalImg').src = src;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}




function email() {
  // Tab to edit
  window.open(href= 'mailto:shyamlalsahajee450@gmail.com')
}
function facebook(){
  
  window.open(href="https://www.facebook.com/shyamlalsahajee.17")
}
function tiktok() {
  
  window.open(href = "https://www.tiktok.com/@shyamlalsahajee")
}
function call() {
  
  window.open(href = "tel:01718439315")
}
function larning() {
  // Tab to edit
  window.open(href='https://e-laeltd.com/')
}
function admit() {
  
  window.open(href = "https://e-laeltd.com/admit-card-verify")
  
}
  
//*function what(){
    // Tab to edit
    window.open(href="https://wa.me/01718439315")
  
//}
function album1(){
  window.open(href="album1.html")
}
function album2(){
  window.open("album2.html")
}