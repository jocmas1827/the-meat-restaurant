/**
 * THE MEAT RESTAURANT — MOBILE WEB APPLICATION LOGIC
 * Framework-free, hardware-accelerated micro-interactions
 * Inspired by Emil Kowalski's UI Motion standards
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // DATA: THE MEAT RESTAURANT MENU ITEMS (Using All 29 Generated Assets)
  // =========================================================================
  const MENU_ITEMS = [
    {
      id: 'ribeye-steak',
      title: 'Ribeye Steak Mastercut',
      category: 'cortes',
      tag: 'MADURACIÓN 45 DÍAS',
      weight: '350g corte seleccionado',
      price: 38.00,
      image: 'assets/prod-ribeye.jpg',
      desc: 'Corte con excepcional infiltración de grasa marmolada, sellado a fuego vivo de leña de encino para un sabor profundo y mantecoso.',
      featured: true,
      hasDoneness: true
    },
    {
      id: 'tomahawk-gold',
      title: 'Tomahawk Gran Reserva',
      category: 'cortes',
      tag: 'CORTE DE LA CASA',
      weight: '900g con hueso largo',
      price: 85.00,
      image: 'assets/prod-tomahawk.jpg',
      desc: 'Nuestra pieza insignia para compartir. Hueso largo expuesto, costra caramelizada al carbón de quebracho y jugosidad incomparable.',
      featured: true,
      hasDoneness: true
    },
    {
      id: 'angus-trufada',
      title: 'Burger Angus Trufada',
      category: 'hamburguesas',
      tag: 'BEST SELLER',
      weight: '220g blend Black Angus',
      price: 19.50,
      image: 'assets/prod-angus-trufada.jpg',
      desc: 'Carne Black Angus picada a cuchillo, queso brie fundido, láminas de trufa negra, cebolla caramelizada y mayonesa trufada en pan brioche.',
      featured: true,
      hasDoneness: true
    },
    {
      id: 'picana-carbon',
      title: 'Picaña al Carbón',
      category: 'cortes',
      tag: 'TRADICIÓN GAUCHA',
      weight: '400g con grasa crocante',
      price: 32.00,
      image: 'assets/prod-picana.jpg',
      desc: 'Pieza seleccionada con gruesa capa de grasa exterior dorada y crocante, sal marina en escamas y corazón tierno.',
      featured: true,
      hasDoneness: true
    },
    {
      id: 'lomo-brasas',
      title: 'Lomo Fino a las Brasas',
      category: 'cortes',
      tag: 'CORTE MAGRO TIERNO',
      weight: '300g centro de solomillo',
      price: 29.00,
      image: 'assets/prod-lomo.jpg',
      desc: 'El corte más tierno y magro de la res, cocinado a fuego lento con mantequilla de romero y ajo confitado.',
      featured: false,
      hasDoneness: true
    },
    {
      id: 'newyork-strip',
      title: 'New York Strip Dry Aged',
      category: 'cortes',
      tag: 'SELECCIÓN ESPECIAL',
      weight: '380g maduración en seco',
      price: 36.00,
      image: 'assets/prod-newyork.jpg',
      desc: 'Textura firme y sabor intenso concentrado gracias a 35 días en cámara de sal del Himalaya.',
      featured: true,
      hasDoneness: true
    },
    {
      id: 'burger-clasica',
      title: 'Classic Fire Burger',
      category: 'hamburguesas',
      tag: 'RECETA ORIGINAL',
      weight: '200g carne madurada',
      price: 16.00,
      image: 'assets/prod-burger-clasica.jpg',
      desc: 'Doble disco smash de carne madurada, doble cheddar inglés añejo, bacon ahumado crujiente y salsa secreta The Meat.',
      featured: false,
      hasDoneness: true
    },
    {
      id: 'provoleta-parrilla',
      title: 'Provoleta a la Parrilla',
      category: 'entradas',
      tag: 'ENTRADA EMBLEMÁTICA',
      weight: '200g queso fundente',
      price: 12.50,
      image: 'assets/prod-provoleta.jpg',
      desc: 'Queso provolone fundido en cazuela de hierro fundido a las brasas con orégano silvestre, aceite de oliva virgen y pan rústico tostado.',
      featured: false,
      hasDoneness: false
    },
    {
      id: 'chorizo-criollo',
      title: 'Chorizo Criollo Ahumado',
      category: 'entradas',
      tag: 'AL CARBÓN',
      weight: '2 unidades artesanales',
      price: 9.50,
      image: 'assets/prod-chorizo.jpg',
      desc: 'Elaboración propia 100% cerdo ibérico condimentado con pimentón de la Vera, servido con chimichurri casero.',
      featured: false,
      hasDoneness: false
    },
    {
      id: 'papas-rusticas',
      title: 'Papas Rústicas al Romero',
      category: 'acompanantes',
      tag: 'GUARNICIÓN',
      weight: 'Porción generosa',
      price: 7.00,
      image: 'assets/prod-papas.jpg',
      desc: 'Papas con piel doradas dos veces a la perfección, perfumadas con romero fresco y sal rosa de montaña.',
      featured: false,
      hasDoneness: false
    },
    {
      id: 'pure-trufado',
      title: 'Puré de Papas Trufado',
      category: 'acompanantes',
      tag: 'ALTA GUARNICIÓN',
      weight: 'Cremoso 220g',
      price: 8.50,
      image: 'assets/prod-pure-trufado.jpg',
      desc: 'Puré suave elaborado con mantequilla francesa de campo, nata espesa y aceite de trufa blanca de Piamonte.',
      featured: false,
      hasDoneness: false
    },
    {
      id: 'ensalada-huerta',
      title: 'Ensalada de la Huerta',
      category: 'acompanantes',
      tag: 'FRESCO',
      weight: 'Hojas verdes seleccionadas',
      price: 9.00,
      image: 'assets/prod-ensalada.jpg',
      desc: 'Mezclum de brotes orgánicos, tomates cherry confitados al carbón, cebolla morada encurtida y vinagreta de miel de azahar.',
      featured: false,
      hasDoneness: false
    },
    {
      id: 'brownie-fundente',
      title: 'Brownie Fundente al Fuego',
      category: 'postres',
      tag: 'DULCE FINAL',
      weight: 'Chocolate 70% cacao',
      price: 10.50,
      image: 'assets/prod-brownie.jpg',
      desc: 'Brownie templado horneado al momento con nueces de pecán tostadas, corazón líquido y helado de vainilla ahumada.',
      featured: false,
      hasDoneness: false
    },
    {
      id: 'cheesecake-ahumado',
      title: 'Cheesecake al Humo de Roble',
      category: 'postres',
      tag: 'ESPECIALIDAD',
      weight: 'Tarta de queso horneada',
      price: 11.00,
      image: 'assets/prod-cheesecake.jpg',
      desc: 'Cremoso de queso payoyo con suave toque ahumado en madera de roble, base crujiente de galleta y coulis de frutos del bosque.',
      featured: false,
      hasDoneness: false
    }
  ];

  // =========================================================================
  // APP STATE
  // =========================================================================
  let cart = [];
  let currentProduct = null;
  let currentQuantity = 1;
  let selectedDoneness = 'Medio';
  let selectedAddons = [];
  let guestsCount = 2;


  // =========================================================================
  // DOM REFERENCES
  // =========================================================================
  const screenSplash = document.getElementById('screen-splash');
  const appMain = document.getElementById('app-main');
  const btnEnterApp = document.getElementById('btn-enter-app');
  const headerBrandBtn = document.getElementById('header-brand-btn');

  // Navigation
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabViews = document.querySelectorAll('.tab-view');

  // Home Screen Elements
  const heroBtnMenu = document.getElementById('hero-btn-menu');
  const heroBtnReservar = document.getElementById('hero-btn-reservar');
  const bannerBtnReservar = document.getElementById('banner-btn-reservar');
  const btnSeeAllCortes = document.getElementById('btn-see-all-cortes');
  const homeCategoryPills = document.querySelectorAll('#home-category-pills .cat-pill');
  const featuredProductsRow = document.getElementById('featured-products-row');

  // Menu Screen Elements
  const menuItemsList = document.getElementById('menu-items-list');
  const menuSearchInput = document.getElementById('menu-search-input');
  const menuCategoryFilters = document.querySelectorAll('#menu-category-filter .cat-pill');

  // Product Bottom Sheet (Drawer)
  const productDrawerOverlay = document.getElementById('product-drawer-overlay');
  const btnCloseProductSheet = document.getElementById('btn-close-product-sheet');
  const sheetProductImg = document.getElementById('sheet-product-img');
  const sheetProductTag = document.getElementById('sheet-product-tag');
  const sheetProductTitle = document.getElementById('sheet-product-title');
  const sheetProductWeight = document.getElementById('sheet-product-weight');
  const sheetProductPrice = document.getElementById('sheet-product-price');
  const sheetProductDesc = document.getElementById('sheet-product-desc');
  const donenessGroup = document.getElementById('doneness-group');
  const donenessChips = document.querySelectorAll('.doneness-chip');
  const addonCheckboxes = document.querySelectorAll('input[name="addon"]');
  const sheetNotes = document.getElementById('sheet-notes');
  const btnQtyMinus = document.getElementById('btn-qty-minus');
  const btnQtyPlus = document.getElementById('btn-qty-plus');
  const sheetQtyVal = document.getElementById('sheet-qty-val');
  const btnConfirmAddCart = document.getElementById('btn-confirm-add-cart');
  const btnAddTotalPrice = document.getElementById('btn-add-total-price');

  // Cart Elements
  const btnOpenCart = document.getElementById('btn-open-cart');
  const cartBadgeCount = document.getElementById('cart-badge-count');
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const btnCloseCartSheet = document.getElementById('btn-close-cart-sheet');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');
  const btnCheckout = document.getElementById('btn-checkout');

  // Reservation Elements
  const reservationForm = document.getElementById('reservation-form');
  const btnGuestsMinus = document.getElementById('btn-guests-minus');
  const btnGuestsPlus = document.getElementById('btn-guests-plus');
  const guestsCountDisplay = document.getElementById('guests-count');
  const dateChips = document.querySelectorAll('.chip-select');
  const timeChips = document.querySelectorAll('.time-chip');
  const customDateInput = document.getElementById('reservation-custom-date');
  const reservationDialogOverlay = document.getElementById('reservation-dialog-overlay');
  const btnCloseDialog = document.getElementById('btn-close-dialog');
  const dialogReservationDetails = document.getElementById('dialog-reservation-details');
  const dialogCode = document.getElementById('dialog-code');

  // Toast Container
  const toastContainer = document.getElementById('toast-container');


  // =========================================================================
  // 1. SPLASH SCREEN TRANSITION
  // =========================================================================
  btnEnterApp.addEventListener('click', () => {
    screenSplash.classList.add('fade-out');
    setTimeout(() => {
      screenSplash.style.display = 'none';
      appMain.style.display = 'flex';
      renderFeaturedProducts();
      renderMenuItems('all');
    }, 380);
  });

  headerBrandBtn.addEventListener('click', () => {
    switchTab('view-inicio');
  });


  // =========================================================================
  // 2. TAB SWITCHING
  // =========================================================================
  function switchTab(targetViewId) {
    navTabs.forEach(tab => {
      if (tab.dataset.target === targetViewId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    tabViews.forEach(view => {
      if (view.id === targetViewId) {
        view.classList.add('active');
        // Reset scroll position to top
        document.getElementById('views-container').scrollTop = 0;
      } else {
        view.classList.remove('active');
      }
    });
  }

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;
      switchTab(targetId);
    });
  });

  // Short-circuit buttons
  heroBtnMenu.addEventListener('click', () => switchTab('view-menu'));
  heroBtnReservar.addEventListener('click', () => switchTab('view-reservas'));
  bannerBtnReservar.addEventListener('click', () => switchTab('view-reservas'));
  btnSeeAllCortes.addEventListener('click', () => {
    switchTab('view-menu');
    filterMenuCategory('cortes');
  });

  // Visual Category Grid clicks
  document.querySelectorAll('.cat-visual-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.category;
      switchTab('view-menu');
      filterMenuCategory(cat);
    });
  });


  // =========================================================================
  // 3. RENDER FEATURED PRODUCTS (HOME HORIZONTAL CAROUSEL)
  // =========================================================================
  function renderFeaturedProducts(categoryFilter = 'all') {
    featuredProductsRow.innerHTML = '';
    
    const filtered = categoryFilter === 'all' 
      ? MENU_ITEMS.filter(item => item.featured) 
      : MENU_ITEMS.filter(item => item.category === categoryFilter);

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'prod-card-featured';
      card.innerHTML = `
        <div class="prod-thumb-wrap">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <span class="prod-badge-ribbon">${item.tag}</span>
        </div>
        <div class="prod-details">
          <h4 class="prod-title">${item.title}</h4>
          <span class="prod-meta">${item.weight}</span>
          <div class="prod-footer-row">
            <span class="prod-price">$${item.price.toFixed(2)}</span>
            <button class="btn-add-mini" aria-label="Agregar">+</button>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProductSheet(item));
      featuredProductsRow.appendChild(card);
    });
  }

  // Home Category Filter Pills
  homeCategoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      homeCategoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.category;
      renderFeaturedProducts(cat);
    });
  });


  // =========================================================================
  // 4. RENDER MENU ITEMS (VERTICAL LIST - MOCKUP 2 MATCH)
  // =========================================================================
  function renderMenuItems(category = 'all', searchQuery = '') {
    menuItemsList.innerHTML = '';

    let items = MENU_ITEMS;

    if (category !== 'all') {
      items = items.filter(i => i.category === category);
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      items = items.filter(i => 
        i.title.toLowerCase().includes(query) || 
        i.desc.toLowerCase().includes(query) ||
        i.tag.toLowerCase().includes(query)
      );
    }

    if (items.length === 0) {
      menuItemsList.innerHTML = `
        <div class="cart-empty-state">
          <p>No encontramos platos con ese criterio de búsqueda.</p>
        </div>
      `;
      return;
    }

    items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'menu-item-row';
      row.innerHTML = `
        <div class="menu-item-thumb">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="menu-item-info">
          <h4 class="menu-item-title">${item.title}</h4>
          <p class="menu-item-desc">${item.desc}</p>
          <div class="menu-item-bottom">
            <span class="menu-item-price">$${item.price.toFixed(2)}</span>
            <span class="btn-item-action">+ Pedir</span>
          </div>
        </div>
      `;

      row.addEventListener('click', () => openProductSheet(item));
      menuItemsList.appendChild(row);
    });
  }

  function filterMenuCategory(catKey) {
    menuCategoryFilters.forEach(pill => {
      if (pill.dataset.filter === catKey) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
    renderMenuItems(catKey, menuSearchInput.value);
  }

  menuCategoryFilters.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.dataset.filter;
      filterMenuCategory(filter);
    });
  });

  menuSearchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length > 0) {
      renderMenuItems('all', query);
    } else {
      const activePill = document.querySelector('#menu-category-filter .cat-pill.active');
      const cat = activePill ? activePill.dataset.filter : 'all';
      renderMenuItems(cat, '');
    }
  });


  // =========================================================================
  // 5. PRODUCT DETAILS BOTTOM SHEET (EMIL KOWALSKI DRAWER)
  // =========================================================================
  function openProductSheet(item) {
    currentProduct = item;
    currentQuantity = 1;
    selectedDoneness = 'Medio';
    selectedAddons = [];

    // Reset inputs
    sheetQtyVal.textContent = '1';
    sheetNotes.value = '';
    addonCheckboxes.forEach(cb => cb.checked = false);

    // Doneness visibility
    if (item.hasDoneness) {
      donenessGroup.style.display = 'block';
      donenessChips.forEach(chip => {
        chip.classList.toggle('active', chip.dataset.doneness === 'Medio');
      });
    } else {
      donenessGroup.style.display = 'none';
    }

    // Populate data
    sheetProductImg.src = item.image;
    sheetProductImg.alt = item.title;
    sheetProductTag.textContent = item.tag;
    sheetProductTitle.textContent = item.title;
    sheetProductWeight.textContent = item.weight;
    sheetProductPrice.textContent = `$${item.price.toFixed(2)}`;
    sheetProductDesc.textContent = item.desc;

    updateSheetTotal();

    // Show Drawer with physics
    productDrawerOverlay.classList.add('open');
  }

  function closeProductSheet() {
    productDrawerOverlay.classList.remove('open');
  }

  btnCloseProductSheet.addEventListener('click', closeProductSheet);
  productDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === productDrawerOverlay) {
      closeProductSheet();
    }
  });

  // Doneness chips selection
  donenessChips.forEach(chip => {
    chip.addEventListener('click', () => {
      donenessChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedDoneness = chip.dataset.doneness;
    });
  });

  // Addons toggle
  addonCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateSheetTotal);
  });

  // Quantity adjustments
  btnQtyMinus.addEventListener('click', () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      sheetQtyVal.textContent = currentQuantity;
      updateSheetTotal();
    }
  });

  btnQtyPlus.addEventListener('click', () => {
    if (currentQuantity < 20) {
      currentQuantity++;
      sheetQtyVal.textContent = currentQuantity;
      updateSheetTotal();
    }
  });

  function calculateItemUnitPrice() {
    if (!currentProduct) return 0;
    let unitPrice = currentProduct.price;
    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        unitPrice += parseFloat(cb.dataset.price);
      }
    });
    return unitPrice;
  }

  function updateSheetTotal() {
    const total = calculateItemUnitPrice() * currentQuantity;
    btnAddTotalPrice.textContent = `$${total.toFixed(2)}`;
  }

  // Confirm Add to Cart
  btnConfirmAddCart.addEventListener('click', () => {
    if (!currentProduct) return;

    // Gather chosen addons
    const chosenAddons = [];
    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        chosenAddons.push({
          label: cb.parentElement.querySelector('.addon-label').textContent,
          price: parseFloat(cb.dataset.price)
        });
      }
    });

    const cartItem = {
      product: currentProduct,
      quantity: currentQuantity,
      doneness: currentProduct.hasDoneness ? selectedDoneness : null,
      addons: chosenAddons,
      notes: sheetNotes.value.trim(),
      unitPrice: calculateItemUnitPrice(),
      totalPrice: calculateItemUnitPrice() * currentQuantity
    };

    cart.push(cartItem);
    updateCartUI();
    closeProductSheet();

    showToast(`✓ ${currentProduct.title} añadido a tu pedido`);
  });


  // =========================================================================
  // 6. CART MANAGEMENT & CHECKOUT
  // =========================================================================
  function updateCartUI() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartBadgeCount.textContent = totalItems;
    
    // Pop animation on count badge
    cartBadgeCount.classList.add('pop');
    setTimeout(() => cartBadgeCount.classList.remove('pop'), 200);

    // Render Cart drawer items
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
          </svg>
          <p>Tu comanda está vacía.<br>Selecciona tus cortes predilectos de la carta.</p>
        </div>
      `;
      cartSubtotal.textContent = '$0.00';
      cartTotal.textContent = '$0.00';
      btnCheckout.disabled = true;
      btnCheckout.style.opacity = '0.5';
      return;
    }

    btnCheckout.disabled = false;
    btnCheckout.style.opacity = '1';

    let subtotal = 0;

    cart.forEach((item, index) => {
      subtotal += item.totalPrice;
      const row = document.createElement('div');
      row.className = 'cart-item-row';
      
      const donenessSnippet = item.doneness ? ` • ${item.doneness}` : '';
      const addonsSnippet = item.addons.length > 0 ? ` + ${item.addons.map(a => a.label).join(', ')}` : '';

      row.innerHTML = `
        <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.quantity}x ${item.product.title}</h4>
          <span class="cart-item-sub">${item.product.weight}${donenessSnippet}${addonsSnippet}</span>
          <div class="cart-item-price">$${item.totalPrice.toFixed(2)}</div>
        </div>
        <button class="cart-item-remove" data-index="${index}" aria-label="Eliminar">✕</button>
      `;

      row.querySelector('.cart-item-remove').addEventListener('click', (e) => {
        e.stopPropagation();
        cart.splice(index, 1);
        updateCartUI();
        showToast('Producto removido de la comanda');
      });

      cartItemsContainer.appendChild(row);
    });

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${subtotal.toFixed(2)}`;
  }

  btnOpenCart.addEventListener('click', () => {
    updateCartUI();
    cartDrawerOverlay.classList.add('open');
  });

  btnCloseCartSheet.addEventListener('click', () => {
    cartDrawerOverlay.classList.remove('open');
  });

  cartDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === cartDrawerOverlay) {
      cartDrawerOverlay.classList.remove('open');
    }
  });

  btnCheckout.addEventListener('click', () => {
    if (cart.length === 0) return;
    cartDrawerOverlay.classList.remove('open');
    cart = [];
    updateCartUI();

    // Show Confirmation Dialog
    dialogReservationDetails.textContent = 'Tu comanda ha sido enviada a los maestros de parrilla. Preparando el fuego con leña noble.';
    dialogCode.textContent = `ORDER-${Math.floor(1000 + Math.random() * 9000)}`;
    reservationDialogOverlay.classList.add('open');
  });


  // =========================================================================
  // 7. RESERVATION SCREEN LOGIC
  // =========================================================================
  btnGuestsMinus.addEventListener('click', () => {
    if (guestsCount > 1) {
      guestsCount--;
      guestsCountDisplay.textContent = guestsCount;
    }
  });

  btnGuestsPlus.addEventListener('click', () => {
    if (guestsCount < 14) {
      guestsCount++;
      guestsCountDisplay.textContent = guestsCount;
    }
  });

  // Date chips
  dateChips.forEach(chip => {
    chip.addEventListener('click', () => {
      dateChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (chip.dataset.date === 'custom') {
        customDateInput.style.display = 'block';
        customDateInput.focus();
      } else {
        customDateInput.style.display = 'none';
      }
    });
  });

  // Time chips
  timeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      timeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  // Zone radio cards visual active
  const zoneOptions = document.querySelectorAll('.zone-option');
  zoneOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      zoneOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });

  // Reservation form submit
  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('res-name').value;
    const phone = document.getElementById('res-phone').value;
    const activeTime = document.querySelector('.time-chip.active')?.textContent || '20:00';
    const activeZone = document.querySelector('.zone-option.active strong')?.textContent || 'Salón Principal';

    dialogReservationDetails.textContent = `Reserva para ${name} (${guestsCount} personas) en ${activeZone} a las ${activeTime}. Te esperamos.`;
    dialogCode.textContent = `MEAT-${Math.floor(1000 + Math.random() * 9000)}`;
    reservationDialogOverlay.classList.add('open');
  });

  btnCloseDialog.addEventListener('click', () => {
    reservationDialogOverlay.classList.remove('open');
    switchTab('view-inicio');
  });

  // Account menu items
  const accItemReservas = document.getElementById('acc-item-reservas');
  const accItemFavoritos = document.getElementById('acc-item-favoritos');
  const accItemContacto = document.getElementById('acc-item-contacto');
  const accItemUbicacion = document.getElementById('acc-item-ubicacion');

  if (accItemReservas) {
    accItemReservas.addEventListener('click', () => switchTab('view-reservas'));
  }
  if (accItemFavoritos) {
    accItemFavoritos.addEventListener('click', () => {
      switchTab('view-menu');
      filterMenuCategory('cortes');
    });
  }
  if (accItemContacto) {
    accItemContacto.addEventListener('click', () => {
      showToast('Concierge VIP: Atención directa +34 910 000 000');
    });
  }
  if (accItemUbicacion) {
    accItemUbicacion.addEventListener('click', () => {
      showToast('Paseo de la Castellana 120 • 13:00 a 01:00');
    });
  }


  // =========================================================================
  // 8. TOAST SYSTEM (EMIL KOWALSKI SONNER RECIPE)
  // =========================================================================
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-gold-dot"></div>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger frame for smooth entry
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2600);
  }

  // Initialize
  renderFeaturedProducts();
  renderMenuItems('all');
});
