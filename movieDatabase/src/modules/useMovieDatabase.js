import { ref } from 'vue'

export const useMovieDatabase = () => {
    const movies = ref([
        {
            title: 'Shrek',
            description: 'A movie about a green ogre',
            movieCover: 'https://picsum.photos/400/600',
            duration: '1h 30m',
            genre: 'Animation',
            publisher: 'DreamWorks',
            ageRecommandation: '6+',
            director: 'Andrew Adamson',
            releaseDate: '2001',
            rating: 4.5,
            actors: ['Mike Myers', 'Eddie Murphy', 'Cameron Diaz']
        },
        {
            title: 'Get Out',
            description: 'A young African-American visits his white girlfriend\'s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
            movieCover: 'https://picsum.photos/400/600',
            duration: '1h 44m',
            genre: 'Horror',
            publisher: 'Universal Pictures',
            ageRecommandation: '15+',
            director: 'Jordan Peele',
            releaseDate: '2017',
            rating: 4.7,
            actors: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford']
        },
        {
            title: 'The Lion King',
            description: 'A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.',
            movieCover: 'https://picsum.photos/400/600',
            duration: '1h 28m',
            genre: 'Animation',
            publisher: 'Walt Disney Pictures',
            ageRecommandation: '6+',
            director: 'Roger Allers, Rob Minkoff',
            releaseDate: '1994',
            rating: 4.8,
            actors: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones']
        }
    ])

    return {
        movies
    }
}