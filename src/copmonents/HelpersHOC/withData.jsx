import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner/Spinner'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

const withData = (View, getAllData) => {
    return (props) => {

        const [itemList, setItemList] = useState(null)
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(false)

        useEffect(() => {
            getAllData()
                .then((data) => {
                    setItemList(data)
                    setLoading(false)
                })
                .catch(() => {
                    setLoading(false)
                    setError(true)
                })
        }, [])

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <View {...props} itemList={itemList} />
    }
}

export default withData