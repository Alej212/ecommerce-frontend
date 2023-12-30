<template>
    <div v-for="i in numbers" :key="i.index" class="product">
        <div class="product_img"></div>
        <div class="product_info">
            <div class="product_contentinfo">
                <p class="product_title">Air Jordan 3 Retro</p>
                <p class="product_category">Men's Shoes</p>
            </div>
            <p class="product_price">$200</p>
        </div>
        {{ i }}
    </div>
</template>

<script setup>
const numbers = [1,2,3,4,5,6];
</script>

<style scoped lang="scss">
.product {
    display: flex;
    width: 18.75rem;
    height: 20rem;
    padding: 0.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    background: #E9E8E8;

    &_img {
        display: flex;
        height: 13.625rem;
        padding: 0.625rem;
        align-items: flex-start;
        gap: 0.625rem;
        flex-shrink: 0;
        align-self: stretch;
        background-color: #FFF;
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