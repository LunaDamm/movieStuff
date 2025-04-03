<template>
    <div class="p-8">
        <h1> {{ movie.title }}</h1>
        <img :src="movie.movieCover" alt="">
        <p> {{ movie.description }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMovieDatabase } from '@/modules/useMovieDatabase';
import { useRoute } from 'vue-router';

const { movies } = useMovieDatabase();
const route = useRoute();
const movie = computed(() => {
    return movies.value.find((m) => m.id === parseInt(route.params.id));
})

</script>

<style>

</style>