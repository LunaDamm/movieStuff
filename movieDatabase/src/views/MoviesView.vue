<template>
    <section>

        <div class="heroSection">
            <div class="heroContainerText pl-10 pt-45">
                <h1 class="text-4xl text-amber-50 font-bold">{{ movies[2].title }}</h1>
                <p class="text-gray-300">{{ movies[2].genre }}</p>
                <button class="bg-blue-400 rounded-full text-gray-100 px-4 py-2">Click me why not</button>
            </div>
        </div>







        <div class="movieCardsRow flex flex-wrap justify-center relative gap-4 z-10 !-mt-20">
<!--             movie card repeat -->
            <div @mouseenter="toggleMovieData(index)" @mouseleave="toggleMovieData(index)" class="movieCard relative w-1/4 h-120 flex flex-col justify-end text-white" v-for="(movie, index) in filteredMovies" :key="movie">
                <div class= "bg-gradient-to-b to-gray-900 p-5">
                    <h2 class="text-2xl !font-bold">{{ movie.title }}</h2>
                    <img class="absolute inset-0 -z-1 bg-cover bg-center w-full h-full" :src="movie.movieCover" alt=""> 
                    <div class="fade-effect" v-show="isMovieDataVisible[index]">
                        <p>{{ movie.duration }}</p>
                        <p>{{ movie.genre }}</p>
                        <p>Rating: {{ movie.rating }}</p>
                    </div>

                </div>
            </div>
            <!-- movie card end repeat -->
        </div>
        <div class="genre-filter p-4">
            <label for="genre" class="text-white">Filter by genre</label>
            <select id="genre" class="ml-2 p-2 rounded" v-model="selectedGenre">
                <option value="">All</option>
                <option value="Animation">Animation</option>
                <option value="Horror">Horror</option>
            </select>
        </div>

        <div class="search-filter p-4">
            <label for="search" class="text-white">Search by title:</label>
            <input type="text" id="search" class="text-white ml-2 p-2 rounded" 
            placeholder="Search by title"
            v-model="searchQuery"
            />
        </div>

    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// destructuring the useMovieDatabase function
import { useMovieDatabase } from '../modules/useMovieDatabase.js'

const { movies } = useMovieDatabase()

const selectedGenre = ref('')
const searchQuery = ref('')

/* const filteredMovies = computed(() => {
    return selectedGenre.value 
    ? movies.value.filter((movie) => movie.genre === selectedGenre.value)
    : movies.value
}) */

const filteredMovies = computed(() => {
    let result = selectedGenre.value
    ? movies.value.filter((movie) => movie.genre === selectedGenre.value)
    : movies.value

    if(searchQuery.value) {
        result = result.filter((movie) => 
            movie.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    }
    
    return result
})

let isMovieDataVisible = ref([])

const toggleMovieData = (index) => {
    isMovieDataVisible.value[index] = !isMovieDataVisible.value[index]
    console.log("index", index)
}


</script>

<style>

.heroSection {
    width: 100%;
    height: 500px;  
    background-image: url('https://assets-prd.ignimgs.com/2024/06/24/lion-king-30th-blogroll-1719241106433.jpg');
    background-size: cover;
    background-repeat: no-repeat;
} 
</style>