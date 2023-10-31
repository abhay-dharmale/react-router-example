import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/abhay-dharmale')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='flex justify-around flex-row-reverse text-center m-14  bg-gray-600 text-white p-4 text-2xl rounded-lg'>
        <h1 className='m-8'>Github followers: {data.followers}</h1>
    <img className='rounded-full' src={data.avatar_url} alt="Git picture" width={100} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/abhay-dharmale')
    return response.json()
}