<template>
    <section class="jacket">
        <div class="jacket_info">
            <h2>Jackets</h2>
            <ul class="jacket_categories">
                <li @click="clickHandler('All')" class="jacket_category">All</li>
                <li @click="clickHandler('Hombre')" class="jacket_category">Men</li>
                <li @click="clickHandler('Mujer')" class="jacket_category">Women</li>
                <li @click="clickHandler('Niña')" class="jacket_category">Girls</li>
            </ul>
        </div>
        <div class="jacket_galery">
            <SectionsCardProducts v-if="selectedCategory === 'All'" :limit="true" category="jackets"></SectionsCardProducts>
            <div v-else @click="navigateToProduct(product.type_product, product.custom_id)" v-for="product in products" :key="product.custom_id" class="product" @mouseover="hoveredProduct = product.custom_id" @mouseleave="hoveredProduct = null">
                <img :src="product.image" alt="Product image" class="product_img">
                <div class="product_info">
                    <div class="product_contentinfo">
                        <p class="product_title">{{ product.title }}</p>
                        <p class="product_category">{{ product.type_product }}</p>
                    </div>
                    <p class="product_price">${{ product.price }}</p>
                </div>
            </div>
        </div>
        <div class="jacket_contentbutton">
            <div class="jacket_button">
                <NuxtLink to="/products-jackets">
                    <p class="jacket_showmore">Show more</p>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '~/stores/useProductStore.js'
import { useRouter } from 'vue-router'

const store = useProductStore()
const selectedCategory = ref('All')
const products = ref([])
let hoveredProduct = ref(null)
const router = useRouter()

const navigateToProduct = (type_product, custom_id) => {
  router.push(`/products-${type_product}/${custom_id}`)
}

const clickHandler = async (parameter) => {
    selectedCategory.value = parameter
    if (parameter !== 'All') {
        await store.fetchProductParameters(parameter, 'jackets')
        products.value = store.ProductParameters.slice(0, 15) // Aquí limitamos la cantidad de productos a 15
    }
}
</script>

<style scoped lang="scss">
.jacket {
    display: flex;
    padding: 4.375rem 0.625rem 1.875rem 1.5625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
    overflow: hidden;

    &_info {
        display: flex;
        padding-right: 1.875rem;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        gap: 1rem;
    }
    &_categories {
        display: flex;
        flex-wrap: wrap;
        padding: 0.625rem;
        justify-content: flex-end;
        gap: .8rem;
    }
    &_category {
        display: flex;
        padding: 0.5rem 0.875rem;
        align-items: flex-start;
        gap: 0.625rem;
        background-color: #000;
        user-select: none;
        border-radius: 2px;
    }
    &_category:hover {
        background-color: #2b7a74;
    }
    &_galery {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;
        transition: transform 15s linear;
    }
    &_galery:hover {
        transform: translateX(-65%);
    }
    &_contentbutton {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0.5rem;
        align-self: stretch;
    }
    &_button {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0.5rem;
    }
    &_showmore {
        color: #000;
        font-family: 'InterBold';
        font-size: 1rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin-right: 2rem;
    }
    &_showmore:hover {
        color: #18423f;
    }
    &_icon {
        width: 1.875rem;
        height: 1.875rem;
    }
}


@media screen and (max-width: 550px) {
    .jacket_info {
        padding-right: 0;
    }
    .jacket_categories {
        padding-left: 0;
    }
    .jacket_category {
        font-size: 12px;
    }

    .jacket_info h2 {
        font-size: 25px;
    }
    .jacket_showmore {
        font-size: .9rem;
    }
}


@media screen and (max-width: 800px) {
    .jacket_galery {
        gap: 1.5rem;
    }
}

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
</style>