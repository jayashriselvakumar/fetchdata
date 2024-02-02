import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
const InitialState = {
    loading: true,
    error: '',
    post: {}

}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''

            }
        case 'FETCH_FAILURE':
            return {
                loading: false,
                post: {},
                error: 'something went wrong'
            }
            default:
                return state
    }
}


const DataFetchingUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, InitialState)
    useEffect(() => {
        axios.get('http://universities.hipolabs.com/search?country=United+States')
            .then(response => {
                dispatch({type:'FETCH_SUCCESS',payload:response.data})
            })
            .catch(error => {
                dispatch({type:'FETCH_FAILURE'})
            })
    }, [])
    return (
        <div>
            <ul>
                {state.loading ? 'loading' : state.post.map(data => <li>{data.name}</li>)}
            </ul>
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingUseReducer