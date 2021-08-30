import React from 'react'
import { PersonList } from '../ComponentsSW/ItemLists'
import {withRouter} from 'react-router-dom'

const PeoplePage = ({history}) => {

    return (
        <PersonList onItemSelected={(itemId)=>history.push(itemId)}/>
    )
}

export default withRouter(PeoplePage)