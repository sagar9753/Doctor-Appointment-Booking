import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

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

                if (!res.ok)
                    throw new Error(result.msg)

                setData(result.data)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                toast.error(err.message)
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