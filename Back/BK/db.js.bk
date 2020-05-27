export let movies = [
    {
        id : 0,
        name : "starwars-1",
        score : 1
    },
    {
        id: 1,
        name : "Avengers",
        score : 8
    },
    {
        id: 2,
        name : "The GodFather",
        score : 9  
    },
    {
        id: 3,
        name : "Logan",
        score : 7
    },
]


export const getMovies = () => movies; //interface

export const getById = (id) => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanMovies.length){
        movies = cleanMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id : movies.length,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}