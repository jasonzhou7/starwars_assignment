// import axios from 'axios';
// import { FILM_URL } from './Constants';

// export const getFilms = () => {
//         axios.get(
//     FILM_URL        
//     ).then((response) => {
//         console.log(response.data);
//         return response.data;
//     })
// };

import axios from 'axios';
import { BASE_URL } from './Constants';

let characters = []

const apiClient = axios.create({
    baseURL: BASE_URL
})



export default {
    getFilms() {
        return apiClient.get('films')
    },
    getFilm(id) {
        return apiClient.get('films/' + id)
    },
    getCharacterNames(string) {
        console.log('we got to getCharacterNames')
        emptyString = ''
        axios
        .get(string)
        .then(response => emptyString = response)
        return emptyString
    },
    getCharacters(){
        console.log('getCharacters')
        return apiClient
        .get('people')
        .then(response => {
            characters = response.data;
            console.log('inside api');
            localStorage.setItem('characters', characters)
            console.log('stored')
            console.log(localStorage.getItem('characters'))
            console.log('after storage')
            return characters;
        })
        .catch(err => {
            return err;
        })
    }
}