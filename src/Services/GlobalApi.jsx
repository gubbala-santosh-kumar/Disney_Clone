import React from 'react'
import axios from 'axios'

const movieBaseUrl ='https://api.themoviedb.org/3';
const api_key = 'd85b75536e5dac514bff1d7d01e3a75f'

const movieByGenereBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key='+api_key;

// https://api.themoviedb.org/3/trending/all/day?api_key=d85b75536e5dac514bff1d7d01e3a75f

const getTrendingVideos = axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);

const getMoviesByGenereId = (id)=> axios.get(movieByGenereBaseURL+"&with_genres="+id);

export default{
    getTrendingVideos,
    getMoviesByGenereId
}