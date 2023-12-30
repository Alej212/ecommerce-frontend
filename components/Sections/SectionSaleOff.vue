<template>
    <section class="saleoff">
        <h3 class="saleoff_h3">Happening Now</h3>
        <div class="saleoff_img"></div>
    </section>
</template>

<script setup></script>

<style scoped lang="scss">
.saleoff {
    display: flex;
    padding: 1.8125rem 3.125rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.875rem;
    align-self: stretch;

    &_h3 {
        color: #000;
        font-family: 'InterBold';
        font-size: 1.5625rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_img {
        display: flex;
        height: 32.5625rem;
        padding: 0.625rem;
        align-items: flex-start;
        gap: 0.625rem;
        align-self: stretch;
        background: url('../../assets/images/shoessale.png'), lightgray 50% / cover no-repeat;
    }
}
</style>