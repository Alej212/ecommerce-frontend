<template>
        <div v-for="product in products" :key="product.custom_id" class="product" @click="navigateToProduct(product.type_product, product.custom_id)" >
            <img :src="product.image" alt="Product image" class="product_img">
            <div class="product_info">
                <div class="product_contentinfo">
                    <p class="product_title">{{ product.title }}</p>
                    <p class="product_category">{{ product.category }}</p>
                </div>
                <p class="product_price">${{ product.price }}</p>
            </div>
        </div>
</template>

<script setup>
import { useProductStore } from '~/stores/useProductStore'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useProductStore()

const navigateToProduct = (type_product, custom_id) => {
  router.push(`/products-${type_product}/${custom_id}`)
}


await store.fetchShoes()
await store.fetchSweaters()
await store.fetchJackets()
await store.fetchPants()

const shoes = store.shoes
const sweaters = store.sweaters
const jackets = store.jackets
const pants = store.pants


const props = defineProps({
  category: String
})

let products
switch (props.category) {
  case 'shoes':
    products = shoes
    break
  case 'sweaters':
    products = sweaters
    break
  case 'jackets':
    products = jackets
    break
  case 'pants':
    products = pants
    break
}

</script>

<style scoped lang="scss">
.product {
    display: flex;
    width: 11rem;
    padding: 0.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.875rem;
    border-radius: 0.3125rem;
    background: #FFF;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
    display: flex;

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
        display: flex;
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
    .product {
        width: 8rem;

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
</style>