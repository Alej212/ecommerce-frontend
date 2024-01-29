<template>
    <nav class="header" :class="{ 'header--activate': isActive }">
        <icon @click="toggleActive" name="mdi:shop" class="header_iconone"></icon>
        <ul class="header_ul" :class="{ 'header_ul--activate': isActive }">
            <li class="header_li" @click="isActive = false">
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="header_li" @click="isActive = false">
                <NuxtLink to="/products-shoes">Shoes</NuxtLink>
            </li>
            <li class="header_li" @click="isActive = false">
                <NuxtLink to="/products-sweaters">Sweaters</NuxtLink>
            </li>
            <li class="header_li" @click="isActive = false">
                <NuxtLink to="/products-jackets">Jackets</NuxtLink>
            </li>
            <li class="header_li" @click="isActive = false">
                <NuxtLink to="/products-pants">Pants</NuxtLink>
            </li>
        </ul>
        <div class="header_contenticons">
            <div class="header_contentbag">
                <NuxtLink to="/mybag">
                    <icon class="header_icon" color="#fff" name="solar:cart-bold"></icon>
                </NuxtLink>
                <div class="header_count">
                    <li class="header_li">{{ bag.length }}</li>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useProductStore } from '~/stores/useProductStore.js';
import { ref, onMounted } from 'vue'

const bag = ref([])
const store = useProductStore()

onMounted(async () => {
    store.loadBag()
    bag.value = store.bag
})

let isActive = ref(false)

const toggleActive = () => {
    isActive.value = !isActive.value
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    justify-content: space-between;
    align-items: center;
    background-color: #081413;
    position: fixed;
    width: 100%;
    z-index: 2;
    top: 0;

    &_iconone {
        width: 1.875rem;
        height: 1.875rem;
        margin-left: 1.25rem;
        color: #081413;
    }
    &_icon {
        width: 1.875rem;
        height: 1.875rem;
    }
    &_ul {
        display: flex;
        padding: 0.625rem;
        justify-content: center;
        align-items: center;
        gap: 1.875rem;
    }
    &_contenticons {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        margin-right: 1.25rem;
    }
    &_contentbag {
        display: flex;
        align-items: center;
        gap: 0.1875rem;
    }
    &_count {
        display: flex;
        padding: 0.0625rem;
        padding-right: .0700rem;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.625rem;
        background: #CB1414;
        color: #fff;
    }
}

@media screen and (max-width: 800px) {
    .header--activate {
        display: flex;
        padding-top: 1.2rem;
        height: 100vh;
        padding-bottom: 1.2rem;
        justify-content: space-between;
        align-items: flex-start;
        background-color: #081413;
        position: fixed;
        width: 100%;
        z-index: 2;
    }
    .header_ul {
        display: none;
    }
    .header_ul--activate {
        display: flex;
        flex-flow: column wrap;
        height: 100%;
        padding: 0.625rem;
        justify-content: center;
        align-items: center;
        gap: 4rem;
    }
    .header_iconone {
        width: 1.875rem;
        height: 1.875rem;
        margin-left: 1.25rem;
        color: #fff;
    }
}
</style>