const DZD_RATE = 280;

// High-End Neon Posters Built Directly for Fast Mobile Loading
const POSTERS = {
  roblox: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cdefs%3E%3ClinearGradient id='bg1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2312080a'/%3E%3Cstop offset='100%25' stop-color='%23050508'/%3E%3C/linearGradient%3E%3ClinearGradient id='redGlow' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ff1a2a'/%3E%3Cstop offset='100%25' stop-color='%2399000d'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='600' rx='24' fill='url(%23bg1)' stroke='%23e50914' stroke-width='4'/%3E%3Ccircle cx='300' cy='240' r='130' fill='%23e50914' opacity='0.15' filter='blur(30px)'/%3E%3Cpath d='M190 120 l220 44 -44 220 -220 -44 z' fill='url(%23redGlow)' filter='drop-shadow(0 15px 25px rgba(229,9,20,0.6))'/%3E%3Cpolygon points='275,230 325,240 315,290 265,280' fill='%23050508'/%3E%3Ctext x='50%25' y='440' fill='%23ffffff' font-family='sans-serif' font-weight='900' font-size='38' text-anchor='middle' letter-spacing='2'%3EROBLOX GIFT CARD%3C/text%3E%3Crect x='130' y='475' width='340' height='46' rx='23' fill='%231b1f24' stroke='%2330363d' stroke-width='2'/%3E%3Ctext x='50%25' y='506' fill='%2300ff88' font-family='sans-serif' font-weight='bold' font-size='22' text-anchor='middle'%3Eتسليم فوري لكود البطاقة ⚡%3C/text%3E%3Ctext x='50%25' y='560' fill='%23ff3344' font-family='sans-serif' font-weight='bold' font-size='24' text-anchor='middle'%3EGlobal Code | Akatsuki Store%3C/text%3E%3C/svg%3E",
  
  freefire: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cdefs%3E%3ClinearGradient id='bg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23150d00'/%3E%3Cstop offset='100%25' stop-color='%23050508'/%3E%3C/linearGradient%3E%3ClinearGradient id='fireGlow' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ff9900'/%3E%3Cstop offset='100%25' stop-color='%23ff2200'/%3E%3C/linearGradient%3E%3ClinearGradient id='diaGlow' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2300f0ff'/%3E%3Cstop offset='100%25' stop-color='%230072ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='600' rx='24' fill='url(%23bg2)' stroke='%23ff7700' stroke-width='4'/%3E%3Ccircle cx='300' cy='220' r='140' fill='%23ff5500' opacity='0.2' filter='blur(30px)'/%3E%3Cpolygon points='300,100 420,200 300,340 180,200' fill='url(%23diaGlow)' filter='drop-shadow(0 15px 30px rgba(0,240,255,0.7))'/%3E%3Cpolygon points='300,100 300,340 420,200' fill='%23ffffff' opacity='0.25'/%3E%3Cpath d='M300 230 c-30 -40 -60 -10 -60 30 c0 33 27 60 60 60 s60 -27 60 -60 c0 -40 -30 -70 -60 -30 z' fill='url(%23fireGlow)'/%3E%3Ctext x='50%25' y='430' fill='%23ffffff' font-family='sans-serif' font-weight='900' font-size='38' text-anchor='middle' letter-spacing='2'%3EFREE FIRE DIAMONDS%3C/text%3E%3Crect x='130' y='470' width='340' height='46' rx='23' fill='%231b1f24' stroke='%2330363d' stroke-width='2'/%3E%3Ctext x='50%25' y='501' fill='%23ff9900' font-family='sans-serif' font-weight='bold' font-size='22' text-anchor='middle'%3Eشحن مباشر رسمي بالـ UID ⚡%3C/text%3E%3Ctext x='50%25' y='555' fill='%2300f0ff' font-family='sans-serif' font-weight='bold' font-size='24' text-anchor='middle'%3EInstant Auto Top-Up%3C/text%3E%3C/svg%3E",
  
  pubg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cdefs%3E%3ClinearGradient id='bg3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23141000'/%3E%3Cstop offset='100%25' stop-color='%23050508'/%3E%3C/linearGradient%3E%3ClinearGradient id='goldGlow' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ffd700'/%3E%3Cstop offset='100%25' stop-color='%23ff8800'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='600' rx='24' fill='url(%23bg3)' stroke='%23f39c12' stroke-width='4'/%3E%3Ccircle cx='300' cy='220' r='140' fill='%23f39c12' opacity='0.18' filter='blur(30px)'/%3E%3Ccircle cx='300' cy='220' r='110' fill='url(%23goldGlow)' filter='drop-shadow(0 15px 30px rgba(243,156,18,0.7))'/%3E%3Ctext x='50%25' y='250' fill='%23050508' font-family='sans-serif' font-weight='900' font-size='75' text-anchor='middle' letter-spacing='3'%3EUC%3C/text%3E%3Ctext x='50%25' y='430' fill='%23ffffff' font-family='sans-serif' font-weight='900' font-size='38' text-anchor='middle' letter-spacing='2'%3EPUBG MOBILE UC%3C/text%3E%3Crect x='130' y='470' width='340' height='46' rx='23' fill='%231b1f24' stroke='%2330363d' stroke-width='2'/%3E%3Ctext x='50%25' y='501' fill='%2300ff88' font-family='sans-serif' font-weight='bold' font-size='22' text-anchor='middle'%3Eبطاقة كود رقمي Global ⚡%3C/text%3E%3Ctext x='50%25' y='555' fill='%23ffd700' font-family='sans-serif' font-weight='bold' font-size='24' text-anchor='middle'%3EMidasbuy Code | Akatsuki Store%3C/text%3E%3C/svg%3E",
  
  tango: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cdefs%3E%3ClinearGradient id='bg4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231a0011'/%3E%3Cstop offset='100%25' stop-color='%23050508'/%3E%3C/linearGradient%3E%3ClinearGradient id='pinkGlow' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ff2a75'/%3E%3Cstop offset='100%25' stop-color='%239400d3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='600' rx='24' fill='url(%23bg4)' stroke='%23ff2a75' stroke-width='4'/%3E%3Ccircle cx='300' cy='220' r='140' fill='%23ff2a75' opacity='0.2' filter='blur(30px)'/%3E%3Crect x='180' y='100' width='240' height='240' rx='60' fill='url(%23pinkGlow)' filter='drop-shadow(0 15px 30px rgba(255,42,117,0.7))'/%3E%3Ctext x='50%25' y='275' fill='%23ffffff' font-family='sans-serif' font-weight='900' font-size='140' text-anchor='middle'%3ET%3C/text%3E%3Ctext x='50%25' y='430' fill='%23ffffff' font-family='sans-serif' font-weight='900' font-size='38' text-anchor='middle' letter-spacing='2'%3ETANGO LIVE COINS%3C/text%3E%3Crect x='130' y='470' width='340' height='46' rx='23' fill='%231b1f24' stroke='%2330363d' stroke-width='2'/%3E%3Ctext x='50%25' y='501' fill='%23ff2a75' font-family='sans-serif' font-weight='bold' font-size='22' text-anchor='middle'%3Eشحن فوري بالـ Account ID ⚡%3C/text%3E%3Ctext x='50%25' y='555' fill='%2300f0ff' font-family='sans-serif' font-weight='bold' font-size='24' text-anchor='middle'%3EOfficial Coins Recharge%3C/text%3E%3C/svg%3E",
  
  superlive: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cdefs%3E%3ClinearGradient id='bg5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2300121a'/%3E%3Cstop offset='100%25' stop-color='%23050508'/%3E%3C/linearGradient%3E%3ClinearGradient id='cyanGlow' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2300d4ff'/%3E%3Cstop offset='100%25' stop-color='%230055ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='600' rx='24' fill='url(%23bg5)' stroke='%2300d4ff' stroke-width='4'/%3E%3Ccircle cx='300' cy='220' r='140' fill='%2300d4ff' opacity='0.2' filter='blur(30px)'/%3E%3Crect x='180' y='100' width='240' height='240' rx='60' fill='url(%23cyanGlow)' filter='drop-shadow(0 15px 30px rgba(0,212,255,0.7))'/%3E%3Ctext x='50%25' y='275' fill='%23ffffff' font-family='sans-serif' font-weight='900' font-size='140' text-anchor='middle'%3ES%3C/text%3E%3Ctext x='50%25' y='430' fill='%23ffffff' font-family='sans-serif' font-weight='900' font-size='38' text-anchor='middle' letter-spacing='2'%3ESUPERLIVE COINS%3C/text%3E%3Crect x='130' y='470' width='340' height='46' rx='23' fill='%231b1f24' stroke='%2330363d' stroke-width='2'/%3E%3Ctext x='50%25' y='501' fill='%2300d4ff' font-family='sans-serif' font-weight='bold' font-size='22' text-anchor='middle'%3Eشحن مباشر بالـ User ID ⚡%3C/text%3E%3Ctext x='50%25' y='555' fill='%2300ff88' font-family='sans-serif' font-weight='bold' font-size='24' text-anchor='middle'%3ESafe & Instant Top-Up%3C/text%3E%3C/svg%3E",

  google: "https://i.postimg.cc/tgyXnxz4/file-000000003ef881f4a88496afad4a6fb1.png"
};

const DEFAULT_PRODUCTS = [
  {
    id: "p1",
    name: "Roblox Gift Card 🌍 Global",
    category: "giftcards",
    type: "giftcard",
    image: POSTERS.roblox,
    displayPrice: 8.97,
    packages: [
      { name: "400 Robux Gift Card", price: 8.97 },
      { name: "800 Robux Gift Card", price: 12.93 },
      { name: "1000 Robux Gift Card", price: 19.30 },
      { name: "2000 Robux Gift Card", price: 32.81 },
      { name: "4500 Robux Gift Card", price: 69.40 },
      { name: "10000 Robux Gift Card", price: 140.96 }
    ]
  },
  {
    id: "p2",
    name: "Free Fire Diamonds 🌍 Direct UID",
    category: "games",
    type: "topup",
    image: POSTERS.freefire,
    displayPrice: 2.00,
    packages: [
      { name: "210+21 Diamonds", price: 2.00 },
      { name: "530+53 Diamonds", price: 5.00 },
      { name: "1080+108 Diamonds", price: 10.00 },
      { name: "2200+220 Diamonds", price: 21.00 }
    ]
  },
  {
    id: "p3",
    name: "PUBG Mobile UC 🌍 Global",
    category: "games",
    type: "topup",
    image: POSTERS.pubg,
    displayPrice: 2.14,
    packages: [
      { name: "120 UC", price: 2.14 },
      { name: "325 UC", price: 4.64 },
      { name: "660 UC", price: 9.11 },
      { name: "1800 UC", price: 21.43 },
      { name: "3850 UC", price: 41.96 },
      { name: "8100 UC", price: 83.21 }
    ]
  },
  {
    id: "p4",
    name: "Tango Live Coins 🌍 Top-Up",
    category: "apps",
    type: "topup",
    image: POSTERS.tango,
    displayPrice: 2.86,
    packages: [
      { name: "300 Coins", price: 2.86 },
      { name: "750 Coins", price: 5.71 },
      { name: "1500 Coins", price: 10.71 },
      { name: "3750 Coins", price: 23.39 },
      { name: "7500 Coins", price: 48.21 }
    ]
  },
  {
    id: "p5",
    name: "SuperLive Coins 🌍 Top-Up",
    category: "apps",
    type: "topup",
    image: POSTERS.superlive,
    displayPrice: 6.79,
    packages: [
      { name: "605 Coins", price: 6.79 },
      { name: "1230 Coins", price: 11.43 },
      { name: "3125 Coins", price: 23.57 },
      { name: "6250 Coins", price: 45.36 },
      { name: "10000 Coins", price: 71.43 }
    ]
  },
  {
    id: "p6",
    name: "Google AI Pro 18 Months",
    category: "subs",
    type: "giftcard",
    image: POSTERS.google,
    displayPrice: 6.79,
    packages: [
      { name: "اشتراك 18 شهر", price: 6.79 }
    ]
  }
];

const DEFAULT_PAYMENTS = [
  {
    id: "baridimob",
    name: "بريدي موب BaridiMob",
    details: "RIP: 00799999002345678912\nNom / Prénom: AKATSUKI STORE",
    enabled: true
  },
  {
    id: "bybit",
    name: "Bybit",
    details: "Bybit Pay UID: 396701175\nBEP-20 (USDT): 0x7669599c20fff6834c45b0cfc6b7836466654c86",
    enabled: true
  },
  {
    id: "binance",
    name: "Binance",
    details: "Binance Pay UID: 541429837\nBEP-20 (USDT): 0xb7b84ff32227b6f0fb37eb1cadc29ab5006adcce",
    enabled: true
  },
  {
    id: "paypal",
    name: "PayPal",
    details: "PayPal Email: bandouis055@gmail.com",
    enabled: true
  }
];

function safeGet(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

let products = DEFAULT_PRODUCTS;
let paymentMethods = safeGet('ak_payment_methods', DEFAULT_PAYMENTS);
let storeSettings = safeGet('ak_settings', {
  name: "Akatsuki-Store",
  logoUrl: "",
  heroUrl: "",
  galleryUrls: [],
  heroTitle: "أفضل عروض الشحن والبطاقات الرقمية",
  heroSubtitle: "تسليم فوري وموثوق | سعر الصرف: 1$ = 280 دج",
  hideHeroText: false,
  heroTextAlign: "center",
  whatsapp: "213556334891"
});
let orders = safeGet('ak_orders', []);
let users = safeGet('ak_users', []);
let currentUser = safeGet('ak_current_user', null);

let currentCurrency = 'USD';
let activeCategory = 'all';
let selectedPaymentMethodId = '';
let selectedProduct = null;

document.addEventListener('DOMContentLoaded', () => {
  renderStoreBranding();
  renderProducts();
  renderFooterGallery();
  updateUserUI();
});

function renderStoreBranding() {
  const brandElem = document.getElementById('brand-name');
  const titleElem = document.getElementById('store-title');
  const logoElem = document.getElementById('brand-logo');
  const heroBox = document.getElementById('hero-content-box');
  const heroTitle = document.getElementById('hero-title');
  const heroSub = document.getElementById('hero-subtitle');

  if (brandElem) brandElem.innerText = storeSettings.name || 'Akatsuki-Store';
  if (titleElem) titleElem.innerText = storeSettings.name || 'Akatsuki-Store';
  
  if (storeSettings.logoUrl && logoElem) {
    logoElem.src = storeSettings.logoUrl;
    logoElem.classList.remove('hidden');
  } else if (logoElem) {
    logoElem.classList.add('hidden');
  }

  const hero = document.getElementById('hero-section');
  if (hero && storeSettings.heroUrl) {
    hero.style.backgroundImage = `linear-gradient(rgba(11,13,16,0.6), rgba(11,13,16,0.85)), url('${storeSettings.heroUrl}')`;
  }

  if (heroBox) {
    if (storeSettings.hideHeroText) {
      heroBox.classList.add('hidden');
    } else {
      heroBox.classList.remove('hidden');
      heroBox.style.textAlign = storeSettings.heroTextAlign || 'center';
      if (heroTitle) heroTitle.innerText = storeSettings.heroTitle || "أفضل عروض الشحن والبطاقات الرقمية";
      if (heroSub) heroSub.innerText = storeSettings.heroSubtitle || "تسليم فوري وموثوق | سعر الصرف: 1$ = 280 دج";
    }
  }
}

function formatPrice(usdPrice) {
  if (currentCurrency === 'DZD') {
    return `${Math.round(usdPrice * DZD_RATE).toLocaleString()} دج`;
  }
  return `$${usdPrice.toFixed(2)}`;
}

function changeCurrency(curr) {
  currentCurrency = curr;
  renderProducts();
  if (selectedProduct) updateCalculatedPrice();
}

function renderProducts() {
  const container = document.getElementById('products-container');
  if (!container) return;
  container.innerHTML = '';
  
  const filtered = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  filtered.forEach(p => {
    let showPrice = (p.displayPrice !== undefined && p.displayPrice !== null && p.displayPrice > 0) 
      ? p.displayPrice 
      : (p.packages && p.packages.length > 0 ? p.packages[0].price : 1.00);

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" class="product-img" alt="${p.name}" style="height: 180px; width: 100%; object-fit: cover; border-top-left-radius: 12px; border-top-right-radius: 12px;">
      <div class="product-info">
        <h3 class="product-title">${p.name}</h3>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">
          ${p.type === 'giftcard' ? '<i class="fa-solid fa-gift"></i> بطاقة كود رقمي' : '<i class="fa-solid fa-bolt"></i> شحن مباشر بالـ ID'}
        </p>
        <div class="product-pricing">
          <span class="starting-price">${formatPrice(showPrice)}</span>
          <button class="btn-primary" onclick="openOrderModal('${p.id}')">شراء / شحن</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`tab-${cat}`);
  if (activeBtn) activeBtn.classList.add('active');
  renderProducts();
}

function openOrderModal(productId) {
  selectedProduct = products.find(p => p.id === productId);
  if (!selectedProduct) return;

  document.getElementById('order-product-id').value = selectedProduct.id;
  document.getElementById('order-product-type').value = selectedProduct.type;
  document.getElementById('modal-product-name').innerText = selectedProduct.name;
  
  const receiptElem = document.getElementById('order-receipt-file');
  if (receiptElem) receiptElem.value = "";

  const uidWarning = document.getElementById('uid-warning-box');
  const gcInfo = document.getElementById('giftcard-info-box');
  const targetLabel = document.getElementById('lbl-target-input');
  const targetInput = document.getElementById('order-target-value');

  if (selectedProduct.type === 'giftcard') {
    if (uidWarning) uidWarning.classList.add('hidden');
    if (gcInfo) gcInfo.classList.remove('hidden');
    targetLabel.innerText = "البريد الإلكتروني لاستلام الكود / الحساب:";
    targetInput.type = "email";
    targetInput.placeholder = "أدخل بريدك الإلكتروني هنا";
    targetInput.value = currentUser ? currentUser.email : "";
  } else {
    if (uidWarning) uidWarning.classList.remove('hidden');
    if (gcInfo) gcInfo.classList.add('hidden');
    targetLabel.innerText = "معرف الحساب / Player ID (UID):";
    targetInput.type = "text";
    targetInput.placeholder = "أدخل ID حسابك في اللعبة";
    targetInput.value = "";
  }

  const pkgSelect = document.getElementById('order-package');
  pkgSelect.innerHTML = '';
  selectedProduct.packages.forEach((pkg, index) => {
    const opt = document.createElement('option');
    opt.value = index;
    opt.innerText = `${pkg.name} - ${formatPrice(pkg.price)}`;
    pkgSelect.appendChild(opt);
  });

  renderActivePaymentMethods();
  updateCalculatedPrice();
  document.getElementById('order-modal').style.display = 'flex';
}

function closeOrderModal() {
  document.getElementById('order-modal').style.display = 'none';
}

function renderActivePaymentMethods() {
  const container = document.getElementById('payment-options-container');
  if (!container) return;
  const activeMethods = paymentMethods.filter(m => m.enabled === true);
  
  if (activeMethods.length === 0) {
    container.innerHTML = '<p style="color:#ff6b6b; grid-column:span 3; font-size:0.85rem;">لا توجد طرق دفع مفعلة حالياً.</p>';
    document.getElementById('payment-details-box').innerHTML = '';
    return;
  }

  if (!selectedPaymentMethodId || !activeMethods.find(m => m.id === selectedPaymentMethodId)) {
    selectedPaymentMethodId = activeMethods[0].id;
  }

  container.innerHTML = activeMethods.map(m => `
    <div class="pay-card ${selectedPaymentMethodId === m.id ? 'active' : ''}" onclick="selectPaymentMethod('${m.id}')">
      ${m.name}
    </div>
  `).join('');

  renderSelectedPaymentDetails();
}

function selectPaymentMethod(id) {
  selectedPaymentMethodId = id;
  renderActivePaymentMethods();
}

function renderSelectedPaymentDetails() {
  const box = document.getElementById('payment-details-box');
  if (!box) return;
  const current = paymentMethods.find(m => m.id === selectedPaymentMethodId);
  if (current) {
    box.innerHTML = `
      <div style="margin-bottom:6px; font-weight:bold; color:#fff;">بيانات التحويل (${current.name}):</div>
      <pre style="font-family:inherit; white-space:pre-wrap; margin:0; color:#c9d1d9;">${current.details}</pre>
    `;
  }
}

function updateCalculatedPrice() {
  if (!selectedProduct) return;
  const pkgIndex = document.getElementById('order-package').value;
  const qty = parseInt(document.getElementById('order-qty').value) || 1;
  const usdTotal = selectedProduct.packages[pkgIndex].price * qty;
  const dzdTotal = Math.round(usdTotal * DZD_RATE);

  document.getElementById('order-total-price').innerText = `${formatPrice(usdTotal)} (${usdTotal.toFixed(2)}$ / ${dzdTotal.toLocaleString()} دج)`;
}

function handleOrderSubmit(e) {
  e.preventDefault();
  const fileInput = document.getElementById('order-receipt-file');
  if (fileInput && fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      processOrderFinal(event.target.result);
    };
    reader.readAsDataURL(file);
  } else {
    processOrderFinal("");
  }
}

function processOrderFinal(receiptImage) {
  const targetVal = document.getElementById('order-target-value').value.trim();
  const pkgIndex = document.getElementById('order-package').value;
  const qty = document.getElementById('order-qty').value;
  const pkg = selectedProduct.packages[pkgIndex];
  const usdTotal = (pkg.price * qty).toFixed(2);
  const dzdTotal = Math.round(pkg.price * qty * DZD_RATE).toLocaleString();

  const selectedPayObj = paymentMethods.find(m => m.id === selectedPaymentMethodId);
  const payName = selectedPayObj ? selectedPayObj.name : 'طريقة دفع';

  const orderId = 'AK-' + Math.floor(100000 + Math.random() * 900000);
  
  const newOrder = {
    id: orderId,
    product: selectedProduct.name,
    type: selectedProduct.type,
    package: pkg.name,
    quantity: qty,
    targetValue: targetVal,
    totalUSD: `$${usdTotal}`,
    totalDZD: `${dzdTotal} دج`,
    paymentMethod: payName,
    receiptImg: receiptImage,
    status: 'Pending Verification',
    deliveredCode: '',
    date: new Date().toLocaleDateString(),
    userEmail: currentUser ? currentUser.email : (selectedProduct.type === 'giftcard' ? targetVal : 'Guest')
  };

  orders.push(newOrder);
  safeSet('ak_orders', orders);

  const targetFieldText = selectedProduct.type === 'giftcard' ? `إيميل الاستلام: ${targetVal}` : `معرف الحساب (UID): ${targetVal}`;

  const waMsg = encodeURIComponent(
    `*طلب جديد من Akatsuki-Store*\n` +
    `رقم الطلب: ${orderId}\n` +
    `نوع الطلب: ${selectedProduct.type === 'giftcard' ? 'بطاقة رقمية / Gift Card' : 'شحن ألعاب / Top-Up'}\n` +
    `المنتج: ${selectedProduct.name}\n` +
    `الباقة: ${pkg.name}\n` +
    `الكمية: ${qty}\n` +
    `${targetFieldText}\n` +
    `طريقة الدفع: ${payName}\n` +
    `المبلغ: $${usdTotal} (${dzdTotal} دج)\n\n` +
    `✅ *ملاحظة:* تم إرفاق وصل الدفع مع الطلب.`
  );

  alert("✅ تم إرسال طلبك بنجاح! جاري تحويلك إلى واتساب لتأكيد الشحن الفوري.");
  closeOrderModal();

  const waUrl = `https://wa.me/${storeSettings.whatsapp || '213556334891'}?text=${waMsg}`;
  window.open(waUrl, '_blank');
}

function addNewPaymentMethod(e) {
  e.preventDefault();
  const name = document.getElementById('new-pay-name').value.trim();
  const details = document.getElementById('new-pay-details').value.trim();

  paymentMethods.push({
    id: 'pay_' + Date.now(),
    name,
    details,
    enabled: true
  });

  safeSet('ak_payment_methods', paymentMethods);
  renderAdminPaymentsList();
  renderActivePaymentMethods();
  document.getElementById('new-payment-form').reset();
  alert("تمت إضافة طريقة الدفع بنجاح!");
}

function togglePaymentStatus(id) {
  const index = paymentMethods.findIndex(m => m.id === id);
  if (index !== -1) {
    paymentMethods[index].enabled = !paymentMethods[index].enabled;
    safeSet('ak_payment_methods', paymentMethods);
    renderAdminPaymentsList();
    renderActivePaymentMethods();
  }
}

function deletePaymentMethod(id) {
  if (confirm("هل تريد حذف طريقة الدفع نهائياً؟")) {
    paymentMethods = paymentMethods.filter(m => m.id !== id);
    safeSet('ak_payment_methods', paymentMethods);
    renderAdminPaymentsList();
    renderActivePaymentMethods();
  }
}

function renderAdminPaymentsList() {
  const container = document.getElementById('admin-payments-list');
  if (!container) return;
  container.innerHTML = paymentMethods.map(m => `
    <div style="background:var(--bg-color); padding:0.8rem; margin-bottom:0.6rem; border-radius:6px; display:flex; justify-content:space-between; align-items:center; border: 1px solid ${m.enabled ? '#30363d' : '#e50914'};">
      <div style="max-width: 65%;">
        <strong>${m.name}</strong> 
        <span style="font-size:0.75rem; font-weight:bold; color:${m.enabled ? '#4BB543' : '#ff6b6b'}; margin-right:5px;">
          ● ${m.enabled ? 'مفعلة وشغالة' : 'معطلة مؤقتاً'}
        </span>
        <p style="font-size:0.75rem; color:var(--text-muted); white-space:pre-wrap; margin-top:4px;">${m.details}</p>
      </div>
      <div style="display:flex; gap:6px; flex-shrink:0;">
        <button onclick="togglePaymentStatus('${m.id}')" style="background:${m.enabled ? '#e50914' : '#4BB543'}; color:#fff; border:none; padding:6px 12px; border-radius:6px; cursor:pointer; font-weight:bold; font-size:0.8rem;">
          ${m.enabled ? 'إيقاف' : 'تفعيل'}
        </button>
        <button onclick="deletePaymentMethod('${m.id}')" style="background:#2d333b; color:#8b949e; border:1px solid #444c56; padding:6px 10px; border-radius:6px; cursor:pointer; font-size:0.8rem;">
          حذف
        </button>
      </div>
    </div>
  `).join('');
}

function editProduct(id) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;

  document.getElementById('edit-product-id').value = prod.id;
  document.getElementById('prod-name').value = prod.name;
  document.getElementById('prod-cat').value = prod.category;
  document.getElementById('prod-image-url').value = prod.image || '';
  
  if (prod.displayPrice) {
    document.getElementById('prod-display-price').value = prod.displayPrice;
  } else {
    document.getElementById('prod-display-price').value = '';
  }

  const pkgText = (prod.packages || []).map(p => `${p.name} : ${p.price}`).join(' , ');
  document.getElementById('prod-packages').value = pkgText;

  document.getElementById('form-product-title').innerText = `تعديل منتج: ${prod.name}`;
  document.getElementById('btn-save-product').innerText = "تحديث وتعديل المنتج";

  document.getElementById('tab-admin-products').scrollIntoView({ behavior: 'smooth' });
}

function resetProductForm() {
  document.getElementById('edit-product-id').value = '';
  document.getElementById('product-form').reset();
  document.getElementById('form-product-title').innerText = "إضافة أو تعديل منتج / بطاقة";
  document.getElementById('btn-save-product').innerText = "حفظ المنتج";
}

function saveProduct(e) {
  e.preventDefault();
  const id = document.getElementById('edit-product-id').value || 'p' + Date.now();
  const name = document.getElementById('prod-name').value.trim();
  const category = document.getElementById('prod-cat').value;
  const type = (category === 'giftcards' || category === 'subs') ? 'giftcard' : 'topup';
  let imgUrl = document.getElementById('prod-image-url').value.trim();
  const displayPriceRaw = document.getElementById('prod-display-price').value.trim();
  const rawPackages = document.getElementById('prod-packages').value;

  let customDisplayPrice = null;
  if (displayPriceRaw) {
    const num = parseFloat(displayPriceRaw.replace(/[^0-9\.]/g, ''));
    if (!isNaN(num)) {
      customDisplayPrice = (displayPriceRaw.toLowerCase().includes('da') || displayPriceRaw.includes('دج') || num > 70) 
        ? parseFloat((num / DZD_RATE).toFixed(2)) 
        : num;
    }
  }

  const items = rawPackages.split(/[\n,]+/).map(l => l.trim()).filter(l => l.length > 0);
  const parsedPackages = [];

  items.forEach(item => {
    let pkgName = item;
    let priceUSD = 1.00;

    if (item.includes(':')) {
      const parts = item.split(':');
      pkgName = parts[0].trim();
      const rightSide = parts[1].trim();
      const numMatch = rightSide.match(/(\d+[\.,]?\d*)/);
      if (numMatch) {
        const val = parseFloat(numMatch[1].replace(',', '.'));
        if (rightSide.toLowerCase().includes('da') || rightSide.includes('دج') || val > 70) {
          priceUSD = val / DZD_RATE;
        } else {
          priceUSD = val;
        }
      }
    } else {
      const matches = item.match(/\d+[\.,]?\d*/g);
      if (matches && matches.length > 0) {
        const lastNum = parseFloat(matches[matches.length - 1].replace(',', '.'));
        priceUSD = lastNum > 70 ? (lastNum / DZD_RATE) : lastNum;
      }
    }

    parsedPackages.push({
      name: pkgName,
      price: parseFloat(priceUSD.toFixed(2))
    });
  });

  if (parsedPackages.length === 0) {
    parsedPackages.push({ name: name, price: 1.00 });
  }

  const existingIdx = products.findIndex(p => p.id === id);
  const newProdData = {
    id,
    name,
    category,
    type,
    image: imgUrl || POSTERS.roblox,
    displayPrice: customDisplayPrice,
    packages: parsedPackages
  };

  if (existingIdx > -1) {
    products[existingIdx] = newProdData;
  } else {
    products.push(newProdData);
  }

  renderProducts();
  renderAdminProductsList();
  resetProductForm();
  alert("✅ تم حفظ وتحديث المنتج بنجاح!");
}

function deleteProduct(id) {
  if (confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
    products = products.filter(p => p.id !== id);
    renderProducts();
    renderAdminProductsList();
  }
}

function renderAdminProductsList() {
  const container = document.getElementById('admin-products-list');
  if (!container) return;
  container.innerHTML = products.map(p => `
    <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-color); padding:0.6rem; margin-bottom:0.5rem; border-radius:6px; border:1px solid #21262d;">
      <div>
        <strong>${p.name}</strong> 
        <span style="font-size:0.75rem; color:#4BB543; margin-right:8px;">(السعر: ${formatPrice(p.displayPrice || (p.packages[0] ? p.packages[0].price : 1))})</span>
      </div>
      <div style="display:flex; gap:6px;">
        <button onclick="editProduct('${p.id}')" style="background:#1f6feb; border:none; color:#fff; padding:4px 10px; border-radius:4px; cursor:pointer; font-weight:bold; font-size:0.8rem;">تعديل</button>
        <button onclick="deleteProduct('${p.id}')" style="background:#e50914; border:none; color:#fff; padding:4px 8px; border-radius:4px; cursor:pointer; font-size:0.8rem;">حذف</button>
      </div>
    </div>
  `).join('');
}

function renderAdminOrdersTable() {
  const table = document.getElementById('admin-orders-table');
  if (!table) return;
  if (orders.length === 0) {
    table.innerHTML = "<p>لا توجد طلبات واردة بعد.</p>";
    return;
  }

  table.innerHTML = orders.slice().reverse().map(o => `
    <div style="background:var(--bg-color); padding:0.8rem; margin-bottom:0.8rem; border-radius:6px; border: 1px solid var(--border-color);">
      <p><strong>طلب #${o.id}</strong> (${o.type === 'giftcard' ? 'بطاقة رقمية' : 'شحن ID'})</p>
      <p>المنتج: ${o.product} - ${o.package} (الكمية: ${o.quantity})</p>
      <p>${o.type === 'giftcard' ? 'إيميل العميل' : 'معرف UID'}: <code>${o.targetValue}</code></p>
      <p>المبلغ: <strong>${o.totalUSD} / ${o.totalDZD}</strong> (طريقة الدفع: ${o.paymentMethod})</p>
      <p>الحالة: <span style="color:${o.status === 'Completed' ? '#4BB543' : '#ffaa00'}">${o.status}</span></p>
      
      ${o.receiptImg ? `
        <div style="margin: 8px 0;">
          <p style="font-size:0.8rem; color:#8b949e; margin-bottom:4px;">وصل الدفع المرفق:</p>
          <a href="${o.receiptImg}" target="_blank">
            <img src="${o.receiptImg}" style="max-width: 140px; max-height: 140px; border-radius: 6px; border: 1px solid #444c56; cursor: pointer;" alt="Receipt">
          </a>
        </div>
      ` : '<p style="color:#ff6b6b; font-size:0.75rem;">لا يوجد وصل مرفق</p>'}

      ${o.deliveredCode ? `<p>الكود المسلّم: <b style="color:#4BB543;">${o.deliveredCode}</b></p>` : ''}
      
      <div style="margin-top:0.5rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
        <button onclick="approveOrder('${o.id}')" class="btn-primary" style="padding:4px 8px; font-size:0.8rem;">تأكيد الدفع</button>
        ${o.type === 'giftcard' ? `<button onclick="promptDeliverCode('${o.id}')" style="background:#4BB543; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer; font-size:0.8rem;">تسليم كود البطاقة</button>` : ''}
      </div>
    </div>
  `).join('');
}

function approveOrder(id) {
  const order = orders.find(o => o.id === id);
  if (order) {
    order.status = 'Completed';
    safeSet('ak_orders', orders);
    renderAdminOrdersTable();
    alert("تم تأكيد الدفع بنجاح!");
  }
}

function promptDeliverCode(id) {
  const code = prompt("أدخل كود البطاقة أو بيانات الحساب لإرسالها لحساب العميل:");
  if (code) {
    const order = orders.find(o => o.id === id);
    if (order) {
      order.deliveredCode = code;
      order.status = 'Completed';
      safeSet('ak_orders', orders);
      renderAdminOrdersTable();
      alert("تم تسليم الكود للطلب بنجاح! سيظهر في حساب العميل مباشرة.");
    }
  }
}

function openAuthModal() {
  document.getElementById('auth-modal').style.display = 'flex';
  if (currentUser) showUserDashboard();
}

function closeAuthModal() {
  document.getElementById('auth-modal').style.display = 'none';
}

function toggleAuthForm(mode) {
  if (mode === 'login') {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
  } else {
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
  safeSet('ak_users', users);
  currentUser = newUser;
  safeSet('ak_current_user', currentUser);
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
    safeSet('ak_current_user', currentUser);
    updateUserUI();
    showUserDashboard();
  } else {
    alert("بيانات الدخول غير صحيحة");
  }
}

function showUserDashboard() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.add('hidden');
  document.getElementById('user-dashboard').classList.remove('hidden');
  document.getElementById('welcome-user').innerText = `مرحباً بك، ${currentUser.name}`;

  const list = document.getElementById('user-orders-list');
  const userOrders = orders.filter(o => o.userEmail === currentUser.email || o.targetValue === currentUser.email);
  
  if (userOrders.length === 0) {
    list.innerHTML = "<p>لا توجد طلبات سابقة بعد.</p>";
  } else {
    list.innerHTML = userOrders.map(o => `
      <div style="background:var(--bg-color); padding:0.6rem; margin-bottom:0.5rem; border-radius:6px; border:1px solid var(--border-color);">
        <strong>${o.product} (${o.package})</strong> - ${o.totalUSD} / ${o.totalDZD} <br>
        <small>الحالة: <b>${o.status}</b> | التاريخ: ${o.date}</small>
        ${o.deliveredCode ? `<div style="background:#162a19; color:#4BB543; padding:5px; margin-top:5px; border-radius:4px;">كود البطاقة المستلم: <b>${o.deliveredCode}</b></div>` : ''}
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
    const userBtn = document.getElementById('user-btn-text');
    if (userBtn) userBtn.innerText = currentUser.name;
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
    renderAdminPaymentsList();
    renderAdminOrdersTable();
    loadAdminSettingsInputs();
  } else {
    alert("خطأ في بيانات دخول الأدمن!");
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
    renderAdminProductsList();
  } else if (tab === 'payments') {
    document.getElementById('tab-admin-payments').classList.remove('hidden');
    renderAdminPaymentsList();
  } else if (tab === 'orders') {
    document.getElementById('tab-admin-orders').classList.remove('hidden');
    renderAdminOrdersTable();
  } else if (tab === 'settings') {
    document.getElementById('tab-admin-settings').classList.remove('hidden');
    loadAdminSettingsInputs();
  }
}

function loadAdminSettingsInputs() {
  const nameInput = document.getElementById('setting-store-name');
  const logoInput = document.getElementById('setting-logo-url');
  const heroInput = document.getElementById('setting-hero-url');
  const galleryInput = document.getElementById('setting-gallery-urls');
  const heroTitle = document.getElementById('setting-hero-title');
  const heroSub = document.getElementById('setting-hero-sub');
  const hideHeroText = document.getElementById('setting-hide-hero-text');
  const heroAlign = document.getElementById('setting-hero-align');

  if (nameInput) nameInput.value = storeSettings.name || '';
  if (logoInput) logoInput.value = storeSettings.logoUrl || '';
  if (heroInput) heroInput.value = storeSettings.heroUrl || '';
  if (galleryInput) galleryInput.value = (storeSettings.galleryUrls || []).join(', ');
  if (heroTitle) heroTitle.value = storeSettings.heroTitle || '';
  if (heroSub) heroSub.value = storeSettings.heroSubtitle || '';
  if (hideHeroText) hideHeroText.checked = storeSettings.hideHeroText || false;
  if (heroAlign) heroAlign.value = storeSettings.heroTextAlign || 'center';
}

function saveStoreSettings() {
  const name = document.getElementById('setting-store-name').value.trim();
  const logoUrl = document.getElementById('setting-logo-url').value.trim();
  const heroUrl = document.getElementById('setting-hero-url').value.trim();
  const galleryRaw = document.getElementById('setting-gallery-urls').value.trim();
  const heroTitle = document.getElementById('setting-hero-title').value.trim();
  const heroSub = document.getElementById('setting-hero-sub').value.trim();
  const hideHeroText = document.getElementById('setting-hide-hero-text').checked;
  const heroTextAlign = document.getElementById('setting-hero-align').value;

  if (name) storeSettings.name = name;
  storeSettings.logoUrl = logoUrl;
  storeSettings.heroUrl = heroUrl;
  storeSettings.heroTitle = heroTitle;
  storeSettings.heroSubtitle = heroSub;
  storeSettings.hideHeroText = hideHeroText;
  storeSettings.heroTextAlign = heroTextAlign;

  if (galleryRaw) {
    storeSettings.galleryUrls = galleryRaw.split(/[\n,]+/).map(u => u.trim()).filter(u => u.length > 0);
  } else {
    storeSettings.galleryUrls = [];
  }

  safeSet('ak_settings', storeSettings);
  renderStoreBranding();
  renderFooterGallery();
  alert("✅ تم حفظ إعدادات المظهر بنجاح!");
}

function renderFooterGallery() {
  const container = document.getElementById('bottom-gallery-container');
  if (!container) return;
  if (!storeSettings.galleryUrls || storeSettings.galleryUrls.length === 0) {
    container.innerHTML = '';
    return;
  }
  container.innerHTML = storeSettings.galleryUrls.map(url => `<img src="${url}" alt="Gallery item" onerror="this.style.display='none'">`).join('');
}
