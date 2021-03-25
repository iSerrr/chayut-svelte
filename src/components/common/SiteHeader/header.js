import $ from 'jquery'
import {
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock/lib/bodyScrollLock.min.js';

class Header {
  constructor() {
    this.selector = '.header';
    this.mobileResolution = 1160;
    this.$win = $(window);

    this.classes = {
      sticky: 'header--sticky',
      visible: 'header--visible',
      headerMenu: 'header__menu',
      mobileClass: 'mobile-nav-visible',
      active: 'active',
      mobileMenuActive: 'menu-item--active',
      menuItemDropdown: 'sub-menu',
    };

    this.nodes = {
      root: document.querySelector('html'),
      headerMenu: document.querySelector('.header__nav'),
      btnNav: document.querySelector('.btn-nav'),
      header: document.querySelector('.header'),
      adminBar: document.getElementById('wpadminbar'),
    };
  }

  bootstrap() {
    this.setupBurgerButton();
    this.setupCloseButton();
    this.mobileMenuClicks();

    window.addEventListener('load', this.loadListeners.bind(this));
    window.addEventListener('resize', this.resizeListeners.bind(this));
    window.addEventListener('scroll', this.scrollListeners.bind(this));
  }

  loadListeners() {
    this.headerOnScroll();
    this.calculateMenuHeight();
  }

  resizeListeners() {
    this.calculateMenuHeight();
  }

  scrollListeners() {
    this.headerOnScroll();
  }

  calculateMenuHeight() {
    this.totalHeight = window.innerHeight - this.getAdminBarHeight();

    this.makeMenuScrollable();
  }

  setupBurgerButton() {
    this.navBtn = document.querySelector('.btn-nav');

    if (this.navBtn) {
      this.navBtn.addEventListener('click', this.toggleNav.bind(this));
    }
  }

  setupCloseButton() {
    this.closeButton = document.querySelector('.btn-close-nav');

    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.toggleNav.bind(this));
    }
  }

  makeMenuScrollable() {
    this.nodes.headerMenu.style.setProperty(
      '--viewport-height',
      `${this.totalHeight}px`
    );
  }

  toggleNav() {
    this.nodes.root.classList.toggle(this.classes.mobileClass);
    this.nodes.btnNav.classList.toggle(this.classes.active);

    if (document.documentElement.classList.contains(this.classes.mobileClass)) {
      disableBodyScroll(this.nodes.headerMenu);
    } else {
      enableBodyScroll(this.nodes.headerMenu);
    }
  }

  headerOnScroll() {
    const adminBar = this.hasAdminBar();
    const scrollTop = window.pageYOffset;
    const target = (adminBar && adminBar.offsetHeight) || 5;

    if (scrollTop >= target) {
      this.toggleHeaderClasses('down');
    } else {
      this.toggleHeaderClasses('up');
    }

    this.toggleHeaderVisibility();
  }

  // eslint-disable-next-line class-methods-use-this
  hasAdminBar() {
    return document.getElementById('wpadminbar');
  }

  toggleHeaderClasses(dir) {
    const header = document.querySelector(this.selector);

    if (dir === 'down') {
      header.classList.add(this.classes.sticky);
    } else {
      header.classList.remove(this.classes.sticky);
    }
  }

  toggleHeaderVisibility() {
    const { header } = this.nodes;

    if (
      this.scrollTop > window.pageYOffset &&
      header.classList.contains(this.classes.sticky)
    ) {
      header.classList.add(this.classes.visible);
    } else {
      header.classList.remove(this.classes.visible);
    }

    this.scrollTop = window.pageYOffset;
  }

  getAdminBarHeight() {
    if (!this.nodes.adminBar) {
      return 0;
    }

    const styles = getComputedStyle(this.nodes.adminBar);

    if (styles.position === 'fixed') {
      return this.nodes.adminBar.offsetHeight;
    }

    return 0;
  }

  mobileMenuClicks() {
    $('.nav-main .menu-item').on('click', event => {
      if (this.$win.width() < this.mobileResolution) {
        const $link = $(event.currentTarget);
        const $dropdown = $link.find(`.${this.classes.menuItemDropdown}`);

        if ($dropdown.length === 0) {
          $link.siblings().removeClass(this.classes.mobileMenuActive);

          return;
        }

        event.preventDefault();

        $link
          .addClass(this.classes.mobileMenuActive)
          .siblings()
          .removeClass(this.classes.mobileMenuActive);
      }
    });
  }
}

export default Header
