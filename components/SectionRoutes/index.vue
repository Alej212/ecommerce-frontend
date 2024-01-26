<template>
    <div class="routeproducts">
        <!-- <div class="routeproducts_characteristic">
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
                    <p @click="selectedGender = 'All'">All</p>
                    <p @click="selectedGender = 'Hombre'">Hombre</p>
                    <p @click="selectedGender = 'Mujer'">Mujer</p>
                    <p @click="selectedGender = 'Niño'">Niño</p>
                    <p @click="selectedGender = 'Niña'">Niña</p>
                    <p @click="selectedGender = 'Bebé'">Bebé</p>
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
        </div> -->
        <div class="routeproducts_products">
            <div class="routeproducts_productsgalery">
                <!-- Muestra solo los productos que coinciden con el género seleccionado -->
                <SectionsCardProducts :products="filteredProducts" :category="contentType"></SectionsCardProducts>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {ref, computed, watch} from 'vue'
import { useProductStore } from '~/stores/useProductStore'

const route = useRoute()
let contentType = ref('')
let selectedGender = ref('')

const productStore = useProductStore()

let products = ref([]) // Define products en el ámbito global

watch([selectedGender, contentType], () => {
  switch (contentType.value) {
    case 'shoes':
      products.value = productStore.shoes
      break
    case 'sweaters':
      products.value = productStore.sweaters
      break
    case 'jackets':
      products.value = productStore.jackets
      break
    case 'pants':
      products.value = productStore.pants
      break
    default:
      products.value = []
  }
})

let filteredProducts = computed(() => {
    return products.value.filter(product => product.gender === selectedGender.value)
})

if (route.path === '/products-shoes') {
contentType.value = 'shoes'
} else if (route.path === '/products-sweaters') {
contentType.value = 'sweaters'
} else if (route.path === '/products-jackets') {
contentType.value = 'jackets'
} else if (route.path === '/products-pants') {
contentType.value = 'pants'
}

</script>

<style scoped lang="scss">
.routeproducts {
    display: flex;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 0 0.625rem;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;

    &_characteristic {
        display: flex;
        width: fit-content;
        padding: 0.625rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
        background-color: #fff;
        box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        position: sticky;
        top: 6rem;
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
        margin-top: 3rem;
    }
    p {
        color: #000;
        font-family: 'InterRegular';
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-top: .5rem;
    }
}
h5 {
    color: #000;
    font-family: 'InterExtraBold';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>