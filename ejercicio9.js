const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

function findOldestXMen(xMen) {
  let año = xMen[0].year
  let nombre = xMen[0].name
  for (const element of xMen) {
    if (element.year < año) {
      año = element.year
      nombre = element.name
    }
  }
  return nombre
}
console.log(findOldestXMen(xMen))
