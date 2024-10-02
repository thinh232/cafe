<template>
  <header>
    <ul>
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="category"><li>Category</li></router-link>
      <router-link to="contact"><li>Contact</li></router-link>
      <router-link to="login"><li>{{u(user)}}</li></router-link>
      <!-- <li @click="activeCart()">
        <div class="cart">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" width="40px" height="36px" viewBox="0 0 40 36" style="enable-background:new 0 0 40 36;"
            xml:space="preserve">
            <g id="Page-1_4_" sketch:type="MSPage">
              <g id="Desktop_4_" transform="translate(-84.000000, -410.000000)" sketch:type="MSArtboardGroup">
                <path id="Cart" sketch:type="MSShapeGroup" class="st0"
                  d="M94.5,434.6h24.8l4.7-15.7H92.2l-1.3-8.9H84v4.8h3.1l3.7,27.8h0.1
			c0,1.9,1.8,3.4,3.9,3.4c2.2,0,3.9-1.5,3.9-3.4h12.8c0,1.9,1.8,3.4,3.9,3.4c2.2,0,3.9-1.5,3.9-3.4h1.7v-3.9l-25.8-0.1L94.5,434.6" />
              </g>
            </g>
          </svg>
          <span>{{ numbers() }}</span>
        </div>
      </li> -->
    </ul>
  </header>
  <!-- <div class="listCart" v-bind:class="{ active: isActive, exit: isExit }" v-if="isShoppingCart">
    <div v-if="isShowCart">
      <div class="icon">🛒</div>
      <div class="message">Chưa có sản phẩm trong giỏ hàng.</div>
      <a href="#" class="button">RETURN TO SHOP</a>
    </div>
    <div class="listOderedTitle" v-if="!isShowCart">
      <span>Sản Phẩm</span>
      <span>Giá</span>
      <span>Số lượng</span>
    </div>
    <div class="listOdered" v-if="!isShowCart">
      <span>{{ list.name }}</span>
      <span>{{ list.price }}</span>
      <span>{{ numberCart }}</span>
      <button>Pay</button>
    </div>
    <div class="exitListCart" @click="activeCart()">X</div>
  </div> -->
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';


export default {
  props: {
    // numberCart: Number,
    // list: {
    //   type: Object,
    //   default: null
    // }
  },
  data() {
    return {
      // isShoppingCart: false,
      // isActive: true,
      // isExit: false,
      // number: 0,
      // isShowCart: false
    }
  },
setup(){
  const store = useStore()
const user = computed(()=>store.state.username)
  return{
    user
  }
},
  methods: {
    u(user){
      if(user == null){
        return "Login"
      }else return user
    }
    // activeCart() {
    //   if (this.isShoppingCart == false) {
    //     this.isShoppingCart = true
    //     this.isActive = true
    //     this.isExit = false
    //   } else {
    //     this.isShoppingCart = false
    //     this.isActive = false
    //     this.isExit = true
    //   }
    // },
    // numbers() {
    //   var i;
    //   if (this.numberCart == null || this.numberCart == 0) {
    //     i = 0
    //     this.isShowCart = true
    //   } else {
    //     i = this.numberCart
    //     this.isShowCart = false
    //   }
    //   return i
     
    // },
  }
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #f0f0f0;
}

.listOdered {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #212733;
}

.listOderedTitle {
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #394152;
}

.listOderedTitle span {
  margin-right: 17px;
  color: #fff;
}

.listOdered span {
  margin-right: 10px;
  color: #fff;
}

.listOdered button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  cursor: pointer;
}

.listOdered button:hover {
  background-color: #0056b3;
}

.listCart {
  position: fixed;
  width: 300px;
  height: 100%;
  background-color: #1e242e;
  z-index: 200;
  right: 0;
  padding: 20px;
  border: 1px solid #444;
  text-align: center;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.active {
  animation: listCartSlide 0.4s;
}

.exit {
  animation: listCartSlideE 0.4s;
}

@keyframes listCartSlide {
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes listCartSlideE {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(100px);
  }
}

.listCart .icon {
  font-size: 50px;
  margin-bottom: 20px;
}

.listCart .message {
  font-size: 16px;
  margin-bottom: 20px;
  color: white;
}

.listCart .button {
  background-color: #8a9c68;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
}

.listCart .button:hover {
  background-color: #72854f;
}

.exitListCart {
  position: absolute;
  left: -20px;
  top: 0;
  padding: 9px 14px;
  background-color: white;
  border-radius: 50%;
  font-size: 15px;
  cursor: pointer;
  font-weight: 800;
  transition: all 0.3s ease-in-out;
}

.exitListCart:hover {
  background-color: rgb(206, 159, 7);
  color: #ffffff;
  transition: all 0.1s ease-in-out;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header ul {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

header li {
  padding: 20px 30px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.cart {
  position: absolute;
  top: 10px;
  right: 30px;
  transform: scale(0.7);
}

.cart span {
  position: absolute;
  left: -15px;
  bottom: -10px;
  background-color: rgb(255, 171, 15);
  padding: 5px 11px;
  border-radius: 50%;

}

#Cart {
  fill: white;
}

header li:hover {
  color: #ffffff;
  text-shadow: 1px 0px 8px #f5f5f5;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
}
</style>
