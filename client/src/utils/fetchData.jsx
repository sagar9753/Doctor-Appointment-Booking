import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const fetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const token = useSelector((state) => state.token);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                const result = await res.json();
                console.log("Result",result.data);

                if (!res.ok)
                    throw new Error(result.error)

                setData(result.data)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                setError(err.message);
            }
        }
        fetchData()
    }, [url]);

    return {
        data, loading, error
    }
}

export default fetchData