import React, { useEffect, useState, useCallback } from "react"
import Spinner from "../Spinner/Spinner"
import "./ItemDetails.css"

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {
	const [item, setItem] = useState(null)
	const [image, setImage] = useState(null)
	const [loading, setLoading] = useState(true)

	const updateItem = useCallback(() => {
		if (!itemId) {
			return
		}

		getData(itemId).then((i) => {
			setItem(i)
			setImage(getImageUrl(i))
		})
	}, [itemId, getData, getImageUrl])

	useEffect(() => {
		updateItem()
		setLoading(false)
	}, [itemId, updateItem])

	if (loading | !item) {
		return <Spinner />
	}

	const { name } = item

	return (
		<div className="person-details card">
			<img className="person-image" src={image} alt="Icon Error!" />

			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					{React.Children.map(children, (child) => {
						return React.cloneElement(child, { item })
					})}
				</ul>
			</div>
		</div>
	)
}

export default ItemDetails
