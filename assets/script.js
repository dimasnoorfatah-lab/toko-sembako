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

// ===== NOTIFICATIONS =====
let notifications = JSON.parse(localStorage.getItem('notifications')) || [
  { id: 1, type: 'order', title: 'Pesanan Selesai', message: 'Pesanan TBJ-002 (Gas LPG 3kg + Air Galon) telah diterima.', time: '2 jam lalu', icon: '✅', read: false },
  { id: 2, type: 'promo', title: 'Promo Minggu Ini!', message: 'Beli gas 3kg + galon air isi ulang, gratis ongkir ke seluruh area.', time: '1 hari lalu', icon: '🎉', read: false },
  { id: 3, type: 'system', title: 'Pembayaran Berhasil', message: 'Pembayaran Rp 27.000 untuk pesanan Anda telah dikonfirmasi.', time: '3 hari lalu', icon: '💳', read: true }
];

function saveNotifications() {
  localStorage.setItem('notifications', JSON.stringify(notifications));
}

function openNotifications() {
  const modal = document.getElementById('notification-modal');
  if (modal) {
    modal.style.display = 'block';
    renderNotifications();
  }
}

function closeNotifications() {
  const modal = document.getElementById('notification-modal');
  if (modal) modal.style.display = 'none';
}

function renderNotifications() {
  const list = document.getElementById('notifications-list');
  if (!list) return;

  if (notifications.length === 0) {
    list.innerHTML = '<div style="padding: 40px 16px; text-align: center; color: var(--text-muted);"><div style="font-size: 32px; margin-bottom: 8px;">📭</div><div>Tidak ada notifikasi</div></div>';
    updateNotifBadge();
    return;
  }

  list.innerHTML = notifications.map(notif => `
    <div onclick="markAsRead(${notif.id})" style="padding: 16px; border-bottom: 1px solid var(--border); cursor: pointer; background: ${notif.read ? '#fff' : '#f9f9f9'}; transition: background 0.2s; ${notif.read ? '' : 'border-left: 3px solid var(--amber);'}">
      <div style="display: flex; gap: 12px;">
        <div style="font-size: 24px;">${notif.icon}</div>
        <div style="flex: 1;">
          <div style="font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 4px;">${notif.title}</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px; line-height: 1.4;">${notif.message}</div>
          <div style="font-size: 11px; color: var(--text-muted);">${notif.time}</div>
        </div>
        ${!notif.read ? '<div style="width: 8px; height: 8px; background: var(--amber); border-radius: 50%; margin-top: 2px;"></div>' : ''}
      </div>
    </div>
  `).join('');

  updateNotifBadge();
}

function markAsRead(id) {
  const notif = notifications.find(n => n.id === id);
  if (notif) {
    notif.read = true;
    saveNotifications();
    renderNotifications();
  }
}

function clearAllNotifications() {
  if (confirm('Hapus semua notifikasi?')) {
    notifications = [];
    saveNotifications();
    renderNotifications();
    showToast('✅ Semua notifikasi telah dihapus');
  }
}

function updateNotifBadge() {
  const unread = notifications.filter(n => !n.read).length;
  document.querySelectorAll('.header-icons .badge').forEach(badge => {
    if (badge.closest('button')?.textContent?.includes('🔔')) {
      badge.textContent = unread;
    }
  });
}

// ===== INIT ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
  updateNotifBadge();

  const notifModal = document.getElementById('notification-modal');
  if (notifModal) {
    notifModal.addEventListener('click', (e) => {
      if (e.target.id === 'notification-modal') closeNotifications();
    });
  }
});
