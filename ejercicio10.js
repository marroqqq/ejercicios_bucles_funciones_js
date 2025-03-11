const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}

function getCapital(country) {
  for (const element in capitals) {
    if (element == country) {
      return capitals[element]
    }
  }
  return 'Pais no disponible'
}
console.log(getCapital('Ireland'))
