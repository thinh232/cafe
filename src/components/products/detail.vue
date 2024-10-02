<template>
  <headerView v-bind:numberCart="numberCart" v-bind:list="listProducts"></headerView>
  <div class="detailProduct" v-if="Listdetail.length">
    <div class="content-wrapper" v-for="(item,index) in Listdetail" :key="index">
      <div class="breadcrumb">
        <a href="#">Trang chủ</a> / <a href="#">Cafe</a> / {{ item.title }}
      </div>
      <div class="detail-container">
        <div class="left-detail">
          <div class="img-detail-main">
            <img :src="item.src" alt="">
          </div>
        </div>
        <div class="right-detail">
          <div class="new-badge">NEW</div>
          <div class="name-product-detail">{{ item.title }}</div>
          <div class="price-detail">{{ format(item.price) }}</div>
          <div class="des-detail">
            {{ item.description }}
          </div>
          <div class="number-detail">
            <span>Số lượng</span>
            <input type="number" min="1" :max="item.numberC" v-model="item.number">
          </div>
          <div class="btn-detail">
            <a class="fancy" @click="addCart()">
              <span class="text">Thêm vào giỏ hàng</span>
            </a>
            <a class="fancy">
              <span class="text">Mua</span>
            </a>
          </div>
          <div class="product-info">
            <div>Số lượng còn lại: <a href="#">{{ item.numberC }}</a></div>
            <div>Share:
              <a href="#">Facebook</a> |
              <a href="#">Twitter</a> |
              <a href="#">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue';
import headerView from '../home/headerView.vue';
import { useStore } from 'vuex';

export default {
  name: 'DetailPage',
  components: {
    headerView,
  },
  setup() {
    const numberCart = ref(0);
    const store = useStore()
    const Listdetail = computed(()=>store.getters.detail)


    const format = (price) => {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(price);
    };

    const addCart = () => {
  const product = Listdetail.value[0];  
  if (product.number > product.numberC) {
    alert('Không còn hàng');
  } else {
    numberCart.value += 1;
    product.numberC -= product.number;
  }
};
console.log(Listdetail)

    return { numberCart, Listdetail, format, addCart };
  },
};
</script>

<style scoped>
body {
  background-color: #222831;
}

.detailProduct {
  width: 100%;
  height: 700px;
  background-color: #222831;
  padding: 100px 0;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.breadcrumb {
  width: 90%;
  max-width: 1200px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #b5b5b5;
}

.breadcrumb a {
  color: #e88735;
  text-decoration: none;
  margin-right: 5px;
}

.detail-container {
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  color: #EEEEEE;
}

.left-detail {
  flex: 1;
  display: flex;
  justify-content: center;
}

.img-detail-main img {
  max-width: 100%;
  max-height: 500px;
  object-fit: cover;
  border: 2px solid #f0f0f0;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

.right-detail {
  flex: 1;
  margin-left: 20px;
}

.new-badge {
  background-color: #28ca00;
  color: #fff;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 20px;
}

.name-product-detail {
  color: #e88735;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.price-detail {
  color: #28ca00;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.des-detail {
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.5;
}

.number-detail {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.number-detail span {
  font-size: 1.2rem;
  margin-right: 10px;
}

.number-detail input {
  width: 60px;
  padding: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-detail {
  display: flex;
  margin-bottom: 20px;
}

.fancy {
  background-color: #e88735;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  margin-right: 20px;
}

input[type="number"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60px;
  box-sizing: border-box;
  outline: none;
}

.fancy:hover {
  background-color: #d6792a;
}

.product-info {
  font-size: 14px;
  color: #b5b5b5;
}

.product-info a {
  color: #e88735;
  text-decoration: none;
}

.product-info a:hover {
  text-decoration: underline;
}
</style>
