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
        <div class="jacket_galery" ref="slider">
            <SectionsCardProducts category="jackets"></SectionsCardProducts>
        </div>
        <div class="jacket_contentbutton">
            <div class="jacket_button">
                <NuxtLink to="products-jackets">
                    <p class="jacket_showmore">Show more</p>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

let slider = ref(null)
let isDown = false
let startX
let scrollLeft

onMounted(() => {
  const sliderElement = slider.value

  sliderElement.addEventListener('mousedown', (e) => {
    isDown = true
    sliderElement.classList.add('active')
    startX = e.pageX - sliderElement.offsetLeft
    scrollLeft = sliderElement.scrollLeft
  })

  sliderElement.addEventListener('mouseleave', () => {
    isDown = false
    sliderElement.classList.remove('active')
  })

  sliderElement.addEventListener('mouseup', () => {
    isDown = false
    sliderElement.classList.remove('active')
  })

  sliderElement.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - sliderElement.offsetLeft
    const walk = (x - startX) * 3
    sliderElement.scrollLeft = scrollLeft - walk
  })
})
</script>

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


@media screen and (max-width: 550px) {
    .jacket_info {
        justify-content: none;
        flex-flow: column nowrap;
    }
    .jacket_categories {
        padding-left: 0;
    }
}
</style>