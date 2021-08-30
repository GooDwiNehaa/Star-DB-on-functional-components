import React from 'react'
import { PlanetList } from '../ComponentsSW/ItemLists'
import {withRouter} from 'react-router-dom'

const PlanetsPage = ({history}) => {

    return (
        <PlanetList onItemSelected={(itemId) => history.push(itemId)} />
    )
}

export default withRouter(PlanetsPage)