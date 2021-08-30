import React from "react"
import ErrorEndicator from "../ErrorIndicator/ErrorIndicator"
import "./ItemList.css"

const ItemList = (props) => {
	const { itemList, onItemSelected, fn, label } = props

	if (!itemList) {
		return <ErrorEndicator />
	}

	const renderItems = () => {
		return itemList.map((item) => {
			const label = fn(item)

			return (
				<li className="list-group-item" key={item.id} onClick={() => onItemSelected(item.id)}>
					{label}
				</li>
			)
		})
	}

	const items = renderItems()

	return (
		<div>
			<span>Select a {label} from a list:</span>
			<div className="list-margin">
				<ul className="item-list list-group">{items}</ul>
			</div>
		</div>
	)
}

export default ItemList
