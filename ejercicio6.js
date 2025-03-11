const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
]
let decadas = {
  años70: [],
  años80: [],
  años90: [],
  años2000: [],
  años2010: []
}
// Añade tu código de bucle aquí
for (const element of starWarsMovies) {
  if (element.releaseYear < 1980) {
    decadas.años70.push(element.title)
  }
  if (element.releaseYear < 1990 && element.releaseYear >= 1980) {
    decadas.años80.push(element.title)
  }
  if (element.releaseYear < 2000 && element.releaseYear >= 1990) {
    decadas.años90.push(element.title)
  }
  if (element.releaseYear < 2010 && element.releaseYear >= 2000) {
    decadas.años2000.push(element.title)
  }
  if (element.releaseYear >= 2010) {
    decadas.años2010.push(element.title)
  }
}
console.log(decadas)
