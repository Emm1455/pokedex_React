import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Stats from "./Stats";
import Weaknesses from "./WeaknessesChips";
import Abilities from "./AbilitiesChips";

function ContentComponent({SoftColor,StrongColor,data, weaknesses, info,chipInfo}) {
  return (
    <CardContent
      sx={{ bgcolor: `rgba(${SoftColor},0.2)`, padding: "8px 16px" }}
    >
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
        <Abilities data={data.abilities} borderColor={`rgb(${StrongColor})`} />
      </Box>
      <Typography variant="body2" fontWeight="bold">
        Weaknesses:
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", pt: 0.5 }}>
        <Stack direction="row" spacing={1.5}>
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
  );
}

export default ContentComponent;
