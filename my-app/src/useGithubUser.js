//import { useState } from "react"

//export function useGithubUser(){
//    const[data, setData] = useState(null)
 //   const[loading, setLoading] = useState(false)
//    const[error, setError] = useState(null)
 
 
// async function fetchGithubUser(username){
 //    setLoading(true)
 //    setError(null)  

 //    try{
 //        const response = await fetch(`https://api.github.com/users/${username}`)
 //        const json = await response.json()
 //        if (response.status !== 200) {
 //           setError(new Error())
 //         }

 //       setData(json)
 //    }catch(error){
 //        setError(error)
//         setData(null)
 //    }finally {
 //        setLoading(false)
 //    }
 //   }  

 //   return{ data, loading, error, onFetchUser: fetchGithubUser };
//}

import useSWR from 'swr';


export function useGithubUser(username){
   const {data, error, mutate}= useSWR( username != null ? `https://api.github.com/users/${username}` : null)

   function handleRefreshUser(){
       mutate()
   }
    
    return {
       data, 
       error,
       loading: !data && !error,
       onRefresh: handleRefreshUser,
    }
}