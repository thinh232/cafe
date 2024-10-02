<!-- <template>
  <div class="titleProducts"><span>Các loại cafe mới nhất</span></div>
  <div class="productsContainer">
    <div
      class="productsShow"
      v-for="(item, index) in products"
      v-bind:key="index"
    >
      <img v-bind:src="item.src" alt="product image" />
      <div class="nameProduct">{{ item.title }}</div>
      <div class="priceProduct">
        {{ price(item.price) }}
      </div>
      <button class="buyButton">Mua ngay</button>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "products-home",
  setup() {
    const store = useStore();
    const products = computed(() => store.getters.products);
    const price = (price) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      }).format(price);
    };

    return {
      products,
      price,
    };
  },
};
</script> -->

<template>
  <category>
    <div class="titleProducts"><span>Các loại cafe mới nhất</span></div>
  <div class="productsContainer">
    <div
      class="productsShow"
      v-for="(item, index) in products"
      v-bind:key="index"
    >
      <img v-bind:src="item.src" alt="product image" />
      <div class="nameProduct">{{ item.title }}</div>
      <div class="priceProduct">
        {{ price(item.price) }}
      </div>
      <button class="buyButton">Mua ngay</button>
    </div>
  </div>
  </category>
</template>

<script>
import category from './category.vue'
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name:"product-view",
  components: { category },
  setup() {
    const store = useStore();
    const products = computed(() => store.getters.products);
    const price = (price) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      }).format(price);
    };

    return {
      products,
      price,
    };
  },
}
</script>

<style scoped>
.productsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
}

.titleProducts {
  width: 100%;
  font-size: 36px;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin: 20px 0px;
}

.productsShow {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
}

.productsShow:hover {
  transform: translateY(-10px);
}

.productsShow img {
  width: 220px;
  height: 150px;
  max-width: 200px;
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out;
}

.productsShow:hover img {
  transform: scale(1.05);
}

.nameProduct {
  font-size: 24px;
  font-family: "Arial", sans-serif;
  color: #333;
  margin-bottom: 10px;
}

.priceProduct {
  font-size: 20px;
  color: #e63946;
  margin-bottom: 15px;
  font-family: "Arial", sans-serif;
  font-weight: bold;
}

.buyButton {
  background-color: #e63946;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
}

.buyButton:hover {
  background-color: #d62828;
}
</style>