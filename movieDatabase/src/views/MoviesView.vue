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
            <div @mouseenter="toggleMovieData(index)" @mouseleave="toggleMovieData(index)" class="movieCard relative w-1/4 h-120 flex flex-col justify-end text-white" v-for="(movie, index) in movies" :key="movie">
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

    </section>
</template>

<script setup>
import { ref } from 'vue'

// destructuring the useMovieDatabase function
import { useMovieDatabase } from '../modules/useMovieDatabase.js'

const { movies } = useMovieDatabase()

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

.fade-effect {

}

</style>