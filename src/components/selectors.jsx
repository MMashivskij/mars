import React, { useState } from 'react';
import { FormControl, MenuItem, InputLabel, TextField, Select, Button } from '@material-ui/core';

import { rovers, cameras, selectors, button } from '../const/constans';

import { useStyles } from './styles';

const Selectors = ({ getPhoto }) => {

  const classes = useStyles();
  const [rover, setRover] = useState('');
  const [camera, setCamera] = useState('');
  const [sol, setSol] = useState('');

  const handleChangeRover = (event) => {
    setRover(event.target.value);
  };
  const handleChangeCamera = (event) => {
    setCamera(event.target.value);
  };
  const handleChangeSol = (event) => {
    setSol(event.target.value);
  };

  const setPhoto = () => getPhoto(rover, camera, sol);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="rover">{selectors.rover}</InputLabel>
        <Select
          labelId="rover"
          id="chose_a_rover"
          value={rover}
          onChange={handleChangeRover}
        >
          {rovers.map(item => {
            return (
              <MenuItem value={item} key={item}>{item}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="camera">{selectors.camera}</InputLabel>
        <Select
          labelId="camera"
          id="chose_a_camera"
          value={camera}
          onChange={handleChangeCamera}
        >
          {cameras.map(item => {
            return (
              <MenuItem value={item} key={item}>{item}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField id="standard-basic" label="Sol" onChange={handleChangeSol} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button variant="outlined" onClick={setPhoto}>{button}</Button>
      </FormControl>
    </div>
  )
}

export default Selectors