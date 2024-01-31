import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('products', {
  state: () => ({
    shoes: [],
    sweaters: [],
    jackets: [],
    pants: [],
    productDetail: {},
    bag: [],
    ProductParameters: [],
  }),
  actions: {
    async fetchShoes() {
      try {
        const response = await axios.get('https://ecommerce-backend-django.onrender.com/products/shoes/')
        this.shoes = response.data
      } catch (error) {
        console.error('Error fetching shoes:', error)
      }
    },
    async fetchSweaters() {
      try {
        const response = await axios.get('https://ecommerce-backend-django.onrender.com/products/sweaters/')
        this.sweaters = response.data
      } catch (error) {
        console.error('Error fetching sweaters:', error)
      }
    },
    async fetchJackets() {
      try {
        const response = await axios.get('https://ecommerce-backend-django.onrender.com/products/jackets/')
        this.jackets = response.data
      } catch (error) {
        console.error('Error fetching jackets:', error)
      }
    },
    async fetchPants() {
      try {
        const response = await axios.get('https://ecommerce-backend-django.onrender.com/products/pants/')
        this.pants = response.data 
      } catch (error) {
        console.error('Error fetching pants:', error)
      }
    },
    async fetchProductDetail(type, custom_id) {
      try {
        const response = await axios.get(`https://ecommerce-backend-django.onrender.com/products/${type}/${custom_id}`)
        this.productDetail = response.data
      } catch (error) {
        console.error(`Error fetching ${type}:`, error)
      }
    },
    async fetchProductParameters(parameter, product) {
      try {
          const response = await axios.get(`https://ecommerce-backend-django.onrender.com/products/${product}/?genre=${parameter}`)
          this.ProductParameters = response.data
      } catch (err) {
          console.log(`error: ${err}`)
      }
    },
    addToBag(product) {
      this.bag.push(product)
      if (typeof window !== 'undefined') {
        localStorage.setItem('bag', JSON.stringify(this.bag)) 
      }
    },
    removeFromBag(product) {
      const index = this.bag.findIndex(p => p.custom_id === product.custom_id)
      if (index !== -1) {
        this.bag.splice(index, 1)
        if (typeof window !== 'undefined') {
          localStorage.setItem('bag', JSON.stringify(this.bag)) 
        }
      }
    },
    loadBag() {
      if (typeof window !== 'undefined') {
        this.bag = JSON.parse(localStorage.getItem('bag')) || []
      }
    }
  },
})
