const chipInfo = {
  name: ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow'],
  bgColor: ['#A4ACAF', '#D56723', '#3DC7EF', '#B97FC9', '#AB9842', '#A38C21', '#729F3F', '#7B62A3', '#9EB7B8', '#FD7D24', '#4592C4', '#9BCC50', '#EED535', '#F366B9', '#51C4E7', '#F16E57', '#707070', '#FDB9E9', '#263238', '#7B62A3'],
  fgColor: ['#263238', '#263238', '#263238', '#F2F2F2', '#263238', '#F2F2F2', '#F2F2F2', '#F2F2F2', '#263238', '#F2F2F2', '#F2F2F2', '#263238', '#263238', '#F2F2F2', '#263238', '#263238', '#F2F2F2', '#263238', '#F2F2F2', '#F2F2F2']
}

const HexToRgbConverter = function (type) {
  const HexColor = chipInfo.bgColor[chipInfo.name.indexOf(type)]
  const result = []
  for (let i = 0; i < 3; i++) {
    result.push(parseInt(HexColor.slice(2 * i + 1, 2 * i + 3), 16))
  }
  return result
}

const ColorsGenerator = function (factor, type) {
  const rConst = 50
  const gConst = 50
  const bConst = 50
  const color = HexToRgbConverter(type)
  return [color[0] + factor * rConst, color[1] + factor * gConst, color[2] + factor * bConst]
}

export { ColorsGenerator, chipInfo }
