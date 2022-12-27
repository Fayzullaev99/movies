import { useEffect, useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';

const path = process.env.REACT_APP_API_URL
const key = process.env.REACT_APP_API_KEY

const useGetData = (url) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        const getData = async()=>{
            try {
                setLoading(true)
                const {data} = await axios.get(`${path}${url}`,{
                    params:{
                        api_key:key
                    }
                })
                setData(data.results ? data.results : data)
                setLoading(false)
            } catch (error) {
                setError(true)
            }
        }
        getData()
    },[url])
  return [data,loading,error]
}

export default useGetData