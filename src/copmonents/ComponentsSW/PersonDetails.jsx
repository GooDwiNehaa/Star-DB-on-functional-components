import React, { useContext } from "react"
import ItemDetails from "../ItemDetails/ItemDetails"
import Record from "../Record/Record"
import { Context } from "../SwapiServiceContext/SwapiServiceContext"

const PersonDetails = ({ itemId }) => {
	const swapi = useContext(Context)

	const { getPerson, getPersonImage } = swapi

	return (
		<ItemDetails
			itemId={itemId}
			getData={getPerson}
			getImageUrl={getPersonImage}
		>
			<Record field="gender" label="Gender" />
			<Record field="eyeColor" label="Eye Color" />
		</ItemDetails>
	)
}

export default PersonDetails
