import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('products', {
  state: () => ({
    shoes: [],
    sweaters: [],
    jackets: [],
    pants: [],
    productDetail: {},
  }),
  actions: {
    async fetchShoes() {
      try {
        const response = await axios.get('https://ecommerce-backend-django.onrender.com/products/shoes')
        this.shoes = response.data
      } catch (error) {
        console.error('Error fetching shoes:', error)
      }
    },
    async fetchSweaters() {
      try {
        const response = await axios.get('https://ecommerce-backend-django.onrender.com/products/sweaters')
        this.sweaters = response.data
      } catch (error) {
        console.error('Error fetching sweaters:', error)
      }
    },
    async fetchJackets() {
      try {
        const response = await axios.get('https://ecommerce-backend-django.onrender.com/products/jackets')
        this.jackets = response.data
      } catch (error) {
        console.error('Error fetching jackets:', error)
      }
    },
    async fetchPants() {
      try {
        const response = await axios.get('https://ecommerce-backend-django.onrender.com/products/pants')
        this.pants = response.data
      } catch (error) {
        console.error('Error fetching pants:', error)
      }
    },
    // async fetchShoesDetail(custom_id) {
    //   try {
    //     const response = await axios.get(`https://ecommerce-backend-django.onrender.com/products/shoes/${custom_id}`)
    //     this.shoesDetail = response.data
    //   } catch (error) {
    //     console.error('Error fetching shoes:', error)
    //   }
    // },
    // async fetchSweatersDetail(custom_id) {
    //   try {
    //     const response = await axios.get(`https://ecommerce-backend-django.onrender.com/products/sweaters/${custom_id}`)
    //     this.sweatersDetail = response.data
    //   } catch (error) {
    //     console.error('Error fetching sweaters:', error)
    //   }
    // },
    // async fetchJacketsDetail(custom_id) {
    //   try {
    //     const response = await axios.get(`https://ecommerce-backend-django.onrender.com/products/jackets/${custom_id}`)
    //     this.jacketsDetail = response.data
    //   } catch (error) {
    //     console.error('Error fetching jackets:', error)
    //   }
    // },
    // async fetchPantsDetail(custom_id) {
    //   try {
    //     const response = await axios.get(`https://ecommerce-backend-django.onrender.com/products/pants/${custom_id}`)
    //     this.pantsDetail = response.data
    //   } catch (error) {
    //     console.error('Error fetching pants:', error)
    //   }
    // },
    async fetchProductDetail(type, custom_id) {
      try {
        const response = await axios.get(`https://ecommerce-backend-django.onrender.com/products/${type}/${custom_id}`)
        this.productDetail = response.data
      } catch (error) {
        console.error(`Error fetching ${type}:`, error)
      }
    },
  },
})
