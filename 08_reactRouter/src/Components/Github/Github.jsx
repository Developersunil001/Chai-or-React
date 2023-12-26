// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// function Github() {
//      const [data, setdata] = useState({})
//      useEffect(() => {
//           fetch('https://api.github.com/users/Developersunil001')
//                .then(res => res.json())
//                .then(data => {
//                     setdata(data)
//                     console.log(data)
//                })
//      }, [])
//      return (
//           <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Followers:{data.followers}
//           <img src="{data.avatar_url}" alt="Git picture" width={300} height={300}/>
//           </div>
//      )
// }

// export default Github

import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
     const data = useLoaderData();
     // const [data, setData] = useState({});

     // useEffect(() => {
     //      fetch('https://api.github.com/users/Developersunil001')
     //           .then((res) => res.json())
     //           .then((data) => {
     //                setData(data);
     //                console.log(data);
     //           });
     // }, []);

     return (
          <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
               Followers: {data.followers}
               <img src={data.avatar_url} alt='Git picture' width={300} height={300} />
          </div>
     );
}

export default Github

// yaha pr github ka data fetch ho rha hai 
export const githubInfoLoader = async () => {
     const response = await fetch('https://api.github.com/users/Developersunil001')
     return response.json();
}

