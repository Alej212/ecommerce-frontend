<template>
    <section class="idproduct">
        <div class="idproduct_imgcontent">
            <div class="idproduct_imgs">
                <div class="idproduct_imgsproduct"></div>
            </div>
            <div class="idproduct_img"></div>
        </div>
        <div class="idproduct_infocontent">
            <div class="idproduct_titlecontent">
                <h3>Nike Dunk Low Retro</h3>
                <h5>Zapatillas - Hombre</h5>
            </div>
            <p class="idproduct_price">119,99 €</p>
            <div class="idproduct_moredata">
                <div class="idproduct_moredatatext">
                    <h5>Selecciona tu talla</h5>
                    <p>Guia de tallas</p>
                </div>
                <div class="idproduct_moredatacontent">
                    <ul class="idproduct_moredatacontentrow">
                        <li class="idproduct_moredatacontentrowcube"></li>
                        <li class="idproduct_moredatacontentrowcube"></li>
                        <li class="idproduct_moredatacontentrowcube"></li>
                    </ul>
                </div>
            </div>
            <div class="idproduct_description">
                <h5 class="idproduct_descriptiontitle">Descripción:</h5>
                <p class="idproduct_descriptiontext">
                    Las Nike Dunk Low Retro, que se crearon para el parqué y terminaron dominando las calles, vuelven con revestimientos impecables y los colores del equipo originales. Este icono de baloncesto rinde homenaje al estilo de los 80 con una parte superior de piel premium que ofrece un look excelente. La tecnología del calzado moderna aporta la comodidad del siglo XXI.
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

<script setup></script>

<style scoped lang="scss">
.idproduct {
    display: flex;
    padding: 6.25rem;
    align-items: flex-start;
    gap: 4.375rem;
    align-self: stretch;
    

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
    &_img {
        display: flex;
        width: 31.25rem;
        height: 32.5rem;
        padding: 0.625rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
        border-radius: 0.3125rem;
        background: #E9E8E8;
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
        font-size: 1rem;
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
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}
</style>