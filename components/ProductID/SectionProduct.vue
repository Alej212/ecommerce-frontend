<template>
    <section class="idproduct">
        <div class="idproduct_imgcontent">
            <div class="idproduct_imgs" v-if="false">
                <div class="idproduct_imgsproduct"></div>
            </div>
            <div class="idproduct_imgs" v-if="true">
                <div class="idproduct_imgsproductnegative">
                    <Icon name="ant-design:stop-outlined" color="#fff" size="2rem"></Icon>
                </div>
            </div>
            <div class="idproduct_img">
                <img :src="product.image" alt="" class="product_image">
            </div>
        </div>
        <div class="idproduct_infocontent">
            <div class="idproduct_titlecontent">
                <h3>{{ product.title }}</h3>
                <h5>{{ product.type_product }} - {{ product.genre }}</h5>
            </div>
            <p class="idproduct_price">{{ product.price }} $</p>
            <div class="idproduct_moredata">
                <div class="idproduct_moredatatext">
                    <h5>Selecciona tu talla</h5>
                    <p>Guia de tallas</p>
                </div>
                <div class="idproduct_moredatacontent">
                    <ul class="idproduct_moredatacontentrow">
                        <li class="idproduct_moredatacontentrowcube">X</li>
                        <li class="idproduct_moredatacontentrowcube">L</li>
                        <li class="idproduct_moredatacontentrowcube">M</li>
                    </ul>
                </div>
            </div>
            <div class="idproduct_description">
                <h5 class="idproduct_descriptiontitle">Descripción:</h5>
                <p class="idproduct_descriptiontext" v-if="false">
                    Las Nike Dunk Low Retro, que se crearon para el parqué y terminaron dominando las calles, vuelven con revestimientos impecables y los colores del equipo originales. Este icono de baloncesto rinde homenaje al estilo de los 80 con una parte superior de piel premium que ofrece un look excelente. La tecnología del calzado moderna aporta la comodidad del siglo XXI.
                </p>
                <p class="idproduct_descriptiontext" v-if="true">
                    Lamentamos no tener más información sobre este producto. Por favor comuniquese con el vendedor si esta interesado en el producto
                </p>
            </div>
            <ul class="idproduct_buttons">
                <li class="idproduct_buttonadd">
                    Añadir a la cesta
                </li>
                <li class="idproduct_buttonfavorite">
                    Favorito
                </li>
            </ul>
        </div>
    </section>
    <ProductIDInterestingProducts></ProductIDInterestingProducts>
</template>

<script setup>
import { useProductStore } from '~/stores/useProductStore'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const productStore = useProductStore()
const route = useRoute()
const product = ref({})

const id = route.params.id
if (route.params.product === 'shoes') {
await productStore.fetchShoesDetail(id)
product.value = productStore.$state.shoesDetail
} else if (route.params.product === 'jacket') {
await productStore.fetchJacketsDetail(id)
product.value = productStore.$state.jacketsDetail
} else if (route.params.product === 'sweater') {
await productStore.fetchSweatersDetail(id)
product.value = productStore.$state.sweatersDetail
} else if (route.params.product === 'pants') {
await productStore.fetchPantsDetail(id)
product.value = productStore.$state.pantsDetail
}


</script>



<style scoped lang="scss">
.product_image {
    width: 100%;
    height: 100%;
}

.idproduct {
    display: flex;
    padding: 6.25rem;
    align-items: flex-start;
    gap: 4.375rem;
    

    &_imgcontent {
        display: flex;
        align-items: flex-start;
        gap: 1.875rem;
    }
    &_imgs {
        display: flex;
        width: 5rem;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }
    &_imgsproduct {
        width: 5rem;
        height: 5rem;
        border-radius: 0.3125rem;
        background: #000;
    }
    &_imgsproductnegative {
        width: 5rem;
        height: 5rem;
        border-radius: 0.3125rem;
        background: #000;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    &_img {
        display: flex;
        // width: 31.25rem;
        // height: 32.5rem;
        width: auto;
        height: auto;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
        border-radius: 0.3125rem;
        background: #E9E8E8;
        object-fit: contain;
    }
    &_infocontent {
        display: flex;
        padding: 0.625rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.25rem;
        flex: 1 0 0;
        align-self: stretch;
    }
    h3 {
        color: #000;
        font-family: 'InterBold';
        font-size: 1.5625rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    h5 {
        color: #000;
        font-family: 'InterBold';
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    &_titlecontent {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
    }
    &_price {
        color: #000;
        font-family: 'InterBold';
        font-size: 1.7rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    &_moredata {
        display: flex;
        padding: 1.25rem 0rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.25rem;
        align-self: stretch;
    }
    &_moredatatext {
        display: flex;
        //padding-right: 2.5rem;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    }
    &_moredatacontent {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
        align-self: stretch;
    }
    &_moredatacontentrow {
        display: flex;
        align-items: flex-start;
        gap: 0.625rem;
        align-self: stretch;
    }
    &_moredatacontentrowcube {
        height: 3.125rem;
        flex: 1 0 0;
        background: #E9E8E8;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &_moredatacontentrowcube:hover {
        background-color: #000;
        color: #fff;
        transition: ease-in-out  .3s;
    }
    &_description {
        display: flex;
        padding-bottom: 1.875rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.25rem;
        align-self: stretch;
    }
    &_descriptiontext {
        color: #000;
        font-family: 'InterRegular';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    &_buttons {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
        align-self: stretch;
    }
    &_buttonadd {
        display: flex;
        padding: 0.9375rem 1.5625rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        align-self: stretch;
        border-radius: 3.125rem;
        background: #000;
    }
    &_buttonfavorite {
        display: flex;
        padding: 0.9375rem 3.625rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        align-self: stretch;
        border-radius: 3.125rem;
        border: 1px solid #000;
        color: #000;
    }
    p {
        color: rgba(0, 0, 0, 0.80);
        font-family: 'InterBold';
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}

@media screen and (max-width: 1050px) {
    .idproduct {
        display: flex;
        flex-flow: column nowrap;
        padding: 6.25rem;
        align-items: flex-start;
        gap: 4.375rem;

        &_imgcontent {
        display: flex;
        align-items: flex-start;
        gap: 1.875rem;
        width: 100%;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        }
        &_imgs {
            display: flex;
            /* width: 5rem; */
            /* flex-direction: column; */
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
        }
    }


}

@media screen and (max-width: 600px) {

    .idproduct {
        display: flex;
        padding: 6.25rem 2rem 0 2rem;
        align-items: flex-start;
        gap: 4.375rem;
    }
    .idproduct_imgsproduct {
        width: 4rem;
        height: 4rem;
        border-radius: 0.3125rem;
        background: #000;
    }
    .idproduct_imgsproductnegative {
        width: 4rem;
        height: 4rem;
        border-radius: 0.3125rem;
        background: #000;

        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>