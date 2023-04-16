
import React, { useEffect, useState} from 'react'
import {Route} from 'react-router-dom';
function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/Alpint.json', {
            headers: {
                'Content-type': 'Appliction/json',
                Accept: 'Appliction/Json'
            }
        })

            .then((response) => response.json())
            .then((data) =>  setData(data))
    }, [])

  return (
    <div>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.category} </h2>
                 <ul>
            {item.info.map((infoItem) => (
                <li key={infoItem.id}>
                    {infoItem.type}
                    {infoItem.name && (
                        <ul>
                            {infoItem.name.map((nameItem) => (
                                <li key={nameItem.id}>{nameItem.title}</li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
          </ul>
         </div>
         ))}
         <img src="/src/images/Snowboard (11).jpg" alt="" width="1000px" height="1000px"/>

    </div>
  )
}

export default Home
