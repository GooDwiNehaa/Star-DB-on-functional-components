import React from 'react'
import { StarshipList } from '../ComponentsSW/ItemLists'
import {withRouter} from 'react-router-dom'

const StarshipsPage = ({history}) => {

    return (
        <StarshipList onItemSelected={(itemId) => history.push(itemId)} />
    )
}

export default withRouter(StarshipsPage)