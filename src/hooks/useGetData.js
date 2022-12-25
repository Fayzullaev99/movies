import { useEffect, useState } from 'react'
import axios from "axios";

const path = process.env.REACT_APP_API_URL
const key = process.env.REACT_APP_API_KEY

const useGetData = (url) => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        const getData = async()=>{
            setLoading(true)
            const {data} = await axios.get(`${path}${url}`,{
                params:{
                    api_key:key,
                    per_page: 10
                }
            })
            setData(data.results ? data.results : data)
            setLoading(false)
        }
        getData()
    },[url])
  return [data,loading]
}

export default useGetData