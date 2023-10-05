<script setup>
import AdminNav from "../../components/AdminNav.vue";
</script>

<template>
  <AdminNav></AdminNav>
  <div class="pt-32 container mx-auto lg:min-h-screen">
    <RouterView></RouterView>
  </div>
</template>
