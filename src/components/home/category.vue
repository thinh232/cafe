<template>
  <div class="app">
    <headerView></headerView>
    <div class="category-container">
      <div class="category">
        <h1>Your Shopping Cart</h1>
        <div class="shopping" @click="toggleCart">
          <img src="../img/shopping.svg" />
          <span class="quantity">{{ totalQuantity }}</span>
        </div>
      </div>
      <div class="list">
        <div v-for="(product, index) in products" :key="product.id" class="item">
          <img :src="product.src" />
          <div class="title">{{ product.title }}</div>
          <div class="price">{{ format(product.price) }}</div>
          <button @click="addToCart(index)">
            <span class="button__text">Add Item</span>
            <span class="button__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg">
                <line y2="19" y1="5" x2="12" x1="12"></line>
                <line y2="12" y1="12" x2="19" x1="5"></line>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="card" :class="{ active: isActive }">
        <h1>Cart</h1>
        <ul class="listCard">
          <li v-for="(item, index) in cartItems" :key="item.id">
            <div><img :src="item.src" /></div>
            <div>{{ item.title }}</div>
            <div>{{ item.totalPrice.toLocaleString() }}</div>
            <div class="quantity-control">
              <button @click="changeQuantity(index, item.quantity - 1)">-</button>
              <div class="count">{{ item.quantity }}</div>
              <button @click="changeQuantity(index, item.quantity + 1)">+</button>
            </div>
          </li>
        </ul>
        <div class="checkOut">
          <div class="total">{{ totalPrice.toLocaleString() }}</div>
          <div class="closeShopping" @click="toggleCart">
            <button class="noselect">
              <span class="text">Close</span>
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import headerView from './headerView.vue';
import { useStore } from 'vuex';

export default {
  name: 'CategoryPage',
  components: {
    headerView
  },
  setup() {
    const isActive = ref(false);
    const store = useStore()
    const products = computed(()=>store.getters.products)
    const cartItems = ref([]);

    const totalQuantity = computed(() => {
      return cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
    });

    const totalPrice = computed(() => {
      return cartItems.value.reduce((sum, item) => sum + item.totalPrice, 0);
    });

    const toggleCart = () => {
      isActive.value = !isActive.value;
    };

    const addToCart = (index) => {
      const product = products.value[index];
      const cartItem = cartItems.value.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
        cartItem.totalPrice += product.price;
      } else {
        cartItems.value.push({
          ...product,
          quantity: 1,
          totalPrice: product.price
        });
      }
    };

    const changeQuantity = (index, quantity) => {
      if (quantity <= 0) {
        cartItems.value.splice(index, 1);
      } else {
        const cartItem = cartItems.value[index];
        cartItem.quantity = quantity;
        cartItem.totalPrice = quantity * cartItem.price;
      }
    };

    const format = (price) => {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(price);
    };

    return {
      isActive,
      products,
      cartItems,
      totalQuantity,
      totalPrice,
      toggleCart,
      addToCart,
      changeQuantity,
      format
    };
  }
};
</script>
<style scoped>
body {
  background-color: #f0f0f0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.app {
  background-color: #222831;
  padding: 20px;
  min-height: 100vh;
}

.category-container {
  max-width: 1400px;
  margin: auto;
  transition: 0.5s;
  padding: 20px;
  background-color: #393e46;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
}

.category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.category h1 {
  color: #eeeeee;
  font-size: 24px;
}

.category .shopping {
  position: relative;
  text-align: right;
}

.category .shopping img {
  width: 40px;
  cursor: pointer;
}

.category .shopping span {
  background: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: absolute;
  top: -5px;
  right: -5px;
  padding: 3px 10px;
  font-size: 12px;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.list .item {
  text-align: center;
  background-color: #eeeeee;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.list .item:hover {
  transform: scale(1.05);
}
.list .item:hover img {
    transform: scale(1.2) translateY(-5px);
    transition: transform 0.3s ease;
}
.list .item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.list .item .title {
  font-weight: 600;
  margin: 10px 0;
  font-size: 18px;
}

.list .item .price {
  margin: 10px 0;
  color: #ff6f61;
  font-weight: 600;
}

.list .item button {
  position: relative;
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #34974d;
  background-color: #3aa856;
  margin: auto;
}

.list .item button, .button__icon, .button__text {
  transition: all 0.3s;
}

.list .item button .button__text {
  transform: translateX(30px);
  color: #fff;
  font-weight: 600;
}

.list .item button .button__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: #34974d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list .item button .svg {
  width: 30px;
  stroke: #fff;
}

.list .item button:hover {
  background: #34974d;
}

.list .item button:hover .button__text {
  color: transparent;
}

.list .item button:hover .button__icon {
  width: 148px;
  transform: translateX(0);
}
.list .item button:active .button__icon {
  background-color: #2e8644;
}

.list .item button:active {
  border: 1px solid #2e8644;
}

.card {
  position: fixed;
  top: 0;
  right: -100%;
  width: 400px;
  background-color: #393e46;
  height: 100vh;
  transition: right 0.5s ease;
  z-index: 1000;
  padding: 20px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
}

.card.active {
  right: 0;
}

.card h1 {
  color: #e8bc0e;
  font-weight: 100;
  margin: 0;
  padding: 0 20px;
  height: 80px;
  display: flex;
  align-items: center;
}

.card .checkOut {
  position: absolute;
  bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card .checkOut .total {
  background-color: #e8bc0e;
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  border-radius: 8px;
}

.card .checkOut .closeShopping {
  /* background-color: #1c1f25; */
  color: #fff;
  width: 35%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transform: translateX(-10px)
}
.closeShopping button {
 width: 150px;
 height: 50px;
 cursor: pointer;
 display: flex;
 align-items: center;
 background: red;
 border: none;
 border-radius: 5px;
 box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
 background: #e62222;
}

.closeShopping button,.closeShopping button span {
 transition: 200ms;
}

.closeShopping button .text {
 transform: translateX(35px);
 color: white;
 font-weight: bold;
}

.closeShopping button .icon {
 position: absolute;
 border-left: 1px solid #c41b1b;
 transform: translateX(110px);
 height: 40px;
 width: 40px;
 display: flex;
 align-items: center;
 justify-content: center;
}

.closeShopping button svg {
 width: 15px;
 fill: #eee;
}

.closeShopping button:hover {
 background: #ff3636;
}

.closeShopping button:hover .text {
 color: transparent;
}

.closeShopping button:hover .icon {
 width: 150px;
 border-left: none;
 transform: translateX(0);
}

.closeShopping button:focus {
 outline: none;
}

.closeShopping button:active .icon svg {
 transform: scale(0.8);
}
.listCard{
  display: flex;
  flex-direction: column;
}
.listCard li {
  display: grid;
  grid-template-columns: 100px repeat(3, 1fr);
  color: #fff;
  margin-bottom: 10px;
  align-items: center;
}

.listCard li div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.listCard li img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.listCard li .quantity-control {
  display: flex;
  align-items: center;
}

.listCard li button {
  width: 30px;
  height: 30px;
  border: none;
  background-color: #00adb5;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.listCard li button:hover {
  background-color: #008c9e;
}

.listCard .count {
  margin: 0 10px;
  font-size: 18px;
  font-weight: bold;
}
</style>
  