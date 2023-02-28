import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Types from "./TypeChips";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function HeaderComponent({StrongColor,SoftColor,data,info}) {
  return (
    <CardHeader
          sx={{ bgcolor: `rgb(${StrongColor})`, padding:"8px 16px" }}
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
              <Types data={data.types} info={info} />
            </Stack>
          }
        />
  );
}

export default HeaderComponent