<template>
    <nav class="header">
        <icon name="charm:menu-kebab" color="#fff" class="header_icon"></icon>
        <ul class="header_ul">
            <li class="header_li">
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="header_li">
                <NuxtLink to="/products/shoes">Shoes</NuxtLink>
            </li>
            <li class="header_li">
                <NuxtLink to="/products/sweters">Sweters</NuxtLink>
            </li>
            <li class="header_li">
                <NuxtLink to="/products/jackets">Jackets</NuxtLink>
            </li>
            <li class="header_li">
                <NuxtLink to="/products/pants">Pants</NuxtLink>
            </li>
        </ul>
        <div class="header_contenticons">
            <icon class="header_icon" color="#fff" name="jam:world"></icon>
            <div class="header_contentbag">
                <icon class="header_icon" color="#fff" name="solar:cart-bold"></icon>
                <div class="header_count">
                    <li class="header_li">0</li>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup></script>

<style scoped lang="scss">
.header {
    display: flex;
    padding: 1.25rem;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background-color: #081413;

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
</style>