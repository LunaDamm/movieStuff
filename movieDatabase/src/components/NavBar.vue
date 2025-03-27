<template>
            <div class="search-filter p-4">
            <input type="text" id="search" class="text-white ml-2 p-2 rounded-3xl bg-blue-400/20 w-full" 
            placeholder="Search by title"
            v-model="searchQuery"
            />
        </div>
    <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/movies">Movies</RouterLink>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>

</style>