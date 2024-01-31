<template>
  <div class="contentbag">
    <div class="title">
      <h2>My bag</h2>
    </div>
    <div class="content_product">
      <div v-for="product in bag" :key="product.custom_id" class="product">
      <img :src="product.image" alt="Product image" class="product_img">
      <div class="product_info">
        <div class="product_contentinfo">
          <p class="product_title">{{ product.title }}</p>
          <p class="product_category">{{ product.type_product }}</p>
        </div>
        <p class="product_price">${{ product.price }}</p>
        <button class="product_delete" @click="store.removeFromBag(product)">Delete</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '~/stores/useProductStore'
import { onMounted, ref } from 'vue'

const store = useProductStore()
const bag = ref([])

onMounted(() => {
  store.loadBag()
  bag.value = store.bag
})
</script>



<style scoped lang="scss">
.contentbag {
    margin-top: 6rem;
    height: max-content;

    .title {
      text-align: center;
    }
    .content_product {
        display: flex;
        flex-flow: row wrap;
        gap: 5rem;
        justify-content: center;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }

    .product {
        background-color: #fff;
        width: 16rem;
        padding: 1rem;
        border-radius: 5px;

        &_img {
            height: 15rem;
            width: 100%;
        }
        &_info {
            display: flex;
            flex-flow: column nowrap;
            gap: .5rem;
        }
        &_contentinfo {
          display: flex;
          flex-flow: column wrap;
          margin-top: 1rem;
          gap: .5rem;
        }
        &_title {
            color: #000;
            font-family: 'InterBold';
            font-size: 1rem;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            align-self: stretch;
        }
        &_category {
          color: #000;
        }
        &_price {
            color: #000;
            font-family: 'InterBold';
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
        &_delete {
            all: unset;
            border-radius: 3px;
            text-align: center;
            background-color: rgb(193, 68, 68);
            color: #fff;
            font-family: 'InterBold';
            font-size: .8rem;
            padding: .5rem;
        }
    }
}
</style>
