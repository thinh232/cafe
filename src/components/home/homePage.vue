<template>
    <div class="main">
      <headerView></headerView>
      <div class="slider">
        <div class="title">cafe ngon</div>
        <div class="images" :style="{ '--rotate': rotate + 'deg' }">
          <div
            v-for="(item, index) in images"
            :key="index"
            class="item"
            :style="{ '--i': index + 1 }"
          >
            <img :src="item.src" />
          </div>
        </div>
        <div class="content">
          <div
            v-for="item in products"
            :key="item.id"
            :class="{ item: true, active: active === item.id }"
          >
            <h1>{{ item.title }}</h1>
            <div class="des">{{ item.description }}</div>
            <router-link to="detail" @click="setDetail(item)">
              <button style="cursor: pointer;" >See more</button>
            </router-link>
          </div>
        </div>
        <button id="prev" @click="prevSlider">◄</button>
        <button id="next" @click="nextSlider">►</button>
      </div>
    </div>
    <products :content="contents"></products>
    <footer-view></footer-view>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import products from './products.vue';
  import headerView from './headerView.vue';
  import footerView from './footerView.vue';
  import { useStore } from 'vuex';
  export default {
    components: {
      headerView,
      products,
      footerView,
    },
    setup() {
      const active = ref(0);
      const rotate = ref(0);
  
      const images = [
        { src: new URL('../img/6.png', import.meta.url).href },
        { src: new URL('../img/2.png', import.meta.url).href },
        { src: new URL('../img/3.png', import.meta.url).href },
        { src: new URL('../img/4.png', import.meta.url).href },
        { src: new URL('../img/5.png', import.meta.url).href },
        { src: new URL('../img/1.png', import.meta.url).href }
      ];
      const store = useStore()
      const products = computed(()=>store.getters.products)
  
      const rotateAdd = computed(() => 360 / images.length);
  
      const nextSlider = () => {
        active.value = (active.value + 1) % images.length;
        rotate.value += rotateAdd.value;
      };
  
      const prevSlider = () => {
        active.value = (active.value - 1 + images.length) % images.length;
        rotate.value -= rotateAdd.value;
      };
      const setDetail = (item) => {
      store.dispatch("setDetail", item);
    };
    
  
      return {
        active,
        rotate,
        images,
        products,
        rotateAdd,
        nextSlider,
        prevSlider,
        setDetail,
      };
    }
  };
  </script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Numans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Share+Tech+Mono&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');

body {
    margin: 0;
    font-family: Poppins;
    
}


.slider {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #222831;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.slider::before {
    position: absolute;
    width: 50%;
    height: 100vh;
    content: "";
    top: 0;
    left: 0;
    background-image: linear-gradient(#393E46, #00ADB5);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
    position: absolute;
    top: 15%;
    right: 55%;
    text-align: right;
    color: #fff;
    font-size: 130px;
    width: 50%;
    font-family: "Pacifico", cursive;
    text-shadow: 3px 5px 0px #478860;
    line-height: 0.9em;
    transform: rotate(-5deg);
}

.images {
    position: absolute;
    bottom: 0%;
    left: 50%;
    --rotate: 0deg;
    transform: translate(-75%, 63%) rotate(var(--rotate)) scale(0.9);
    width: 1300px;
    height: 1300px;
    border-radius: 50%;
    transition: transform 0.5s ease-in-out;
    outline: 1px dashed #fff5;
    outline-offset: -100px;
}

.images .item {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    rotate: calc(60deg * var(--i));
}

.images .item img {
    height: 420px;
}

.content {
    color: #EEEEEE;
    position: absolute;
    top: 15%;
    left: 60%;
    text-align: justify;
    width: 350px;
    font-family: "Numans", sans-serif;
}

.content h1 {
    color: #e88735;
    font-size: xxx-large;
    font-family: Poppins;
}

.content button {
    margin-top: 30px;
    padding: 10px 30px;
    border-radius: 20px;
    background-color: #e88735;
    color: #fff;
    border: none;
    float: right;
    transition: all 0.2s ease-in-out;
    font-weight: 700;
}
.content button:hover{
    color: #ffffff;
  text-shadow: 1px 0px 8px #f5f5f5;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
}

.content .item {
    display: none;
}

.content .item.active {
    display: block;
}

@keyframes showContent {
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
    }
}

.content .item.active h1 {
    opacity: 0;
    animation: showContent 0.5s ease-in-out 1 forwards;
}

.content .item.active .des {
    opacity: 0;
    animation: showContent 0.5s 0.3s ease-in-out 1 forwards;
}

.content .item.active button {
    opacity: 0;
    animation: showContent 0.5s 0.6s ease-in-out 1 forwards;
}

#prev,
#next {
    position: absolute;
    border: none;
    bottom: 10%;
    right: 320px;
    font-size: 20px;
    font-family: cursive;
    background-color: transparent;
    color: #000000;
    font-weight: bold;
    opacity: 0.3;
    background-color: #fff;
    border-radius: 50%;
    padding: 10px 15px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

#next {
    left: unset;
    right: 250px;
}

#next:hover,
#prev:hover {
    opacity: 1;
    transition: all 0.3s ease-in-out;
}
</style>