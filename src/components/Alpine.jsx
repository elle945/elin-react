import { useEffect, useState} from 'react'
import {Link, useParams, useLocation } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function alpineDetail() {


    const location = useLocation();
    const urlId = location.pathname.split('/')[2];
    console.log( urlId)
    const [data, setData] = useState([])
    useEffect(() => {

        fetch('/Alpint.json', {
            headers: {
                'Content-type': 'Appliction/json',
                Accept: 'Appliction/Json'
            }
        })

            .then((response) => response.json())
            .then((data) =>  {
                setData(data.filter((item) => item.category === urlId));
            });
    }, [urlId]);
    console.log(urlId)


  return (
    <div>

{data.map((item) => (
    <div key={item.id}>
    <h2>  {item.category} </h2>
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

    </div>


  )
};
