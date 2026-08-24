const DZD_RATE = 280;

const DEFAULT_PRODUCTS = [
  {
    id: "p1",
    name: "Roblox (Robux)",
    category: "games",
    type: "topup",
    image: "https://images.unsplash.com/photo-1612287233207-6f8b5f36e4f3?w=500",
    displayPrice: 1.20,
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
    type: "topup",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500",
    displayPrice: 2.00,
    packages: [
      { name: "210+21 Diamond", price: 2.00 },
      { name: "530+53 Diamond", price: 5.00 },
      { name: "1080+108 Diamond", price: 10.00 },
      { name: "2200+220 Diamond", price: 21.00 }
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

let products = safeGet('ak_products', DEFAULT_PRODUCTS);
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
    let showPrice = p.displayPrice !== undefined && p.displayPrice !== null && p.displayPrice > 0 
      ? p.displayPrice 
      : (p.packages && p.packages.length > 0 ? Math.min(...p.packages.map(pkg => pkg.price)) : 1.00);

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" class="product-img" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500'">
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
    `المبلغ الإجمالي: $${usdTotal} (${dzdTotal} دج)\n\n` +
    `📸 *ملاحظة:* تم إرفاق صورة وصل الدفع (Screenshot) مع هذه الرسالة لتأكيد الطلب.`
  );

  alert("سيتم نقلك إلى واتساب.. يرجى إرفاق صورة وصل التحويل في المحادثة لتأكيد شحن حسابك!");
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
    image: imgUrl || "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500",
    displayPrice: customDisplayPrice,
    packages: parsedPackages
  };

  if (existingIdx > -1) {
    products[existingIdx] = newProdData;
  } else {
    products.push(newProdData);
  }

  safeSet('ak_products', products);
  renderProducts();
  renderAdminProductsList();
  resetProductForm();
  alert("✅ تم تحديث ونشر المنتج بنجاح!");
}

function deleteProduct(id) {
  if (confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
    products = products.filter(p => p.id !== id);
    safeSet('ak_products', products);
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
    <div style="background:var(--bg-color); padding:0.8rem; margin-bottom:0.8rem; border-radius:6px;">
      <p><strong>طلب #${o.id}</strong> (${o.type === 'giftcard' ? 'بطاقة رقمية' : 'شحن ID'})</p>
      <p>المنتج: ${o.product} - ${o.package} (الكمية: ${o.quantity})</p>
      <p>${o.type === 'giftcard' ? 'إيميل العميل' : 'معرف UID'}: <code>${o.targetValue}</code></p>
      <p>المبلغ: <strong>${o.totalUSD} / ${o.totalDZD}</strong> (طريقة الدفع: ${o.paymentMethod})</p>
      <p>الحالة: <span style="color:${o.status === 'Completed' ? '#4BB543' : '#ffaa00'}">${o.status}</span></p>
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
