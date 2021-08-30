import React, { useState } from "react"
import Header from "../Header/Header"
import RandomPlanet from "../RandomPlanet/RandomPlanet"
import SwapiService from "../../services/SwapiService"
import "./App.css"
import { Context } from "../SwapiServiceContext/SwapiServiceContext"
import PeoplePage from "../Pages/PeoplePage"
import PlanetsPage from "../Pages/PlanetsPage"
import StarshipsPage from "../Pages/StarshipsPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PersonDetails from "../ComponentsSW/PersonDetails"
import PlanetDetails from "../ComponentsSW/PlanetDetails"
import StarshipDetails from "../ComponentsSW/StarshipDetails"
import LoginPage from "../Pages/LoginPage"
import SecretPage from "../Pages/SecretPage"

const App = () => {
	const swapi = new SwapiService()

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const onLogin = () => {
		setIsLoggedIn(true)
	}

	return (
		<Context.Provider value={swapi}>
			<Router>
				<div className="stardb-app">
					<Header />
					<RandomPlanet />

					<Switch>
						<Route exact path="/" render={() => <h2>Welcome to StarDB!</h2>} />

						<Route exact path="/people" component={PeoplePage} />
						<Route exact path="/planets" component={PlanetsPage} />
						<Route exact path="/starships" component={StarshipsPage} />

						<Route
							exact
							path="/people/:id"
							render={({ match }) => <PersonDetails itemId={match.params.id} />}
						/>
						<Route
							exact
							path="/planets/:id"
							render={({ match }) => <PlanetDetails itemId={match.params.id} />}
						/>
						<Route
							exact
							path="/starships/:id"
							render={({ match }) => <StarshipDetails itemId={match.params.id} />}
						/>

						<Route
							exact
							path="/login"
							render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin} />}
						/>
						<Route exact path="/secret" render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
						<Route render={() => <h2>Page not found!!!</h2>} />
					</Switch>
				</div>
			</Router>
		</Context.Provider>
	)
}

export default App
