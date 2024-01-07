<template>
    <div v-for="product in data" :key="product.id" class="product">
        <img :src="product.image" alt="Product image" class="product_img">
        <div class="product_info">
            <div class="product_contentinfo">
                <p class="product_title">{{ product.title }}</p>
                <p class="product_category">Men's Shoes</p>
            </div>
            <p class="product_price">${{ product.price }}</p>
        </div>
    </div>
</template>

<script setup>

const { data, error, pending } = await useLazyFetch('https://ecommerce-backend-django.onrender.com')

console.log(data)


// function formatImgUrl(imgUrl) {
//     return imgUrl.replace('https://ecommerce-backend-django.onrender.com/', '');
// }

</script>

<style scoped lang="scss">
.product {
    display: flex;
    width: 18.75rem;
    height: fit-content;
    padding: 0.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    background: #E9E8E8;

    &_img {
        display: flex;
        height: 13.625rem;
        //padding: 0.625rem;
        align-items: flex-start;
        gap: 0.625rem;
        flex-shrink: 0;
        align-self: stretch;
        //background-color: lightgray 50% / cover no-repeat;
    }
    &_info {
        display: flex;
        padding-top: 0.3125rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        flex: 1 0 0;
        align-self: stretch;
    }
    &_contentinfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    &_title {
        color: #000;
        font-family: 'InterBold';
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
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
</style>