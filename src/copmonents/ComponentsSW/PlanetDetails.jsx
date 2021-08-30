import React, { useContext } from "react"
import ItemDetails from "../ItemDetails/ItemDetails"
import Record from "../Record/Record"
import { Context } from "../SwapiServiceContext/SwapiServiceContext"

const PlanetDetails = ({ itemId }) => {
	const swapi = useContext(Context)

	const { getPlanet, getPlanetImage } = swapi

	return (
		<ItemDetails
			itemId={itemId}
			getData={getPlanet}
			getImageUrl={getPlanetImage}
		   >
			
			<Record field="population" label="Population" />
			<Record field="rotationPeriod" label="Rotation Period" />
			<Record field="diameter" label="Diameter" />
		</ItemDetails>
	)
}

export default PlanetDetails
