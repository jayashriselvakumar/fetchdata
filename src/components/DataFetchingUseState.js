import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DataFetchingUseState = () => {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get('http://universities.hipolabs.com/search?country=United+States')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('something went wrong')
            })
    }, [])
    return (
        <div>
            <ul>
            {loading ? 'loading' : post.map(data=><li>{data.name}</li>)}
            </ul>
            {error ? error : null}
          
        </div>

    )

}
export default DataFetchingUseState