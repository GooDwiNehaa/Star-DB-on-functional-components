import React, { useContext } from "react"
import ItemDetails from "../ItemDetails/ItemDetails"
import Record from "../Record/Record"
import { Context } from "../SwapiServiceContext/SwapiServiceContext"

const StarshipDetails = ({ itemId }) => {
	const swapi = useContext(Context)

	const { getStarship, getStarshipImage } = swapi

	return (
		<ItemDetails 
			itemId={itemId} 
			getData={getStarship}
		    getImageUrl={getStarshipImage}
		 >
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
			<Record field="costInCredits" label="Cost" />
		</ItemDetails>
	)
}

export default StarshipDetails
