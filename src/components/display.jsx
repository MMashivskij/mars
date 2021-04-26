import React from 'react';
import { imageAlt } from '../const/constans';
import { useStyles } from './styles';

const Display = ({ photos, pageCount }) => {

  const classes = useStyles();
  console.log(photos);

  return (
    <div className={classes.display}>
      {
          photos.map(({ img_src, id }) => {
            return (
              <img src={img_src} key={id} alt={imageAlt} className={classes.image}/>
            )
          })
      }
    </div>
  )
}

export default Display;