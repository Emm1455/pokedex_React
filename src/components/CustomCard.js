import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Stats from "./CardComponents/Stats";
import Types from "./CardComponents/TypeChips";
import Weaknesses from "./CardComponents/WeaknessesChips";
import Abilities from "./CardComponents/AbilitiesChips";

export default function MediaCard({ data, weaknesses, img, info, limitMaker }) {
  const chipInfo = {
    name: ["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","unknown","shadow"],
    bgColor: ["#A4ACAF","#D56723","#3DC7EF","#B97FC9","#AB9842","#A38C21","#729F3F","#7B62A3","#9EB7B8","#FD7D24","#4592C4","#9BCC50","#EED535","#F366B9","#51C4E7","#F16E57","#707070","#FDB9E9","#263238","#7B62A3"],
    fgColor: ["#263238","#263238","#263238","#F2F2F2","#263238","#F2F2F2","#F2F2F2","#F2F2F2","#263238","#F2F2F2","#F2F2F2","#263238","#263238","#F2F2F2","#263238","#263238","#F2F2F2","#263238","#F2F2F2","#F2F2F2"],
  };

  const myTypes = data.types.map((item) => item.type.name);

  const ColorConverter = function () {
    const HexColor = chipInfo.bgColor[chipInfo.name.indexOf(myTypes[0])];
    let result = [];
    for (let i = 0; i < 3; i++) {
      result.push(parseInt(HexColor.slice(2 * i + 1, 2 * i + 3), 16));
    }
    return result;
  };

  const ColorsGenerator = function (factor) {
    const rConst = 50;
    const gConst = 50;
    const bConst = 50;
    const color = ColorConverter();
    return [color[0] + factor * rConst,color[1] + factor * gConst,color[2] + factor * bConst];
  };

  const BaseColor = ColorsGenerator(0);
  const StrongColor = ColorsGenerator(-1);
  const SoftColor = ColorsGenerator(1);

  return (
    <>
      <IconButton
          sx={{ position: "absolute", left: 3, bottom: 3, zIndex:1, borderRadius:2, border:1}}
          color="#263238"
          size="large"
          aria-label="previous pokemon"
          component="label"
          onClick={() => limitMaker(1, false)}
        >
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
      <Card
      className="CustomCard"
      sx={{ width: 400, border: 4, borderColor: "#7B7B7B", borderRadius: 2 }}
      >
        <CardHeader
          sx={{ bgcolor: `rgb(${StrongColor})` }}
          avatar={
            <Avatar
              sx={{
                bgcolor: `rgba(${SoftColor},0.7)`,
                border: 2,
                borderColor: "#F2F2F2",
              }}
              alt="pokemon-small"
              src={data.sprites.front_default}
            />
          }
          title={
            <Typography variant="h5" component="div">
              {data.name}
            </Typography>
          }
          subheader={
            <Stack direction="row" spacing={1}>
              <Types data={data.types} info={chipInfo} />
            </Stack>
          }
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 0.4,
            borderRadius: 2,
            background: `linear-gradient(140deg, rgba(${BaseColor},1) 40%, rgba(220,220,220,1) 50%, rgba(${BaseColor},1) 60%)`,
          }}
        >
          <CardMedia
            sx={{ width: 200 }}
            height="200"
            component="img"
            image={img}
            alt="pokemon"
          />
        </Box>
        <CardContent sx={{ bgcolor: `rgba(${SoftColor},0.2)` }}>
          <Typography variant="body2" fontWeight="bold">
            Info:
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {info}
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-start", gap: 2, pb: 1 }}
          >
            <Typography variant="body2">
              <b>Weight: </b>
              {data.weight / 10} Kg
            </Typography>
            <Typography variant="body2">
              <b>Height: </b>
              {data.height / 10} m
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2,
              pb: 1,
            }}
          >
            <Typography variant="body2" fontWeight="bold">
              Abilities:
            </Typography>
            <Abilities
              data={data.abilities}
              borderColor={`rgb(${StrongColor})`}
            />
          </Box>
          <Typography variant="body2" fontWeight="bold">
            Weaknesses:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", pt: 0.5 }}>
            <Stack direction="row" spacing={2}>
              <Weaknesses data={weaknesses} info={chipInfo} />
            </Stack>
          </Box>
          <Typography variant="body2" fontWeight="bold">
              Stats:
            </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Stats pokeData={data} color={StrongColor} />
          </Box>
        </CardContent>
      </Card>
      <IconButton sx={{ position: "absolute", right: 3, bottom: 3, zIndex:1, borderRadius:2, border:1}} color="#263238" size="large" aria-label="next pokemon" component="label" onClick={() => limitMaker(151, true)}>
        <ArrowForwardIcon fontSize="inherit" />
      </IconButton>
    </>
  );
}
