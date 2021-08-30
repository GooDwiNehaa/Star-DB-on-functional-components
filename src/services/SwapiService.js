export default class SwapiService {

    _apiBase = 'https://swapi.dev/api'
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const result = await fetch(url)

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, received ${result.status}`)
        }

        const body = await result.json()
        return body
    }

    getAllPeople = async () => {
        const res = await this.getResource(`${this._apiBase}/people/`)
        return res.results.map(this._transformPerson)
    }

    getPerson = async (id) => {
        const person = await this.getResource(`${this._apiBase}/people/${id}/`)
        return this._transformPerson(person)
    }
    getAllPlanets = async () => {
        const res = await this.getResource(`${this._apiBase}/planets/`)
        return res.results.map(this._transformPlanet)
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`${this._apiBase}/planets/${id}/`)
        return this._transformPlanet(planet)
    }
    getAllStarships = async () => {
        const res = await this.getResource(`${this._apiBase}/starships/`)
        return res.results.map(this._transformStarship)
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`${this._apiBase}/starships/${id}/`)
        return this._transformStarship(starship)
    }

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }

    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

    _transformPlanet = (planet) => {
        return{
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
      }
    
      _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
      }
}