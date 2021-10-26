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
import { BASE_URL, PEOPLE_URL } from './Constants';

const apiClient = axios.create({
    baseURL: BASE_URL
})

let startURL = PEOPLE_URL;

export default {
    getFilms() {
        return apiClient
        .get('films')
        .then(response => {
            return response.data
        })
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
    async getCharacters(){
        let link = PEOPLE_URL;
        let characters = [];

        // const chars = await axios.get(link);
        // console.log(chars.data);
        
        while (link) {
            const chars = await axios.get(link);
            link = chars.data.next
            characters = characters.concat(chars.data.results)
            
        }
        console.log(characters)
        localStorage.setItem('characters', JSON.stringify(characters))
    }
}