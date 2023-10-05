<script setup>
import MainNav from "../components/MainNav.vue";
import { useProductsStore } from "../stores/products";
import ProductCard from "../components/ProductCard.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

const products = useProductsStore();
</script>
<template>
  <div>
    <MainNav />
    <main class="pt-10 lg:flex lg:h-screen lg:overflow-y-hidden">
      <div class="lg:w-2/3 lg:screen lg:overflow-y-scroll py-24 px-10">
        <p v-if="products.noResults" class="text-center text-4xl">
          No hay Productos
        </p>

        <div
          v-else
          class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5"
        >
          <ProductCard
            v-for="product in products.filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
      <aside class="lg:w-1/3 lg:screen lg:overflow-y-scroll py-24 px-10">
        <ShoppingCart />
      </aside>
    </main>
  </div>
</template>
