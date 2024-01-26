<template>
    <SectionRoutes></SectionRoutes>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute()

console.log(route)
</script>

<style scoped lang="scss"></style>