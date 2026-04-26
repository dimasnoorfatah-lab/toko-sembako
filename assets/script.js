// ===== CART MANAGEMENT =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.length;

function addToCart(btn, name, price = 0) {
  cartCount++;
  const item = { id: Date.now(), name: name, price: price };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadges();
  showToast('✅ ' + name + ' ditambahkan ke keranjang');
  btn.textContent = '✓';
  btn.style.background = '#3B6D11';
  setTimeout(() => { btn.textContent = '+'; btn.style.background = ''; }, 1800);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  cartCount = cart.length;
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadges();
  location.reload();
}

function updateCartBadges() {
  const cartBadges = document.querySelectorAll('[id$="cart-count"]');
  cartBadges.forEach(badge => badge.textContent = cartCount);
}

// ===== TOAST NOTIFICATION =====
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

// ===== WHATSAPP FUNCTION =====
function openWhatsApp() {
  const no  = '082325565813';
  const msg = encodeURIComponent('Halo Toko Berkah Jaya! Saya ingin memesan produk. Bisa bantu saya?');
  window.open('https://wa.me/' + no + '?text=' + msg, '_blank');
}

// ===== NAVIGATION =====
function setActiveNav(index) {
  const items = document.querySelectorAll('.nav-item');
  items.forEach(item => item.classList.remove('active'));
  if (items[index]) items[index].classList.add('active');
}

// ===== FILTER PRODUCTS =====
function filterProducts() {
  const q = document.getElementById('search-input')?.value.toLowerCase() || '';
  document.querySelectorAll('.prod-card').forEach(c => {
    const name = c.querySelector('.prod-name')?.textContent.toLowerCase() || '';
    c.style.display = name.includes(q) ? '' : 'none';
  });
}

function setCategory(cat, el) {
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const cards = document.querySelectorAll('.prod-card');
  cards.forEach(c => {
    if (cat === 'all' || c.dataset.cat === cat) {
      c.style.display = '';
    } else {
      c.style.display = 'none';
    }
  });
}

function setTab(type, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  showToast('Filter: ' + el.textContent.trim());
}

// ===== INIT ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
});
