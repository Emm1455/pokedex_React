import React from 'react'
import Chip from '@mui/material/Chip';
import { v4 as uuid } from "uuid";

function AbilitiesChips({data,borderColor}) {
  const result = data.map(item =>  
      <Chip key={uuid()} sx={{ borderColor: {borderColor},  fontSize:14}} variant="outlined" label={item.ability.name} size="small"/>
      );
    return (
      <>{result}</>);
}

export default AbilitiesChips