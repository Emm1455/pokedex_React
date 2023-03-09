# Pokecard cosuming pokedex API
React app consuming pokemon API and using Material ui library.


## Overview
This project is a web application that shows pokemon cards from the first generation of pokemon.
It was created using React with React-chartjs-2 and Material ui libraries, it requests all the info from to the open Pokemon Api.

### Screenshots

<picture>
    <img src="https://imgur.com/vY9QFFH.png" width= "400px" alt= "Desktop view">
</picture>

## Process
###Built with
- React.js
- Material ui library
- CSS
###Pokemon API
The open pokemon API allow to pick up information of 1008 Pokemons.
- [Pokemon API](https://pokeapi.co/?ref=public-apis)
This information contents raw data from each pokemon like: Name, types, images, abilities, stats and info. Other information like weaknesses have to be calculated filtering the information given of types
To make a request using the pokemon ID you have to use the next URL
`https://pokeapi.co/api/v2/pokemon/1`
In this case `id = 1`
### Material ui components
- Card
- CardHeader
- Avatar
- CardContent
- Typography
- Box
- Chip
- Button
### Comments
- When using React chartjs within a Material ui component you have to set the component position to relative so the chart will fill correctly the component.
- The correct info of the pokemon in english is from the sword version or let's go pikachu version.
### Useful resources
- [Pokedex](https://www.pokemon.com/us/pokedex)
- [Material UI](https://mui.com/)
- [React charts](https://react-chartjs-2.js.org/)
## Author
Emmanuel Franco Mercado Luna @Emm1455
