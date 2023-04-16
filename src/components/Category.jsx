import React, { useEffect, useState} from 'react'
import {NavLink, useParams} from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem, { imageListItemClasses }  from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';



export default function Category() {


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
    const {id} = useParams();

  return (
         <ImageList sx={{ width: 900, height: 600 }}>
      <ImageListItem key="Subheader" cols={2} >
      {
      data
      .filter((item) => item.id === id)
      .map((item) => (

        <ListSubheader component="div" key={item.id}><h2>Category</h2></ListSubheader>
        ))}
      </ImageListItem>
      {data.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.category}
            loading="lazy"
          />
          <NavLink to= {`${item.category}`}>
          <ImageListItemBar
            title={item.category}
            subtitle={item.category}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          /></NavLink>
        </ImageListItem>
      ))}
    </ImageList>


  )
};
