<template>
    <section class="shoes">
        <div class="shoes_info">
            <h2>Podría intersarte</h2>
            <ul class="shoes_categories">
                <li class="shoes_category">Men</li>
                <li class="shoes_category">Women</li>
                <li class="shoes_category">Kids</li>
            </ul>
        </div>
        <div class="shoes_galery">
            <SectionsCardProducts :category="products"></SectionsCardProducts>
        </div>
        <div class="shoes_contentbutton">
            <div class="shoes_button">
                <p class="shoes_showmore">Show more</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute()
const product = route.params.product
const products = ref(product)


</script>

<style scoped lang="scss">
.shoes {
    display: flex;
    padding: 4.375rem 0.625rem 1.875rem 0.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.875rem;
    align-self: stretch;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
    overflow: hidden;

    &_info {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    }
    &_categories {
        display: flex;
        padding: 0.625rem;
        align-items: flex-start;
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
        gap: 1.25rem;
        margin-top: 1rem;
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
        padding-right: 0.625rem;
    }
    &_showmore {
        color: #000;
        font-family: 'InterBold';
        font-size: 1rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }
    &_icon {
        width: 1.875rem;
        height: 1.875rem;
    }
}

@media screen and (max-width: 650px) {
    h2 {
        font-size: 30px;
    }
    .shoes_info {
        display: flex;
        padding-right: 1.875rem;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
        flex-flow: column nowrap;

    }
    .shoes_categories {
        display: flex;
        margin-top: 1.7rem;
        padding: 0;
        align-items: flex-start;
        gap: 0.625rem;
    }
}
</style>