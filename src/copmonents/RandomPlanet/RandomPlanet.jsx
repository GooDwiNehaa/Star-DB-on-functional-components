import React, { useState, useEffect, useCallback } from "react"
import SwapiService from "../../services/SwapiService"
import Spinner from "../Spinner/Spinner"
import ErrorEndicator from "../ErrorIndicator/ErrorIndicator"
import "./RandomPlanet.css"

const PlanetDetails = () => {
	const [planetDetails, setPlanetDetails] = useState({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	const onError = () => {
		setError(true)
		setLoading(false)
	}

	const updatePlanet = useCallback(() => {
		const swapi = new SwapiService()
		const planteId = Math.floor(Math.random() * 25) + 3
		swapi
			.getPlanet(planteId)
			.then((planet) => {
				setPlanetDetails(planet)
				setLoading(false)
			})
			.catch(onError)
	}, [])

	useEffect(() => {
		updatePlanet()
		setInterval(updatePlanet, 10000)
	}, [updatePlanet])

	const hasData = !(loading || error)

	const errorMessage = error ? <ErrorEndicator /> : null
	const spinner = loading ? <Spinner /> : null
	const content = hasData ? <PlanetDetailsView planetDetails={planetDetails} /> : null

	return (
		<div className="random-planet jumbotron rounded">
			{errorMessage}
			{spinner}
			{content}
		</div>
	)
}

const PlanetDetailsView = ({ planetDetails }) => {
	const { id, name, population, rotationPeriod, diameter } = planetDetails

	return (
		<>
			<img
				className="planet-image"
				src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
				alt="Loading error!"
			/>
			<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">{population}</span>
						<span>123124</span>
					</li>
					<li className="list-group-item">
						<span className="term">{rotationPeriod}</span>
						<span>43</span>
					</li>
					<li className="list-group-item">
						<span className="term">{diameter}</span>
						<span>100</span>
					</li>
				</ul>
			</div>
		</>
	)
}

export default PlanetDetails
