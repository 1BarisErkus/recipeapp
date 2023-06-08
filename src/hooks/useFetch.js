import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setError(null)
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        try {
            const { data: anyData } = await axios.get(url)
            while (anyData) {
                setData(anyData);
                setLoading(false)
                break
            }
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }
    return { data, loading, error }
}

export default useFetch