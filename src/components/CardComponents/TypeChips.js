import Chip from "@mui/material/Chip";
import { v4 as uuid } from "uuid";

function TypeChips({ data, info }) {
  const result = data.map((item) => (
    <Chip
      key={uuid()}
      sx={{
        bgcolor: info.bgColor[info.name.indexOf(item.type.name)],
        color: info.fgColor[info.name.indexOf(item.type.name)],
        fontSize: 14,
      }}
      label={item.type.name}
      size="small"
    />
  ));
  return <>{result}</>;
}

export default TypeChips;
