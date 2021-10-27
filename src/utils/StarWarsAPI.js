/**
 * SWAPI API Service
 * 
 * Handles all pulls from the SWAPI API
 */

import axios from 'axios';
import { FILM_URL, PEOPLE_URL, PLANET_URL, SPECIES_URL, VEHICLE_URL, STARSHIP_URL } from './Constants';



export default {

    /**
     * Grabs all films and stores it in localStorage
     * 
     */
    getFilms() {
        axios
            .get(FILM_URL)
            .then(response => {
                localStorage.setItem('films', JSON.stringify(response.data))
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('Error', error.message)
                }
                console.log(error.config)
            })
    },

    /**
     * Grabs all characters and stores it in localStorage
     */
    async getCharacters() {
        let link = PEOPLE_URL;
        let characters = [];

        while (link) {
            const chars = await axios.get(link)
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data)
                        console.log(error.response.status)
                        console.log(error.response.headers)
                    } else if (error.request) {
                        console.log(error.request)
                    } else {
                        console.log('Error', error.message)
                    }
                    console.log(error.config)
                })
            link = chars.data.next
            characters = characters.concat(chars.data.results)
        }
        localStorage.setItem('characters', JSON.stringify(characters))
    },

    /**
     * Grabs all planets and stores it in localStorage
     */
    async getPlanets() {
        let link = PLANET_URL;
        let planets = [];

        while (link) {
            const chars = await axios.get(link)
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data)
                        console.log(error.response.status)
                        console.log(error.response.headers)
                    } else if (error.request) {
                        console.log(error.request)
                    } else {
                        console.log('Error', error.message)
                    }
                    console.log(error.config)
                })
            link = chars.data.next
            planets = planets.concat(chars.data.results)

        }
        localStorage.setItem('planets', JSON.stringify(planets))
    },

    /**
     * Grabs all species and stores it in localStorage
     */
    async getSpecies() {
        let link = SPECIES_URL;
        let species = [];

        while (link) {
            const chars = await axios.get(link)
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data)
                        console.log(error.response.status)
                        console.log(error.response.headers)
                    } else if (error.request) {
                        console.log(error.request)
                    } else {
                        console.log('Error', error.message)
                    }
                    console.log(error.config)
                })
            link = chars.data.next
            species = species.concat(chars.data.results)

        }

        localStorage.setItem('species', JSON.stringify(species))
    },

    /**
     * Grabs all vehicles and stores it in localStorage
     */
    async getVehicles() {
        let link = VEHICLE_URL;
        let vehicles = [];

        while (link) {
            const chars = await axios.get(link)
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data)
                        console.log(error.response.status)
                        console.log(error.response.headers)
                    } else if (error.request) {
                        console.log(error.request)
                    } else {
                        console.log('Error', error.message)
                    }
                    console.log(error.config)
                })
            link = chars.data.next
            vehicles = vehicles.concat(chars.data.results)

        }
        localStorage.setItem('vehicles', JSON.stringify(vehicles))
    },

    /**
     * Grabs all starships and sotres it in localStorage
     */
    async getStarships() {
        let link = STARSHIP_URL;
        let starships = [];

        while (link) {
            const chars = await axios.get(link)
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data)
                        console.log(error.response.status)
                        console.log(error.response.headers)
                    } else if (error.request) {
                        console.log(error.request)
                    } else {
                        console.log('Error', error.message)
                    }
                    console.log(error.config)
                })
            link = chars.data.next
            starships = starships.concat(chars.data.results)

        }
        localStorage.setItem('starships', JSON.stringify(starships))
    }
}