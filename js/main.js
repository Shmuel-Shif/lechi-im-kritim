/**
 * לחיים בכריתים – Tablet Restaurant App
 */

/* ============================================================
   תרגומים
   ============================================================ */
const TRANSLATIONS = {
  he: {
    bh: 'ב״ה',
    welcome: 'ברוכים הבאים',
    restaurantName: 'לחיים בכריתים',
    pageTitle: 'לחיים בכריתים',
    toMenu: 'לתפריט',
    search: 'חיפוש',
    myCart: 'הסל שלי',
    cartTitle: 'ההזמנה שלך',
    cartEmpty: 'הסל ריק',
    cartEmptyHint: 'בחרו מנות מהתפריט',
    total: 'סה״כ',
    viewCart: 'צפה בסל',
    sendOrder: 'שליחת הזמנה למלצר',
    searchPlaceholder: 'חיפוש לפי שם מנה...',
    noResults: 'לא נמצאו מנות',
    orderSent: 'ההזמנה נשלחה למלצר בהצלחה!',
    itemsInCart: '{n} פריטים בסל',
    itemsInCartZero: 'אין פריטים בסל',
    oneItemInCart: 'פריט אחד בסל',
    currency: '₪',
    langToggleAria: 'החלפת שפה – עברית / English',
    close: 'סגור',
    backHome: 'חזרה למסך הבית',
    addToCart: 'הוסף {name}',
    addToCartModal: 'הוסף לסל',
    decrease: 'הפחת כמות',
    increase: 'הוסף כמות',
    categories: {
      mains: 'מנות עיקריות',
      starters: 'ראשונות ונשנושים',
      salads: 'סלטים וטורטיות',
      desserts: 'קינוחים',
      coldDrinks: 'שתייה קלה',
      hotDrinks: 'שתייה חמה',
    },
  },
  en: {
    bh: 'B"H',
    welcome: 'Welcome',
    restaurantName: 'LeChaim in Keri',
    pageTitle: 'LeChaim in Keri',
    toMenu: 'View Menu',
    search: 'Search',
    myCart: 'My Cart',
    cartTitle: 'Your Order',
    cartEmpty: 'Cart is empty',
    cartEmptyHint: 'Choose dishes from the menu',
    total: 'Total',
    viewCart: 'View Cart',
    sendOrder: 'Send Order to Waiter',
    searchPlaceholder: 'Search by dish name...',
    noResults: 'No dishes found',
    orderSent: 'Order sent to the waiter!',
    itemsInCart: '{n} items in cart',
    itemsInCartZero: 'No items in cart',
    oneItemInCart: '1 item in cart',
    currency: '₪',
    langToggleAria: 'Switch language – Hebrew / English',
    close: 'Close',
    backHome: 'Back to home',
    addToCart: 'Add {name}',
    addToCartModal: 'Add to cart',
    decrease: 'Decrease quantity',
    increase: 'Increase quantity',
    categories: {
      mains: 'Main Courses',
      starters: 'Starters & Snacks',
      salads: 'Salads & Tortillas',
      desserts: 'Desserts',
      coldDrinks: 'Soft Drinks',
      hotDrinks: 'Hot Drinks',
    },
  },
};

/** תרגום שמות ותיאורי מנות */
const DISH_I18N = {
  en: {
    schnitzel: { name: "Chef's Schnitzel", desc: 'Crispy chicken schnitzel with house sides' },
    'chicken-steak': { name: 'Grilled Chicken Steak', desc: 'Juicy grilled chicken with vegetables' },
    denis: { name: 'Baked Sea Bream Fillet', desc: 'Fresh fish baked with olive oil and lemon' },
    salmon: { name: 'Seared Salmon Steak', desc: 'Seared salmon with delicate cream sauce' },
    noodles: { name: 'Asian Salmon Noodles', desc: 'Stir-fried noodles with salmon and vegetables' },
    'salad-plate': { name: 'Opening Salad Platter', desc: 'Selection of fresh salads from the kitchen' },
    hummus: { name: 'House Hummus', desc: 'Creamy hummus with tahini and pitas' },
    antipasti: { name: 'Colorful Antipasti', desc: 'Roasted vegetables, olives and cheeses' },
    mushrooms: { name: 'Sautéed Mushrooms', desc: 'Mushrooms sautéed in garlic oil' },
    fries: { name: 'Classic Fries', desc: 'Crispy fries with sea salt' },
    'tortilla-salmon': { name: 'Salmon & Avocado Tortilla', desc: 'Tortilla filled with salmon and avocado' },
    'chicken-salad': { name: 'Rich Chicken Salad', desc: 'Chicken with fresh vegetables and house dressing' },
    'israeli-salad': { name: 'Israeli Chopped Salad', desc: 'Tomatoes, cucumber, onion and lemon' },
    'green-salad': { name: 'Green Leaf Salad', desc: 'Fresh greens with balsamic vinaigrette' },
    'fruit-plate': { name: 'Seasonal Fruit Platter', desc: 'Fresh sweet fruits from the market' },
    coke: { name: 'Coca-Cola', desc: '330 ml' },
    'coke-zero': { name: 'Coke Zero', desc: '330 ml' },
    fuzetea: { name: 'Fuze Tea', desc: '330 ml' },
    soda: { name: 'Soda', desc: '330 ml' },
    water: { name: 'Mineral Water', desc: '500 ml' },
    espresso: { name: 'Espresso', desc: 'Strong concentrated coffee' },
    cappuccino: { name: 'Cappuccino', desc: 'Espresso with foamed milk' },
    'black-coffee': { name: 'Black Coffee', desc: 'Turkish / American coffee' },
    'mint-tea': { name: 'Mint Tea', desc: 'Refreshing mint tea' },
    'iced-coffee': { name: 'Iced Coffee', desc: 'Iced coffee with ice' },
  },
};

let currentLang = 'he';

function getItemName(item) {
  if (currentLang === 'en' && DISH_I18N.en[item.id]) {
    return DISH_I18N.en[item.id].name;
  }
  return item.name;
}

function getItemDesc(item) {
  if (currentLang === 'en' && DISH_I18N.en[item.id]) {
    return DISH_I18N.en[item.id].desc;
  }
  return item.desc;
}

/** מעדכן את מצב הכפתורים (מסך בית + תפריט) */
function updateLangToggleUI() {
  document.querySelectorAll('.lang-toggle [data-lang]').forEach((opt) => {
    opt.classList.toggle('lang-toggle__option--active', opt.dataset.lang === currentLang);
  });
}

function setDocumentLanguage() {
  const dir = currentLang === 'he' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = dir;
  document.title = t('pageTitle');
}

/** החלפת שפה */
function toggleLanguage(targetLang) {
  const nextLang = targetLang === 'he' || targetLang === 'en'
    ? targetLang
    : (currentLang === 'he' ? 'en' : 'he');

  if (nextLang === currentLang) return;

  currentLang = nextLang;
  setDocumentLanguage();
  updateLangToggleUI();
  applyTranslations();
  refreshLocalizedUI();
}

function t(key) {
  const keys = key.split('.');
  let value = TRANSLATIONS[currentLang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value ?? key;
}

function tReplace(key, vars) {
  let text = t(key);
  Object.entries(vars).forEach(([k, v]) => {
    text = text.replace(`{${k}}`, v);
  });
  return text;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });
}

function refreshLocalizedUI() {
  if (!els.menuScreen.classList.contains('screen--active')) return;

  renderCategories();
  renderDishes();
  updateCart();

  if (state.dishModalId) {
    const item = findItem(state.dishModalId);
    if (item) {
      els.dishModalImage.alt = getItemName(item);
      els.dishModalTitle.textContent = getItemName(item);
      els.dishModalDesc.textContent = getItemDesc(item);
      els.dishModalPrice.textContent = formatPrice(item.price);
      updateDishModalAddBtn();
    }
  }
}

/* ============================================================
   תמונת מנה ברירת מחדל (זמני – עד תמונה לכל מנה)
   ============================================================ */
const DEFAULT_DISH_IMAGE = 'assets/images/dishes/Salmon-grilled.png';

/* ============================================================
   תפריט
   ============================================================ */
const MENU = [
  {
    id: 'mains',
    labelKey: 'categories.mains',
    items: [
      { id: 'schnitzel', name: 'השניצל של השף', desc: 'שניצל עוף פריך עם תוספות הבית', price: 68 },
      { id: 'chicken-steak', name: 'סטייק פרגית בגריל', desc: 'פרגית עסיסית על הגריל עם ירקות', price: 72 },
      { id: 'denis', name: 'פילה דניס בתנור', desc: 'דג טרי בתנור עם שמן זית ולימון', price: 89 },
      { id: 'salmon', name: 'נתח סלמון צרוב', desc: 'סלמון צרוב עם רוטב שמנת עדין', price: 94 },
      { id: 'noodles', name: 'נודלס סלמון אסייתי', desc: 'נודלס מוקפץ עם סלמון וירקות', price: 78 },
    ],
  },
  {
    id: 'starters',
    labelKey: 'categories.starters',
    items: [
      { id: 'salad-plate', name: 'פלטת סלטים פתיחה', desc: 'מבחר סלטים טריים מהמטבח', price: 42 },
      { id: 'hummus', name: 'חומוס הבית', desc: 'חומוס קרמי עם טחינה ופיתות', price: 32 },
      { id: 'antipasti', name: 'אנטיפסטי צבעוני', desc: 'ירקות קלויים, זיתים וגבינות', price: 48 },
      { id: 'mushrooms', name: 'פטריות חמות', desc: 'פטריות מוקפצות בשמן שום', price: 38 },
      { id: 'fries', name: "צ'יפס קלאסי", desc: 'צ׳יפס פריך עם מלח ים', price: 28 },
    ],
  },
  {
    id: 'salads',
    labelKey: 'categories.salads',
    items: [
      { id: 'tortilla-salmon', name: 'טורטייה סלמון ואבוקדו', desc: 'טורטייה ממולאת בסלמון ואבוקדו', price: 58 },
      { id: 'chicken-salad', name: 'סלט פרגית עשיר', desc: 'פרגית עם ירקות טריים ורוטב בית', price: 52 },
      { id: 'israeli-salad', name: 'סלט קצוץ ישראלי', desc: 'עגבניות, מלפפון, בצל ולימון', price: 28 },
      { id: 'green-salad', name: 'סלט עלים ירוקים', desc: 'עלים טריים עם ויניגרט בלסמי', price: 36 },
    ],
  },
  {
    id: 'desserts',
    labelKey: 'categories.desserts',
    items: [
      { id: 'fruit-plate', name: 'פלטת פירות העונה', desc: 'פירות טריים ומתוקים מהשוק', price: 38 },
    ],
  },
  {
    id: 'coldDrinks',
    labelKey: 'categories.coldDrinks',
    items: [
      { id: 'coke', name: 'קוקה קולה', desc: '330 מ״ל', price: 14 },
      { id: 'coke-zero', name: 'קולה זירו', desc: '330 מ״ל', price: 14 },
      { id: 'fuzetea', name: 'פיוזטי', desc: '330 מ״ל', price: 14 },
      { id: 'soda', name: 'סודה', desc: '330 מ״ל', price: 10 },
      { id: 'water', name: 'מים מינרליים', desc: '500 מ״ל', price: 10 },
    ],
  },
  {
    id: 'hotDrinks',
    labelKey: 'categories.hotDrinks',
    items: [
      { id: 'espresso', name: 'אספרסו', desc: 'קפה חזק ומרוכז', price: 12 },
      { id: 'cappuccino', name: 'קפה הפוך', desc: 'אספרסו עם חלב מוקצף', price: 16 },
      { id: 'black-coffee', name: 'קפה שחור', desc: 'קפה טורקי/אמריקאי', price: 12 },
      { id: 'mint-tea', name: 'תה עם נענע', desc: 'תה נענע רענן', price: 14 },
      { id: 'iced-coffee', name: 'קפה קר', desc: 'קפה קר עם קרח', price: 18 },
    ],
  },
];

/* ============================================================
   מצב
   ============================================================ */
const state = {
  activeCategory: MENU[0].id,
  searchQuery: '',
  cart: {},
  cartOrder: [], // מזהי מנות – החדש ביותר ראשון
  cartDrawerOpen: false,
  searchOpen: false,
  dishModalId: null,
};

/** מעביר מנה לראש רשימת הסל */
function moveCartItemToTop(itemId) {
  state.cartOrder = state.cartOrder.filter((id) => id !== itemId);
  state.cartOrder.unshift(itemId);
}

/* ============================================================
   DOM
   ============================================================ */
const els = {
  splashScreen: document.getElementById('splash-screen'),
  menuScreen: document.getElementById('menu-screen'),
  btnStart: document.getElementById('btn-start'),
  btnBackHome: document.getElementById('btn-back-home'),
  categoriesNav: document.getElementById('categories-nav'),
  dishesGrid: document.getElementById('dishes-grid'),
  dishesEmpty: document.getElementById('dishes-empty'),
  sectionTitleText: document.getElementById('section-title-text'),
  searchInput: document.getElementById('search-input'),
  searchPanel: document.getElementById('search-panel'),
  btnSearchToggle: document.getElementById('btn-search-toggle'),
  btnCloseSearch: document.getElementById('btn-close-search'),
  cartList: document.getElementById('cart-list'),
  cartEmpty: document.getElementById('cart-empty'),
  cartTotal: document.getElementById('cart-total'),
  cartBarTotal: document.getElementById('cart-bar-total'),
  cartBarCount: document.getElementById('cart-bar-count'),
  cartBar: document.getElementById('cart-bar'),
  headerCartBadge: document.getElementById('header-cart-badge'),
  btnSendOrder: document.getElementById('btn-send-order'),
  btnViewCart: document.getElementById('btn-view-cart'),
  btnExpandCart: document.getElementById('btn-expand-cart'),
  btnOpenCart: document.getElementById('btn-open-cart'),
  btnCloseCart: document.getElementById('btn-close-cart'),
  cartDrawer: document.getElementById('cart-drawer'),
  cartDrawerBackdrop: document.getElementById('cart-drawer-backdrop'),
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message'),
  splashLogo: document.getElementById('splash-logo'),
  headerLogo: document.getElementById('header-logo'),
  dishModal: document.getElementById('dish-modal'),
  dishModalBackdrop: document.getElementById('dish-modal-backdrop'),
  dishModalImage: document.getElementById('dish-modal-image'),
  dishModalTitle: document.getElementById('dish-modal-title'),
  dishModalDesc: document.getElementById('dish-modal-desc'),
  dishModalPrice: document.getElementById('dish-modal-price'),
  btnCloseDishModal: document.getElementById('btn-close-dish-modal'),
  btnModalAdd: document.getElementById('btn-modal-add'),
};

/* ============================================================
   עזר
   ============================================================ */
function findItem(itemId) {
  for (const category of MENU) {
    const item = category.items.find((i) => i.id === itemId);
    if (item) return item;
  }
  return null;
}

function formatPrice(amount) {
  return `${t('currency')}${amount}`;
}

function getCartItemCount() {
  return Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
}

function getCartTotal() {
  return Object.entries(state.cart).reduce((sum, [id, qty]) => {
    const item = findItem(id);
    return sum + (item ? item.price * qty : 0);
  }, 0);
}

function getItemsInCartText(count) {
  if (count === 0) return t('itemsInCartZero');
  if (count === 1) return t('oneItemInCart');
  return t('itemsInCart').replace('{n}', count);
}

/** לוגו ב-Header (אייקון + טקסט) – מציג fallback אם קובץ חסר */
function setupHeaderLogo(groupEl) {
  if (!groupEl) return;

  const images = [...groupEl.querySelectorAll('img')];
  const fallback = groupEl.nextElementSibling;
  const status = new Map(images.map((img) => [img, null]));

  const update = () => {
    const values = [...status.values()];
    if (values.some((v) => v === 'error')) {
      groupEl.classList.add('menu-header__logo-group--hidden');
      if (fallback) fallback.style.display = 'flex';
      return;
    }
    if (values.every((v) => v === 'ok')) {
      groupEl.classList.remove('menu-header__logo-group--hidden');
      if (fallback) fallback.style.display = 'none';
    }
  };

  const markImage = (img, ok) => {
    status.set(img, ok ? 'ok' : 'error');
    update();
  };

  images.forEach((img) => {
    img.addEventListener('error', () => markImage(img, false));
    img.addEventListener('load', () => markImage(img, img.naturalWidth > 0));
    if (img.complete) markImage(img, img.naturalWidth > 0);
  });
}

/** לוגו במסך הבית */
function setupSplashLogo(imgEl) {
  if (!imgEl) return;
  imgEl.addEventListener('error', () => {
    imgEl.alt = 'לחיים בכריתים';
    imgEl.style.display = 'none';
  });
}

/* ============================================================
   ניווט מסכים
   ============================================================ */
function showMenu() {
  els.splashScreen.classList.remove('screen--active');
  els.menuScreen.hidden = false;
  els.menuScreen.classList.add('screen--active');
  renderCategories();
  updateSectionTitle();
  renderDishes();
}

function showHome() {
  closeDishModal();
  closeCartDrawer();
  if (state.searchOpen) closeSearch();
  els.menuScreen.classList.remove('screen--active');
  els.menuScreen.hidden = true;
  els.splashScreen.classList.add('screen--active');
}

/* ============================================================
   קטגוריות ומנות
   ============================================================ */
function renderCategories() {
  els.categoriesNav.innerHTML = MENU.map((cat) => {
    const label = t(cat.labelKey);
    const isActive = cat.id === state.activeCategory ? 'category-btn--active' : '';
    return `
      <button type="button" class="category-btn ${isActive}" data-category="${cat.id}">
        <img src="assets/icons/categories/${cat.id}.svg" alt="" class="category-btn__icon" width="26" height="26">
        <span class="category-btn__label">${label}</span>
      </button>
    `;
  }).join('');
}

function updateSectionTitle() {
  const cat = MENU.find((c) => c.id === state.activeCategory);
  if (state.searchQuery.trim()) {
    els.sectionTitleText.textContent = t('search');
  } else if (cat) {
    els.sectionTitleText.textContent = t(cat.labelKey);
  }
}

function getFilteredItems() {
  const query = state.searchQuery.trim().toLowerCase();

  if (query) {
    const items = [];
    MENU.forEach((cat) => {
      cat.items.forEach((item) => {
        if (getItemName(item).toLowerCase().includes(query)) {
          items.push(item);
        }
      });
    });
    return items;
  }

  const category = MENU.find((c) => c.id === state.activeCategory);
  return category ? category.items : [];
}

function renderDishes() {
  const items = getFilteredItems();
  updateSectionTitle();

  if (items.length === 0) {
    els.dishesGrid.innerHTML = '';
    els.dishesEmpty.hidden = false;
    return;
  }

  els.dishesEmpty.hidden = true;

  els.dishesGrid.innerHTML = items.map((item) => {
    const inCart = state.cart[item.id] > 0;
    const addedClass = inCart ? 'btn-add--added' : '';
    const imgPath = item.image || DEFAULT_DISH_IMAGE;

    return `
      <article class="dish-card" role="listitem" data-id="${item.id}">
        <div class="dish-card__image-wrap">
          <img
            class="dish-card__image"
            src="${imgPath}"
            alt="${getItemName(item)}"
            loading="lazy"
          >
        </div>
        <div class="dish-card__body">
          <h3 class="dish-card__name">${getItemName(item)}</h3>
          <p class="dish-card__desc">${getItemDesc(item)}</p>
          <div class="dish-card__footer">
            <span class="dish-card__price">${formatPrice(item.price)}</span>
            <button type="button" class="btn-add ${addedClass}" data-add="${item.id}" aria-label="${tReplace('addToCart', { name: getItemName(item) })}">+</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ============================================================
   סל
   ============================================================ */
function addToCart(itemId) {
  state.cart[itemId] = (state.cart[itemId] || 0) + 1;
  moveCartItemToTop(itemId);
  updateCart();
  renderDishes();
  updateDishModalAddBtn();
}

/* ============================================================
   מודל מנה
   ============================================================ */
function updateDishModalAddBtn() {
  if (!state.dishModalId || !els.btnModalAdd) return;
  const inCart = state.cart[state.dishModalId] > 0;
  els.btnModalAdd.classList.toggle('btn-add--added', inCart);
  const item = findItem(state.dishModalId);
  if (item) {
    els.btnModalAdd.setAttribute('aria-label', tReplace('addToCart', { name: getItemName(item) }));
  }
}

function openDishModal(itemId) {
  const item = findItem(itemId);
  if (!item) return;

  state.dishModalId = itemId;
  els.dishModalImage.src = item.image || DEFAULT_DISH_IMAGE;
  els.dishModalImage.alt = getItemName(item);
  els.dishModalTitle.textContent = getItemName(item);
  els.dishModalDesc.textContent = getItemDesc(item);
  els.dishModalPrice.textContent = formatPrice(item.price);
  updateDishModalAddBtn();

  els.dishModal.classList.add('dish-modal--open');
  els.dishModal.setAttribute('aria-hidden', 'false');
}

function closeDishModal() {
  state.dishModalId = null;
  els.dishModal.classList.remove('dish-modal--open');
  els.dishModal.setAttribute('aria-hidden', 'true');
}

function changeQuantity(itemId, delta) {
  const newQty = (state.cart[itemId] || 0) + delta;
  if (newQty <= 0) {
    delete state.cart[itemId];
    state.cartOrder = state.cartOrder.filter((id) => id !== itemId);
  } else {
    state.cart[itemId] = newQty;
    if (delta > 0) moveCartItemToTop(itemId);
  }
  updateCart();
  renderDishes();
}

function updateCart() {
  const count = getCartItemCount();
  const total = getCartTotal();
  const entries = state.cartOrder
    .filter((id) => state.cart[id])
    .map((id) => [id, state.cart[id]]);
  const totalStr = formatPrice(total);

  els.headerCartBadge.textContent = count;
  els.headerCartBadge.dataset.count = count;
  els.cartTotal.textContent = totalStr;
  els.cartBarTotal.textContent = totalStr;
  els.cartBarCount.textContent = getItemsInCartText(count);
  if (els.btnSendOrder) els.btnSendOrder.disabled = count === 0;

  els.cartBar.classList.toggle('cart-bar--empty', count === 0);

  if (entries.length === 0) {
    els.cartEmpty.style.display = '';
    els.cartList.querySelectorAll('.cart-item').forEach((el) => el.remove());
    return;
  }

  els.cartEmpty.style.display = 'none';

  const existingIds = new Set();
  entries.forEach(([id, qty]) => {
    existingIds.add(id);
    const item = findItem(id);
    if (!item) return;

    let cartEl = els.cartList.querySelector(`[data-cart-id="${id}"]`);
    if (!cartEl) {
      cartEl = document.createElement('li');
      cartEl.className = 'cart-item';
      cartEl.dataset.cartId = id;
      cartEl.innerHTML = `
        <div class="cart-item__image-wrap">
          <img class="cart-item__image" src="" alt="">
        </div>
        <div class="cart-item__info">
          <span class="cart-item__name"></span>
        </div>
        <div class="cart-item__side">
          <span class="cart-item__price"></span>
          <div class="qty-control">
            <button type="button" class="qty-btn qty-btn--minus" data-qty-minus aria-label="${t('decrease')}">−</button>
            <span class="qty-value"></span>
            <button type="button" class="qty-btn" data-qty-plus aria-label="${t('increase')}">+</button>
          </div>
        </div>
      `;
      els.cartList.appendChild(cartEl);
    }

    const imgEl = cartEl.querySelector('.cart-item__image');
    imgEl.src = item.image || DEFAULT_DISH_IMAGE;
    imgEl.alt = getItemName(item);

    cartEl.querySelector('.cart-item__name').textContent = getItemName(item);
    cartEl.querySelector('.cart-item__price').textContent = formatPrice(item.price * qty);
    cartEl.querySelector('.qty-value').textContent = qty;
    cartEl.querySelector('[data-qty-minus]')?.setAttribute('aria-label', t('decrease'));
    cartEl.querySelector('[data-qty-plus]')?.setAttribute('aria-label', t('increase'));
  });

  els.cartList.querySelectorAll('.cart-item').forEach((el) => {
    if (!existingIds.has(el.dataset.cartId)) el.remove();
  });

  // סידור מחדש – החדש ביותר למעלה
  entries.forEach(([id]) => {
    const el = els.cartList.querySelector(`[data-cart-id="${id}"]`);
    if (el) els.cartList.appendChild(el);
  });
}

function openCartDrawer() {
  state.cartDrawerOpen = true;
  els.cartDrawer.classList.add('cart-drawer--open');
  els.cartDrawer.setAttribute('aria-hidden', 'false');
  els.btnExpandCart.setAttribute('aria-expanded', 'true');
}

function closeCartDrawer() {
  state.cartDrawerOpen = false;
  els.cartDrawer.classList.remove('cart-drawer--open');
  els.cartDrawer.setAttribute('aria-hidden', 'true');
  els.btnExpandCart.setAttribute('aria-expanded', 'false');
}

function toggleCartDrawer() {
  if (state.cartDrawerOpen) closeCartDrawer();
  else openCartDrawer();
}

function sendOrder() {
  if (getCartItemCount() === 0) return;
  state.cart = {};
  state.cartOrder = [];
  updateCart();
  renderDishes();
  closeCartDrawer();
  showToast(t('orderSent'));
}

function showToast(message) {
  els.toastMessage.textContent = message;
  els.toast.hidden = false;
  requestAnimationFrame(() => els.toast.classList.add('toast--visible'));
  setTimeout(() => {
    els.toast.classList.remove('toast--visible');
    setTimeout(() => { els.toast.hidden = true; }, 350);
  }, 2800);
}

/* ============================================================
   חיפוש
   ============================================================ */
function openSearch() {
  if (state.searchOpen) return;
  state.searchOpen = true;
  els.searchPanel.hidden = false;
  els.btnSearchToggle.setAttribute('aria-expanded', 'true');
  els.searchInput.focus();
}

function closeSearch() {
  if (!state.searchOpen) return;
  state.searchOpen = false;
  els.searchPanel.hidden = true;
  els.btnSearchToggle.setAttribute('aria-expanded', 'false');
  els.searchInput.value = '';
  state.searchQuery = '';
  els.searchInput.blur();
  renderDishes();
}

function toggleSearch() {
  if (state.searchOpen) closeSearch();
  else openSearch();
}

/* ============================================================
   אירועים
   ============================================================ */
function bindEvents() {
  els.btnStart.addEventListener('click', showMenu);
  els.btnBackHome.addEventListener('click', showHome);

  els.categoriesNav.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-category]');
    if (!btn) return;
    state.activeCategory = btn.dataset.category;
    if (state.searchOpen) closeSearch();
    else {
      state.searchQuery = '';
      els.searchInput.value = '';
    }
    renderCategories();
    renderDishes();
  });

  els.dishesGrid.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add]');
    if (addBtn) {
      e.stopPropagation();
      addToCart(addBtn.dataset.add);
      return;
    }
    const card = e.target.closest('.dish-card');
    if (card) openDishModal(card.dataset.id);
  });

  els.btnCloseDishModal.addEventListener('click', closeDishModal);
  els.dishModalBackdrop.addEventListener('click', closeDishModal);
  els.btnModalAdd.addEventListener('click', () => {
    if (!state.dishModalId) return;
    addToCart(state.dishModalId);
    closeDishModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (state.dishModalId) closeDishModal();
    else if (state.searchOpen) closeSearch();
  });

  els.cartList.addEventListener('click', (e) => {
    const cartItem = e.target.closest('.cart-item');
    if (!cartItem) return;
    const id = cartItem.dataset.cartId;
    if (e.target.closest('[data-qty-plus]')) changeQuantity(id, 1);
    if (e.target.closest('[data-qty-minus]')) changeQuantity(id, -1);
  });

  els.btnSendOrder?.addEventListener('click', sendOrder);
  els.btnViewCart.addEventListener('click', openCartDrawer);
  els.btnOpenCart.addEventListener('click', openCartDrawer);
  els.btnExpandCart.addEventListener('click', toggleCartDrawer);
  els.btnCloseCart.addEventListener('click', closeCartDrawer);
  els.cartDrawerBackdrop.addEventListener('click', closeCartDrawer);

  els.btnSearchToggle.addEventListener('click', toggleSearch);
  els.btnCloseSearch.addEventListener('click', closeSearch);
  els.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderDishes();
  });

  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.closest('[data-lang]')?.dataset.lang;
      toggleLanguage(lang);
    });
  });
}

function init() {
  setDocumentLanguage();
  applyTranslations();
  updateLangToggleUI();
  setupSplashLogo(els.splashLogo);
  setupHeaderLogo(els.headerLogo);
  bindEvents();
  updateCart();
}

document.addEventListener('DOMContentLoaded', init);
