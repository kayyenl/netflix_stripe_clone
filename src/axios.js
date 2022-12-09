import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default instance;

//407569a235bf8827a83e5fcf8a580d9c