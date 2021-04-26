import React, { useState } from 'react';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';

import Selectors from './selectors';
import Display from './display';

import { useStyles } from './styles';

const Container = () => {

  const classes = useStyles();

  const[photos, setPhotos] = useState([]);
  const[pageCount, setPageCount] = useState(1);
  const[selectedPage, setSelectedpage] = useState(1);

  const getPhoto = async (rover, camera, sol) => {  

    let request = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?`;

    if(camera) {
      request = request + `camera=${camera}&`
    }
      
    if(sol) {
      request = request + `sol=${sol}&`
    }
    
    await axios.get(request + `&api_key=DEMO_KEY`)
    .then((responce) => {
      setPhotos(responce.data.photos);
      setPageCount(Math.ceil(responce.data.photos.length / 25));
    })
    .catch((err) => alert('Chose "Rover" value, "Camera" value and enter "Sol"(must be integer)'));
  }

  const changePageHandler = (event, page) => {
    setSelectedpage(page);
  }

  return (
    <>
      <Selectors getPhoto={getPhoto}/>
      <Display photos={photos.filter((item, i) => (selectedPage - 1) * 25 <= i && i < selectedPage * 25)}/>
      {photos.length > 0 && <Pagination 
        count={pageCount} 
        variant="outlined" 
        shape="rounded" 
        className={classes.pagination} 
        page={selectedPage}
        onChange={changePageHandler}
      />}
    </>
  )
}

export default Container;