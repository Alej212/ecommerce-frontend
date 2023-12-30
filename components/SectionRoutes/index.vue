<template>
    <div class="routeproducts">
        <div class="routeproducts_characteristic">
            <h5>Envio gratis</h5>
            <div class="routeproducts_button">
                <div class="routeproducts_buttoncircle"></div>
            </div>
            <h5>Solo tiendas oficiales</h5>
            <div class="routeproducts_button">
                <div class="routeproducts_buttoncircle"></div>
            </div>
            <div class="routeproducts_section">
                <h5>Genere</h5>
                <div class="routerproducts_sectionoptions">
                    <p>Hombre</p>
                    <p>Mujer</p>
                    <p>Niño</p>
                    <p>Niña</p>
                    <p>Bebé</p>
                </div>
            </div>
            <div class="routeproducts_section">
                <h5>Ubication</h5>
                <div class="routerproducts_sectionoptions">
                    <p>Ubication</p>
                    <p>Ubication</p>
                    <p>Ubication</p>
                    <p>Ubication</p>
                    <p>Ubication</p>
                </div>
            </div>
            <div class="routeproducts_section">
                <h5>Condition</h5>
                <div class="routerproducts_sectionoptions">
                    <p>Nuevo</p>
                    <p>Usado</p>
                </div>
            </div>
            <div class="routeproducts_section">
                <h5>Offers</h5>
                <div class="routerproducts_sectionoptions">
                    <p>5% OFF</p>
                    <p>10% OFF</p>
                    <p>15% OFF</p>
                    <p>20% OFF</p>
                    <p>25% OFF</p>
                </div>
            </div>
        </div>
        <div class="routeproducts_products">
            <div class="routeproducts_productsgalery">
                <SectionsCardProducts></SectionsCardProducts>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.routeproducts {
    display: flex;
    padding: 2.5rem 0.625rem;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;

    &_characteristic {
        display: flex;
        width: 16.4375rem;
        padding: 0.625rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
    }
    &_button {
        display: flex;
        width: 2.8125rem;
        padding: 0.1875rem;
        align-items: flex-start;
        gap: 0.625rem;
        border-radius: 3.125rem;
        background: #000;
    }
    &_buttoncircle {
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
        border-radius: 3.125rem;
        background: #FFF;
    }
    &_section {
        display: flex;
        padding-top: 0.9375rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.9375rem;
        align-self: stretch;
    }
    &_sectionoptions {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
    }
    &_products {
        display: flex;
        padding: 0.625rem;
        flex-direction: column;
        align-items: center;
        gap: 0.625rem;
        flex: 1 0 0;
    }
    &_productsgalery {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        gap: 1.25rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
    h5 {
        color: #000;
        font-family: 'InterExtraBold';
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    p {
        color: #000;
        font-family: 'InterRegular';
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}
</style>