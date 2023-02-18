import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import { green, common } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Stats from './Stats';

import { v4 as uuid } from "uuid";

export default function MediaCard({ data, weaknesses ,img }) {
  const chipInfo = {name: ['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy','unknown','shadow'],
      bgColor: ['#A4ACAF','#D56723','#3DC7EF','#B97FC9','#AB9842','#A38C21','#729F3F','#7B62A3','#9EB7B8','#FD7D24','#4592C4','#9BCC50','#EED535','#F366B9','#51C4E7','#F16E57','#707070','#FDB9E9','#263238','#7B62A3'],
      fgColor: ['#263238','#263238','#F2F2F2','#F2F2F2','#263238','#F2F2F2','#F2F2F2','#F2F2F2','#263238','#F2F2F2','#F2F2F2','#263238','#263238','#F2F2F2','#263238','#263238','#F2F2F2','#263238','#F2F2F2','#F2F2F2']
  };
  function ChipGenerator({types}) {
    const myTypes = types.map(item =>  
      <Chip key={uuid()} sx={{ bgcolor: chipInfo.bgColor[chipInfo.name.indexOf(item.type.name)], color: chipInfo.fgColor[chipInfo.name.indexOf(item.type.name)]}} label={item.type.name} size="small"/>
      );
    return (
      <>{myTypes}</>);
  }

  function WeaknessesDrawer({weaknesses}){
    const data = weaknesses.map((item) => (
      <Chip key={uuid()} sx={{ bgcolor: chipInfo.bgColor[chipInfo.name.indexOf(item)], color: chipInfo.fgColor[chipInfo.name.indexOf(item)]}} label={item}/>
    ));
    return(
      <>{data}</>);
  }

  return (
    <Card sx={{ maxWidth: 500, minWidth: 324, bgcolor: green[100], border: 4, borderColor: green[700], borderRadius: 2}}>
      <CardHeader
        sx={{ bgcolor: green[700]}}
        avatar={
          <Avatar sx={{ bgcolor: green[100], border: 2, borderColor: common['white'] }} alt="pokemon-small" src={data.sprites.front_default}/>
        }
        title={
          <Typography gutterBottom variant="h5" component="div">{data.name}</Typography>
          }
        subheader={
          <Stack direction="row" spacing={1}>
            <ChipGenerator types={data.types}/>
          </Stack>
        }
      />
      <CardContent sx={{border: 2, borderColor: green[500], borderRadius: 2}}>
        <CardMedia sx={{ width: 192, height:192}} image={img} title="pokemon"/>
      </CardContent>
      <CardContent>
      <Typography gutterBottom variant="h6" component="div">Info</Typography>
        <Typography variant="body1" color="text.secondary">
          While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">Weight:</Typography>
        <Typography variant="body1" color="text.secondary">{data.weight / 10} Kg</Typography>
        <Typography gutterBottom variant="h6" component="div">Height:</Typography>
        <Typography variant="body1" color="text.secondary">{data.height / 10} m</Typography>
      </CardContent>
      <CardContent>
        <Stats pokeData={data}/>
      </CardContent>
      <CardContent>
        <Stack direction="row" spacing={1}>
          <WeaknessesDrawer weaknesses={weaknesses}/>
        </Stack>
      </CardContent>
    </Card>
  );
}
