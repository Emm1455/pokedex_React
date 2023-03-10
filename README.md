# Pokecard cosuming pokedex API
React app consuming pokemon API and using Material ui library.

## Overview
This project is a web application that shows pokemon cards from the first generation of pokemon.
It was created using React with React-chartjs-2 and Material ui libraries, it requests all the info from to the open Pokemon Api.

## Process
The main objective of this project was to get the most of the data from the pokemon API using React Hooks.
After that some third party libraries like Material ui and React-chartsjs-2 were used to put that information in a pokemon card style.
### Pokemon API
The open [pokemon API](https://pokeapi.co/?ref=public-apis) allow to pick up information from the 1008 Pokemons of the TV serie Pokemon.

This information contents raw data from each pokemon like: Name, types, images, abilities, stats and info. Other information like weaknesses have to be calculated filtering the information given of types.

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

### React-chartjs-2

This library comes from Charts.js, a base library for javaScript and is adapted to work with react components.
Offer a bunch of chart types with an easy data modification and allows global and specific styling modifications to have a chart that will match the page styles.

- [Bar chart example](https://react-chartjs-2.js.org/examples/vertical-bar-chart)

## Screenshots

<picture>
    <img src="https://imgur.com/vY9QFFH.png" width= "400px" alt= "Desktop view">
</picture>

### Comments
- When using React chartjs within a Material ui component you have to set the component style property 'position' to relative so the chart will fill correctly the component.
```css
.parentComponent{
    position: relative;
}
```
Find more about this in: [Chart.js Documentation](https://www.chartjs.org/docs/latest/configuration/responsive.html)

- The correct info of the pokemon in English language comes from the 'sword version' or 'let's go pikachu' version. It could vary in another languages.
### Useful resources
- [Pokedex](https://www.pokemon.com/us/pokedex)
- [Material UI](https://mui.com/)
- [React charts](https://react-chartjs-2.js.org/)
## Author
Emmanuel Franco Mercado Luna @Emm1455
