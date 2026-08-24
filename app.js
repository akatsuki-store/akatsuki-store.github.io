// Database Defaults
const INITIAL_PRODUCTS = [
  {
    id: "p1",
    name: "Roblox (Robux)",
    category: "games",
    image: "https://images.unsplash.com/photo-1612287233207-6f8b5f36e4f3?w=500",
    packages: [
      { name: "80 Robux", price: 1.20 },
      { name: "400 Robux", price: 4.99 },
      { name: "800 Robux", price: 9.80 },
      { name: "2000 Robux", price: 23.50 }
    ]
  },
  {
    id: "p2",
    name: "Free Fire Diamonds",
    category: "games",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500",
    packages: [
      { name: "100+10 Diamonds", price: 0.99 },
      { name: "310+31 Diamonds", price: 2.85 },
      { name: "520+52 Diamonds", price: 4.70 },
      { name: "1060+106 Diamonds", price: 9.40 },
      { name: "Weekly Membership", price: 1.90 }
    ]
  },
  {
    id: "p3",
    name: "PUBG Mobile UC",
    category: "games",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500",
    packages: [
      { name: "60 UC", price: 0.95 },
      { name: "325 UC", price: 4.60 },
      { name: "660 UC", price: 9.10 },
      { name: "1800 UC", price: 23.00 }
    ]
  },
  {
    id: "p4",
    name: "Xena Live Coins",
    category: "apps",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
    packages: [
      { name: "7,000 Coins", price: 1.00 },
      { name: "35,000 Coins", price: 4.80 },
      { name: "70,000 Coins", price: 9.50 }
    ]
  },
  {
    id: "p5",
    name: "Canva Pro",
    category: "subs",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500",
    packages: [
      { name: "1 Month (Private)", price: 2.50 },
      { name: "12 Months (Private)", price: 12.00 }
    ]
  },
  {
    id: "p6",
    name: "CapCut Pro",
    category: "subs",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500",
    packages: [
      { name: "1 Month Pro", price: 3.50 },
      { name: "12 Months Pro", price: 22.00 }
    ]
  },
  {
    id: "p7",
    name: "Google AI Pro",
    category: "subs",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
    packages: [
      { name: "18 Months Subscription", price: 15.00 }
    ]
  }
];

const INITIAL_PAYMENTS = {
  bybitUid: "396701175",
  bybitBep20: "0x7669599c20fff6834c45b0cfc6b7836466654c86",
  binanceUid: "541429837",
  binanceBep20: "0xb7b84ff32227b6f0fb37eb1cadc29ab5006adcce",
  paypalEmail: "bandouis055@gmail.com",
  whatsapp: "213556334891"
};

let products = JSON.parse(localStorage.getItem('ak_products')) || INITIAL_PRODUCTS;
let paymentSettings = JSON.parse(localStorage.getItem('ak_payments')) || INITIAL_PAYMENTS;
let storeSettings = JSON.parse(localStorage.getItem('ak_settings')) || {
  name: "Akatsuki-Store",
  heroImage: "",
  gallery: []
};
let orders = JSON.parse(localStorage.getItem('ak_orders')) || [];
let users = JSON.parse(localStorage.getItem('ak_users')) || [];
let currentUser = JSON.parse(localStorage.getItem('ak_current_user')) || null;

let currentLang = 'ar';
let activeCategory = 'all';
let selectedPaymentMethod = 'bybit';

const I18N = {
  ar: {
    heroTitle: "أفضل عروض الشحن والاشتراكات الرقمية",
    heroSub: "أسعار منافسة وتسليم فوري بأعلى موثوقية",
    uidWarning: "تنبيه هام: الرجاء التأكد جيداً من صحة الـ Player ID (UID). المتجر لا يتحمل أي مسؤولية عن الأخطاء المدخلة من طرفكم.",
    antiScam: "حذاري: محاولة النصب أو إرسال وصولات دفع وهمية سيؤدي إلى حظرك نهائياً من المتجر.",
    orderWait: "جاري التأكد من عملية الدفع الرجاء الانتظار...",
    orderConfirmed: "تم استلام الطلب! جاري تنفيذه من قبل الإدارة بعد التحقق.",
    chargeBtn: "شحن الآن"
  },
  en: {
    heroTitle: "Top-Tier Digital Top-Ups & Subscriptions",
    heroSub: "Competitive Prices & Swift Processing",
    uidWarning: "Important: Ensure your Account UID is accurate. The store is not liable for incorrect account IDs.",
    antiScam: "Warning: Fraud attempts or fake receipts will result in an immediate permanent ban.",
    orderWait: "Verifying payment proof, please hold on...",
    orderConfirmed: "Payment submitted! Processing your order shortly upon admin confirmation.",
    chargeBtn: "Top Up Now"
  },
  fr: {
    heroTitle: "Meilleures offres de recharge et abonnements",
    heroSub: "Prix compétitifs et livraison rapide et sécurisée",
    uidWarning: "Attention: Vérifiez bien votre UID. La boutique décline toute responsabilité en cas d'erreur de saisie.",
    antiScam: "Attention: Toute tentative d'escroquerie entraînera un bannissement définitif.",
    orderWait: "Vérification du paiement en cours, veuillez patienter...",
    orderConfirmed: "Paiement envoyé! Commande en cours de traitement après validation.",
    chargeBtn: "Recharger"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderStoreBranding();
  renderProducts();
  renderFooterGallery();
  updateUserUI();
});

function renderStoreBranding() {
  document.getElementById('brand-name').innerText = storeSettings.name;
  document.getElementById('store-title').innerText = storeSettings.name;
  if (storeSettings.heroImage) {
    document.getElementById('hero-section').style.backgroundImage = `url(${storeSettings.heroImage})`;
  }
}

function renderProducts() {
  const container = document.getElementById('products-container');
  container.innerHTML = '';
  
  const filtered = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  filtered.forEach(p => {
    const minPrice = Math.min(...p.packages.map(pkg => pkg.price)).toFixed(2);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" class="product-img" alt="${p.name}">
      <div class="product-info">
        <h3 class="product-title">${p.name}</h3>
        <div class="product-pricing">
          <span class="starting-price">$${minPrice}</span>
          <button class="btn-primary" onclick="openOrderModal('${p.id}')">${I18N[currentLang].chargeBtn}</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-${cat}`).classList.add('active');
  renderProducts();
}

function changeLanguage(lang) {
  currentLang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.getElementById('hero-title').innerText = I18N[lang].heroTitle;
  document.getElementById('hero-subtitle').innerText = I18N[lang].heroSub;
  document.getElementById('uid-warning').innerText = I18N[lang].uidWarning;
  document.getElementById('anti-scam-text').innerText = I18N[lang].antiScam;
  renderProducts();
}

function handleImageUpload(e, previewId) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      const img = document.getElementById(previewId);
      img.src = evt.target.result;
      img.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

let selectedProduct = null;

function openOrderModal(productId) {
  selectedProduct = products.find(p => p.id === productId);
  if (!selectedProduct) return;

  document.getElementById('order-product-id').value = selectedProduct.id;
  document.getElementById('modal-product-name').innerText = selectedProduct.name;
  
  const pkgSelect = document.getElementById('order-package');
  pkgSelect.innerHTML = '';
  selectedProduct.packages.forEach((pkg, index) => {
    const opt = document.createElement('option');
    opt.value = index;
    opt.innerText = `${pkg.name} - $${pkg.price.toFixed(2)}`;
    pkgSelect.appendChild(opt);
  });

  renderPaymentOptions();
  updateCalculatedPrice();
  document.getElementById('order-modal').style.display = 'flex';
}

function closeOrderModal() {
  document.getElementById('order-modal').style.display = 'none';
}

function renderPaymentOptions() {
  const container = document.getElementById('payment-options-container');
  container.innerHTML = `
    <div class="pay-card ${selectedPaymentMethod === 'bybit' ? 'active' : ''}" onclick="selectPayment('bybit')">Bybit</div>
    <div class="pay-card ${selectedPaymentMethod === 'binance' ? 'active' : ''}" onclick="selectPayment('binance')">Binance</div>
    <div class="pay-card ${selectedPaymentMethod === 'paypal' ? 'active' : ''}" onclick="selectPayment('paypal')">PayPal</div>
  `;
  renderPaymentDetails();
}

function selectPayment(method) {
  selectedPaymentMethod = method;
  renderPaymentOptions();
}

function renderPaymentDetails() {
  const box = document.getElementById('payment-details-box');
  if (selectedPaymentMethod === 'bybit') {
    box.innerHTML = `
      <p><strong>Bybit Pay UID:</strong> <code>${paymentSettings.bybitUid}</code></p>
      <p><strong>BEP-20 (USDT):</strong> <code>${paymentSettings.bybitBep20}</code></p>
    `;
  } else if (selectedPaymentMethod === 'binance') {
    box.innerHTML = `
      <p><strong>Binance Pay UID:</strong> <code>${paymentSettings.binanceUid}</code></p>
      <p><strong>BEP-20 (USDT):</strong> <code>${paymentSettings.binanceBep20}</code></p>
    `;
  } else {
    box.innerHTML = `
      <p><strong>PayPal Email:</strong> <code>${paymentSettings.paypalEmail}</code></p>
    `;
  }
}

function updateCalculatedPrice() {
  if (!selectedProduct) return;
  const pkgIndex = document.getElementById('order-package').value;
  const qty = parseInt(document.getElementById('order-qty').value) || 1;
  const price = selectedProduct.packages[pkgIndex].price * qty;
  document.getElementById('order-total-price').innerText = `$${price.toFixed(2)}`;
}

function handleOrderSubmit(e) {
  e.preventDefault();
  const uid = document.getElementById('order-uid').value.trim();
  const pkgIndex = document.getElementById('order-package').value;
  const qty = document.getElementById('order-qty').value;
  const pkg = selectedProduct.packages[pkgIndex];
  const totalPrice = (pkg.price * qty).toFixed(2);

  const orderId = 'AK-' + Math.floor(100000 + Math.random() * 900000);
  
  const newOrder = {
    id: orderId,
    product: selectedProduct.name,
    package: pkg.name,
    quantity: qty,
    uid: uid,
    total: `$${totalPrice}`,
    paymentMethod: selectedPaymentMethod.toUpperCase(),
    status: 'Pending Verification',
    date: new Date().toLocaleDateString(),
    userEmail: currentUser ? currentUser.email : 'Guest'
  };

  orders.push(newOrder);
  localStorage.setItem('ak_orders', JSON.stringify(orders));

  const waMsg = encodeURIComponent(
    `*طلب جديد من Akatsuki-Store*\n` +
    `رقم الطلب: ${orderId}\n` +
    `المنتج: ${selectedProduct.name}\n` +
    `العنصر/الباقة: ${pkg.name}\n` +
    `الكمية: ${qty}\n` +
    `معرف الحساب (UID): ${uid}\n` +
    `طريقة الدفع: ${selectedPaymentMethod.toUpperCase()}\n` +
    `المبلغ الإجمالي: $${totalPrice}\n\n` +
    `ملاحظة: تم إرسال السكرين شوت وإثبات الدفع مع هذه الرسالة.`
  );

  alert(I18N[currentLang].orderWait);
  closeOrderModal();

  const waUrl = `https://wa.me/${paymentSettings.whatsapp}?text=${waMsg}`;
  window.open(waUrl, '_blank');
}

function openAuthModal() {
  document.getElementById('auth-modal').style.display = 'flex';
  if (currentUser) {
    showUserDashboard();
  }
}

function closeAuthModal() {
  document.getElementById('auth-modal').style.display = 'none';
}

function toggleAuthForm(mode) {
  document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
  if (mode === 'login') {
    document.querySelector('.auth-tab-btn:nth-child(1)').classList.add('active');
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
  } else {
    document.querySelector('.auth-tab-btn:nth-child(2)').classList.add('active');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
  }
}

function handleUserRegister(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-password').value;

  if (users.find(u => u.email === email)) {
    alert("هذا البريد مسجل مسبقاً!");
    return;
  }

  const newUser = { name, email, pass };
  users.push(newUser);
  localStorage.setItem('ak_users', JSON.stringify(users));
  currentUser = newUser;
  localStorage.setItem('ak_current_user', JSON.stringify(currentUser));
  updateUserUI();
  showUserDashboard();
}

function handleUserLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-password').value;

  const found = users.find(u => u.email === email && u.pass === pass);
  if (found) {
    currentUser = found;
    localStorage.setItem('ak_current_user', JSON.stringify(currentUser));
    updateUserUI();
    showUserDashboard();
  } else {
    alert("بيانات الدخول غير صحيحة");
  }
}

function showUserDashboard() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.add('hidden');
  document.querySelector('.auth-tabs').classList.add('hidden');
  document.getElementById('user-dashboard').classList.remove('hidden');
  document.getElementById('welcome-user').innerText = `مرحباً بك، ${currentUser.name}`;

  const list = document.getElementById('user-orders-list');
  const userOrders = orders.filter(o => o.userEmail === currentUser.email);
  
  if (userOrders.length === 0) {
    list.innerHTML = "<p>لا توجد طلبات سابقة بعد.</p>";
  } else {
    list.innerHTML = userOrders.map(o => `
      <div style="background:var(--bg-color); padding:0.6rem; margin-bottom:0.5rem; border-radius:6px;">
        <strong>${o.product} (${o.package})</strong> - ${o.total} <br>
        <small>الحالة: <b>${o.status}</b> | التاريخ: ${o.date}</small>
      </div>
    `).join('');
  }
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem('ak_current_user');
  location.reload();
}

function updateUserUI() {
  if (currentUser) {
    document.getElementById('user-btn-text').innerText = currentUser.name;
  }
}

function openAdminModal() {
  document.getElementById('admin-modal').style.display = 'flex';
}

function closeAdminModal() {
  document.getElementById('admin-modal').style.display = 'none';
}

function handleAdminLogin(e) {
  e.preventDefault();
  const em = document.getElementById('admin-email').value.trim();
  const ps = document.getElementById('admin-pass').value;

  if (em === "sifoudex46@gmail.com" && ps === "sifou0658613828") {
    document.getElementById('admin-login-view').classList.add('hidden');
    document.getElementById('admin-panel-view').classList.remove('hidden');
    renderAdminProductsList();
    renderAdminOrdersTable();
    loadAdminPaymentInputs();
  } else {
    alert("خطأ في بيانات الدخول الخاصة بالمسؤول!");
  }
}

function logoutAdmin() {
  document.getElementById('admin-login-view').classList.remove('hidden');
  document.getElementById('admin-panel-view').classList.add('hidden');
  closeAdminModal();
}

function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.add('hidden'));
  
  if (tab === 'products') {
    document.getElementById('tab-admin-products').classList.remove('hidden');
  } else if (tab === 'settings') {
    document.getElementById('tab-admin-settings').classList.remove('hidden');
  } else if (tab === 'orders') {
    document.getElementById('tab-admin-orders').classList.remove('hidden');
    renderAdminOrdersTable();
  } else if (tab === 'payments') {
    document.getElementById('tab-admin-payments').classList.remove('hidden');
  }
}

function saveProduct(e) {
  e.preventDefault();
  const id = document.getElementById('edit-product-id').value || 'p' + Date.now();
  const name = document.getElementById('prod-name').value.trim();
  const category = document.getElementById('prod-cat').value;
  const imgPreview = document.getElementById('prod-image-preview').src;
  const packagesRaw = document.getElementById('prod-packages').value;

  const parsedPackages = packagesRaw.split(',').map(item => {
    const [pkgName, price] = item.split(':');
    return { name: pkgName.trim(), price: parseFloat(price.trim()) };
  });

  const existingIdx = products.findIndex(p => p.id === id);
  const newProdData = {
    id,
    name,
    category,
    image: imgPreview || "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500",
    packages: parsedPackages
  };

  if (existingIdx > -1) {
    products[existingIdx] = newProdData;
  } else {
    products.push(newProdData);
  }

  localStorage.setItem('ak_products', JSON.stringify(products));
  renderProducts();
  renderAdminProductsList();
  document.getElementById('product-form').reset();
  document.getElementById('prod-image-preview').style.display = 'none';
  alert("تم حفظ المنتج بنجاح!");
}

function deleteProduct(id) {
  if (confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
    products = products.filter(p => p.id !== id);
    localStorage.setItem('ak_products', JSON.stringify(products));
    renderProducts();
    renderAdminProductsList();
  }
}

function renderAdminProductsList() {
  const container = document.getElementById('admin-products-list');
  container.innerHTML = products.map(p => `
    <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-color); padding:0.5rem; margin-bottom:0.5rem; border-radius:6px;">
      <span>${p.name} (${p.category})</span>
      <button onclick="deleteProduct('${p.id}')" style="background:#e50914; border:none; color:#fff; padding:4px 8px; border-radius:4px; cursor:pointer;">حذف</button>
    </div>
  `).join('');
}

function renderAdminOrdersTable() {
  const table = document.getElementById('admin-orders-table');
  if (orders.length === 0) {
    table.innerHTML = "<p>لا توجد طلبات واردة حالياً.</p>";
    return;
  }
  table.innerHTML = orders.map(o => `
    <div style="background:var(--bg-color); padding:0.8rem; margin-bottom:0.8rem; border-radius:6px;">
      <p><strong>طلب #${o.id}</strong> | ${o.product} - ${o.package} (${o.quantity})</p>
      <p>UID: <code>${o.uid}</code> | المبلغ: <strong>${o.total}</strong> (${o.paymentMethod})</p>
      <p>الحالة الحالية: <span style="color:${o.status === 'Completed' ? '#4BB543' : '#ffaa00'}">${o.status}</span></p>
      <button onclick="approveOrder('${o.id}')" class="btn-primary" style="padding:4px 8px; font-size:0.8rem;">موافقة وتأكيد الشحن</button>
    </div>
  `).join('');
}

function approveOrder(id) {
  const order = orders.find(o => o.id === id);
  if (order) {
    order.status = 'Completed';
    localStorage.setItem('ak_orders', JSON.stringify(orders));
    renderAdminOrdersTable();
    alert("تمت الموافقة وتحديث حالة الطلب إلى مكتمل!");
  }
}

function loadAdminPaymentInputs() {
  document.getElementById('pay-bybit-uid').value = paymentSettings.bybitUid;
  document.getElementById('pay-bybit-bep20').value = paymentSettings.bybitBep20;
  document.getElementById('pay-binance-uid').value = paymentSettings.binanceUid;
  document.getElementById('pay-binance-bep20').value = paymentSettings.binanceBep20;
  document.getElementById('pay-paypal-email').value = paymentSettings.paypalEmail;
}

function savePaymentSettings() {
  paymentSettings.bybitUid = document.getElementById('pay-bybit-uid').value.trim();
  paymentSettings.bybitBep20 = document.getElementById('pay-bybit-bep20').value.trim();
  paymentSettings.binanceUid = document.getElementById('pay-binance-uid').value.trim();
  paymentSettings.binanceBep20 = document.getElementById('pay-binance-bep20').value.trim();
  paymentSettings.paypalEmail = document.getElementById('pay-paypal-email').value.trim();

  localStorage.setItem('ak_payments', JSON.stringify(paymentSettings));
  alert("تم تحديث بيانات طرق الدفع بنجاح!");
}

function saveStoreSettings() {
  const name = document.getElementById('setting-store-name').value.trim();
  const heroImg = document.getElementById('hero-preview').src;

  if (name) storeSettings.name = name;
  if (heroImg && heroImg !== window.location.href) storeSettings.heroImage = heroImg;

  localStorage.setItem('ak_settings', JSON.stringify(storeSettings));
  renderStoreBranding();
  alert("تم حفظ إعدادات المتجر!");
}

function handleGalleryUpload(e) {
  const files = Array.from(e.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(evt) {
      storeSettings.gallery.push(evt.target.result);
      localStorage.setItem('ak_settings', JSON.stringify(storeSettings));
      renderFooterGallery();
    };
    reader.readAsDataURL(file);
  });
}

function renderFooterGallery() {
  const container = document.getElementById('bottom-gallery-container');
  if (!storeSettings.gallery || storeSettings.gallery.length === 0) return;
  container.innerHTML = storeSettings.gallery.map(src => `<img src="${src}" alt="Gallery item">`).join('');
}
