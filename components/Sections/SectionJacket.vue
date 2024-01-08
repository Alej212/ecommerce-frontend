<template>
    <section class="jacket">
        <div class="jacket_info">
            <h2>Jacket</h2>
            <ul class="jacket_categories">
                <li class="jacket_category">Men</li>
                <li class="jacket_category">Women</li>
                <li class="jacket_category">Kids</li>
            </ul>
        </div>
        <div class="jacket_galery">
            <SectionsCardProducts></SectionsCardProducts>
        </div>
        <div class="jacket_contentbutton">
            <div class="jacket_button">
                <p class="jacket_showmore">Show more</p>
                <icon name="ic:outline-arrow-drop-down" color="#000" class="jacket_icon"></icon>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped lang="scss">
.jacket {
    display: flex;
    padding: 4.375rem 0.625rem 1.875rem 1.5625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.875rem;
    align-self: stretch;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
    overflow: hidden;

    &_info {
        display: flex;
        padding-right: 1.875rem;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    }
    &_categories {
        display: flex;
        padding: 0.625rem;
        align-items: flex-start;
        gap: 0.625rem;
    }
    &_category {
        display: flex;
        padding: 0.5rem 0.875rem;
        align-items: flex-start;
        gap: 0.625rem;
        background-color: #000;
    }
    &_galery {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
    }
    &_contentbutton {
        display: flex;
        padding-right: 1.875rem;
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
    }
    &_icon {
        width: 1.875rem;
        height: 1.875rem;
    }
}
</style>