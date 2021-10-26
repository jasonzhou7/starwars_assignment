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
import { BASE_URL, PEOPLE_URL, PLANET_URL, SPECIES_URL, VEHICLE_URL, STARSHIP_URL } from './Constants';

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
    // getCharacterNames(string) {
    //     console.log('we got to getCharacterNames')
    //     emptyString = ''
    //     axios
    //     .get(string)
    //     .then(response => emptyString = response)
    //     return emptyString
    // },
    async getCharacters() {
        let link = PEOPLE_URL;
        let characters = [];

        while (link) {
            const chars = await axios.get(link);
            link = chars.data.next
            characters = characters.concat(chars.data.results)
            
        }
        console.log(characters)
        localStorage.setItem('characters', JSON.stringify(characters))
    },
    async getPlanets() {
        let link = PLANET_URL;
        let planets = [];

        while (link) {
            const chars = await axios.get(link);
            link = chars.data.next
            planets = planets.concat(chars.data.results)
            
        }
        console.log(planets)
        localStorage.setItem('planets', JSON.stringify(planets))
    },
    async getSpecies() {
        let link = SPECIES_URL;
        let species = [];

        while (link) {
            const chars = await axios.get(link);
            link = chars.data.next
            species = species.concat(chars.data.results)
            
        }
        console.log(species)
        localStorage.setItem('species', JSON.stringify(species))
    },
    async getVehicles() {
        let link = VEHICLE_URL;
        let vehicles = [];

        while (link) {
            const chars = await axios.get(link);
            link = chars.data.next
            vehicles = vehicles.concat(chars.data.results)
            
        }
        console.log(vehicles)
        localStorage.setItem('vehicles', JSON.stringify(vehicles))
    },
    async getStarships() {
        let link = STARSHIP_URL;
        let starships = [];

        while (link) {
            const chars = await axios.get(link);
            link = chars.data.next
            starships = starships.concat(chars.data.results)
            
        }
        console.log(starships)
        localStorage.setItem('starships', JSON.stringify(starships))
    }
}