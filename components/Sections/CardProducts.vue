<template>
    <div @click="navigateToProduct(product.type_product, product.custom_id)" v-for="product in products" :key="product.custom_id" class="product" @mouseover="hoveredProduct = product.custom_id" @mouseleave="hoveredProduct = null">
        <img :src="product.image" alt="Product image" class="product_img">
        <div class="product_info">
            <div class="product_contentinfo">
                <p class="product_title">{{ product.title }}</p>
                <p class="product_category">{{ product.type_product }}</p>
            </div>
            <p class="product_price">${{ product.price }}</p>
        </div>
    </div>
</template>


<script setup>
import { useProductStore } from '~/stores/useProductStore'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'


const router = useRouter()
const store = useProductStore()

const navigateToProduct = (type_product, custom_id) => {
  router.push(`/products-${type_product}/${custom_id}`)
}

let hoveredProduct = ref(null)

const shoes = ref([])
const sweaters = ref([])
const jackets = ref([])
const pants = ref([])
const products = ref([])

const props = defineProps({
    category: String,
    limit: {
      type: Boolean,
      default: false
    },
    products: Array,
})

onMounted(async () => {
    await store.fetchShoes()
    shoes.value = store.$state.shoes
    await store.fetchSweaters()
    sweaters.value = store.$state.sweaters
    await store.fetchJackets()
    jackets.value = store.$state.jackets
    await store.fetchPants()
    pants.value = store.$state.pants

    switch (props.category) {
      case 'shoes':
        products.value = props.limit ? shoes.value.slice(0, 15) : shoes.value
        break
      case 'sweaters':
        products.value = props.limit ? sweaters.value.slice(0, 15) : sweaters.value
        break
      case 'jackets':
        products.value = props.limit ? jackets.value.slice(0, 15) : jackets.value
        break
      case 'pants':
        products.value = props.limit ? pants.value.slice(0, 15) : pants.value
        break
    }
})
</script>

<style scoped lang="scss">
.product {
    display: flex;
    width: 13rem;
    padding: 0.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.875rem;
    border-radius: 0.3125rem;
    background: #FFF;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);

    &_img {
        height: 13rem;
        width: 100%;
    }
    &_info {
        display: flex;
        padding-top: 0.3125rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
        align-self: stretch;
    }
    &_contentinfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.3125rem;
        align-self: stretch;
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
        font-family: 'InterLight';
        font-size: 0.900rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    &_price {
        color: #000;
        font-family: 'InterBold';
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
.product:hover {
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 800px) {
.header_icon {
    height: 1.2rem;
    width: 1.2rem;
}
.product {
    width: 11rem;

    &_img {
        height: 9rem;
    }
    &_title {
        color: #000;
        font-family: 'InterBold';
        font-size: .9rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        align-self: stretch;
    }
    &_category {
        color: #000;
        font-family: 'InterLight';
        font-size: .8rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    &_price {
        color: #000;
        font-family: 'InterBold';
        font-size: .9rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
}
@media screen and (max-width: 550px) {
    .product {
    width: 8rem;

    &_img {
        height: 7rem;
    }
    &_title {
        color: #000;
        font-family: 'InterBold';
        font-size: .7rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        align-self: stretch;
    }
    &_category {
        color: #000;
        font-family: 'InterLight';
        font-size: .8rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    &_price {
        color: #000;
        font-family: 'InterBold';
        font-size: .8rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
}
</style>