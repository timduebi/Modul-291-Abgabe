import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notebooks: [
      {
        name: 'Apple AirPods 2nd Gen. mit Ladecase',
        price: 120,
        image: 'https://www.pirmi.lt/image/bsimage%3A%2F%2Fprintlog%2FProductProperty%2Fef208698-19eb-4ff8-9355-ad43006d0e9e%40900x900%3Fw%3Dx256',
        stars: 4.5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Apple Airpods Pro 1st Gen. mit Ladecase',
        price: 197,
        image: 'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImE5NGFlZjBkOTkyNjlhM2JhYzRlYzFjZDE2OGNhY2E2LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=04ef63ed03268e4f568ac9cb0f154c142cb80bd5a153ffa7f7555b154bbfccbd',
        stars: 4.5,
        totalReviews: 126,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Apple Airpods Max 1st Gen. mit Case',
        price: 510,
        image: 'https://www.blitzmicro.eu/13274-medium_default/AP-MGYJ3TYA.jpg',
        stars: 5,
        totalReviews: 80,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],

    smartphones: [
      {
        name: 'iPhone 12 Pro 256 GB, Gold, 6.10 "',
        price: 1179,
        image: 'https://www.blitzmicro.eu/11097-medium_default/AP-MGMW3QLA.jpg',
        stars: 4.9,
        totalReviews: 1285,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'iPhone 12 Pro 128 GB, Graphite, 6.10 "',
        price: 1079,
        image: 'https://www.blitzmicro.eu/17444-medium_default/AP-MLL63QLA.jpg',
        stars: 4.8,
        totalReviews: 1852,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'iPhone 12 Pro 512 GB, Night Blue, 6.10',
        price: 1279,
        image: 'https://www.blitzmicro.eu/11082-medium_default/AP-MGDF3QLA.jpg',
        stars: 5,
        totalReviews: 2004,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getNotebooks: state => state.notebooks,
    getSmartphones: state => state.smartphones,
    getAllProducts: state => state.notebooks.concat(state.smartphones),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
