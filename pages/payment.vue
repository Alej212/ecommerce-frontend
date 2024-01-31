<template>
    <div class="p-8 pt-40 sm:pl-10 sm:pr-10 md:pl-20 md:pr-20 xl:pl-40 xl:pr-40 flex flex-col items-center gap-12 w-full">
        <div class="w-full">
            <ul class=" list-none border-round flex flex-col gap-4" @hide="selectedId = null">
            <li
                v-for="product in products"
                :key="product.custom_id"
                :class="['bg-slate-800 flex items-center justify-between rounded p-2 pr-4 w-full hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200', { 'border-primary': selectedId === product.id }]"
                @contextmenu="onRightClick($event, product.custom_id)"
            >
                <div class="flex items-center flex-nowrap justify-between p-2 align-items-center gap-3">
                    <img class="w-16 h-16 rounded" :src="product.image" :alt="product.title" />
                    <div class="flex flex-col gap-1">
                        <span class="font-bold">{{ product.title }}</span>
                        <div class="flex align-items-center gap-2">
                            <i class="pi pi-tag text-sm">{{ product.type_product }}</i>
                        </div>
                    </div>
                </div>
                <span class="font-bold text-900 ml-5">${{ product.price }}</span>
            </li>
        </ul>
        </div>
        <form class="bg-slate-900 w-full md:p-16 p-10 flex flex-col rounded gap-12">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col">
                    <label for="username" class="font-bold">Username</label>
                    <InputText id="username" class="text-black bg-slate-100 p-1" v-model="value" aria-describedby="username-help" />
                </div>
                <div class="flex flex-col">
                    <label for="username" class="font-bold">Password</label>
                    <InputText id="username" class="text-black bg-slate-100 p-1" v-model="value" aria-describedby="username-help" />
                </div>
                <div class="flex flex-col">
                    <label for="username" class="font-bold">Email</label>
                    <InputText id="username" class="text-black bg-slate-100 p-1" v-model="value" aria-describedby="username-help" />
                </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-10 items-center">
                <div class="flex gap-5 items-center">
                    <div class="bg-rose-400 text-black pt-2 pb-2 pl-6 pr-6 rounded flex flex-col items-center">
                    <label for="username" class="font-bold">Amount</label>
                    <div class="font-bold flex gap-2">
                        <icon name="tdesign:money" color="#000" size="1.5rem"></icon>
                        <p class="">{{ total }}</p>
                    </div>
                </div>
                <span class="font-bold">+</span>
                <div class="bg-amber-300 text-black pt-2 pb-2 pl-6 pr-6 rounded flex flex-col items-center">
                    <label for="username" class="font-bold">Discount</label>
                    <div class="font-bold flex gap-2">
                        <icon name="majesticons:money-minus-line" color="#000" size="1.5rem"></icon>
                        <p class="">{{ discount }}</p>
                    </div>
                </div>
                </div>
                <div class="flex gap-8 items-center">
                    <span class="font-bold hidden sm:block">=</span>
                    <div class="bg-teal-500 text-black pt-2 pb-2 pl-6 pr-6 rounded flex flex-col items-center">
                        <label for="username" class="font-bold">Total amount</label>
                        <div class="font-bold flex gap-2">
                            <icon name="fluent:money-16-regular" color="#000" size="1.5rem"></icon>
                            <p class="">{{ total - discount }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Button class="group bg-teal-900 hover:bg-teal-500 hover:text-black p-3 font-bold flex gap-2 justify-center">
                <label for="username" class="font-bold text-xl">Buy</label>
                <icon name="material-symbols:shopping-cart" class="group-hover:text-black" size="1.5rem"></icon>
            </Button>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '~/stores/useProductStore.js';

const products = ref([])
const store = useProductStore()

onMounted(async () => {
    store.loadBag()
    products.value = store.$state.bag
})

const discount = 20;


const total = computed(() => {
  return products.value.reduce((sum, product) => sum + Number(product.price), 0)
})
</script>