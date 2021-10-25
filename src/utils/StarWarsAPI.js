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
    }
}