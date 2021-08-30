import React from "react"
import withData from "../HelpersHOC/withData"
import ItemList from "../ItemList/ItemList"
import SwapiService from "../../services/SwapiService"

const swapi = new SwapiService()

const { getAllPeople, getAllPlanets, getAllStarships } = swapi

const withChildFunction = (Wrapped, fn, label) => {
	return (props) => {
		return <Wrapped {...props} fn={fn} label={label} />
	}
}

const renderName = ({ name }) => {
	return <span>{name}</span>
}

const renderModelAndName = ({ model, name }) => {
	return (
		<span>
			{name} ({model})
		</span>
	)
}

const PersonList = withData(withChildFunction(ItemList, renderName, "person"), getAllPeople)
const PlanetList = withData(withChildFunction(ItemList, renderName, "planet"), getAllPlanets)
const StarshipList = withData(
	withChildFunction(ItemList, renderModelAndName, "starship"),
	getAllStarships
)

export { PersonList, PlanetList, StarshipList }
