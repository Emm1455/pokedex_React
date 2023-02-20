import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import { green, common } from '@mui/material/colors';
// import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Stats from './CardComponents/Stats';
import Types from './CardComponents/TypeChips';
import Weaknesses from './CardComponents/WeaknessesChips';
import Abilities from './CardComponents/AbilitiesChips';

// import { v4 as uuid } from "uuid";

export default function MediaCard({ data, weaknesses ,img }) {
  const chipInfo = {name: ['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy','unknown','shadow'],
      bgColor: ['#A4ACAF','#D56723','#3DC7EF','#B97FC9','#AB9842','#A38C21','#729F3F','#7B62A3','#9EB7B8','#FD7D24','#4592C4','#9BCC50','#EED535','#F366B9','#51C4E7','#F16E57','#707070','#FDB9E9','#263238','#7B62A3'],
      fgColor: ['#263238','#263238','#263238','#F2F2F2','#263238','#F2F2F2','#F2F2F2','#F2F2F2','#263238','#F2F2F2','#F2F2F2','#263238','#263238','#F2F2F2','#263238','#263238','#F2F2F2','#263238','#F2F2F2','#F2F2F2']
  };

  const myTypes = data.types.map(item => item.type.name);

  const ColorConverter = function(){
    const HexColor = chipInfo.bgColor[chipInfo.name.indexOf(myTypes[0])];
    let result = [];
    for (let i = 0; i < 3; i++) {
      result.push(parseInt(HexColor.slice(2*i+1,2*i+3),16));      
    }
    return result;
  }
  
  const ColorsGenerator = function(factor){
    const rConst = 50;
    const gConst = 50;
    const bConst = 50;
    const color = ColorConverter();
    return [color[0]+factor*rConst,color[1]+factor*gConst,color[2]+factor*bConst];
  }

  // const myColors = ColorsGenerator([155,204,80]);
  const BaseColor = ColorsGenerator(0);
  const StrongColor = ColorsGenerator(-1);
  const SoftColor = ColorsGenerator(1);
  
  // console.log(SoftColor);
  return (
    <Card sx={{ width: 400, border: 4, borderColor: "#7B7B7B", borderRadius: 2}}>
      <CardHeader
        sx={{ bgcolor: `rgb(${StrongColor})`}}
        avatar={
          <Avatar sx={{ bgcolor: `rgba(${SoftColor},0.7)`, border: 2, borderColor: common['white'] }} alt="pokemon-small" src={data.sprites.front_default}/>
        }
        title={
          <Typography  variant="h5" component="div">{data.name}</Typography>
          }
        subheader={
          <Stack direction="row" spacing={1}>
            <Types data={data.types} info={chipInfo}/>
          </Stack>
        }
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' , margin:0.4 ,borderRadius:2 ,background: `linear-gradient(140deg, rgba(${BaseColor},1) 40%, rgba(220,220,220,1) 50%, rgba(${BaseColor},1) 60%)` }}>
        <CardMedia sx={{ width: 200}} height="200" component="img"  image={img} alt="pokemon"/>
      </Box>
      <CardContent sx={{bgcolor:`rgba(${SoftColor},0.2)`}}>
        <Typography gutterBottom variant="p" component="div" fontWeight="bold">Info:</Typography>
        <Typography paragraph>
          {/* While it is young, it uses the nutrients that <br/> are stored in the seed on its back in order to grow. */}
        </Typography>
        <Typography gutterBottom variant="p" component="div"  fontWeight="bold">Weaknesses:</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', pb:1}}>
          <Stack direction="row" spacing={2}>
            <Weaknesses data={weaknesses} info={chipInfo}/>
          </Stack>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap:2, pb:1}}>
          <Typography variant="body2"> <b>Weight: </b>{data.weight / 10} Kg</Typography>
          <Typography variant="body2"><b>Height: </b>{data.height / 10} m</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' , alignItems: 'center', gap:2, pb:1}}>
          <Typography variant="body2"> <b>Abilities: </b></Typography>
          <Abilities data={data.abilities} borderColor={`rgb(${StrongColor})`}/>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <Stats pokeData={data} color={StrongColor}/>
        </Box>
        
      </CardContent>
    </Card>
  );
}
