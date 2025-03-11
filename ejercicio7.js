const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]

let canciones = {
  Metal: [],
  Rock: [],
  Pop: [],
  Country: [],
  Grunge: []
}
// Añade tu código de bucle aquí
for (const element of tracks) {
  let genero = element.genre
  canciones[genero].push(element.title)
}
console.log(canciones)
