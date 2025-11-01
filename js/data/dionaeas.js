const dionaeas = [
  {
    nombre: "Dionaea muscipula 'Típica'",
    imagen: "imagenes/dioneas/tipica.png",
    precios: { chica: "10 soles", mediana: "25 soles", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Red Sawtooth'",
    imagen: "imagenes/dioneas/red sawtooth.png",
    precios: { chica: "10 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Green Sawtooth'",
    imagen: "imagenes/dioneas/green sawtooth.png",
    precios: { chica: "10 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Sawtooth'",
    imagen: "imagenes/dioneas/sawtooth.png",
    precios: { chica: "10 soles", mediana: "25 soles", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Korean Melody Shark'",
    imagen: "imagenes/dioneas/korean melody shark.png",
    precios: { chica: "-", mediana: "45", grande: "-" },
    estado: "proximamente",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'GJ Equobia'",
    imagen: "imagenes/dioneas/gj equobia.jpg",
    precios: { chica: "-", mediana: "30 soles", grande: "-" },
    estado: "proximamente",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Dracula'",
    imagen: "imagenes/dioneas/dracula.png",
    precios: { chica: "10 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Carboni'",
    imagen: "imagenes/dioneas/carboni.png",
    precios: { chica: "80 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Ghost'",
    imagen: "imagenes/dioneas/ghost.png",
    precios: { chica: "60 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Fiamma'",
    imagen: "imagenes/dioneas/fiamma.png",
    precios: { chica: "90 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Pac-Man'",
    imagen: "imagenes/dioneas/pacman.png",
    precios: { chica: "60 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Dark Knight'",
    imagen: "imagenes/dioneas/dark knight.png",
    precios: { chica: "-", mediana: "-", grande: "-" },
    estado: "nodisponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Bohemian Garnet'",
    imagen: "imagenes/dioneas/bohemian garnet.png",
    precios: { chica: "10 soles", mediana: "25 soles", grande: "35 soles" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Coq Couche'",
    imagen: "imagenes/dioneas/coq couche.png",
    precios: { chica: "10 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Shup Destruction'",
    imagen: "imagenes/dioneas/shup destruction.png",
    precios: { chica: "20 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Red Daggers'",
    imagen: "imagenes/dioneas/red daggers.png",
    precios: { chica: "15 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'TDK2'",
    imagen: "imagenes/dioneas/tdk2.png",
    precios: { chica: "15 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Tritón'",
    imagen: "imagenes/dioneas/triton.png",
    precios: { chica: "15 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Marston Giant'",
    imagen: "imagenes/dioneas/marston giant.png",
    precios: { chica: "10 soles", mediana: "-", grande: "70 soles" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'B52 Giant'",
    imagen: "imagenes/dioneas/b52 giant.png",
    precios: { chica: "20 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'AR Werewolf Clon A'",
    imagen: "imagenes/dioneas/ar werewolf clon a.png",
    precios: { chica: "35 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Fondue'",
    imagen: "imagenes/dioneas/fondue.png",
    precios: { chica: "25 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Ginormous'",
    imagen: "imagenes/dioneas/ginormous.png",
    precios: { chica: "-", mediana: "27 soles", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Fuzzy Tooth'",
    imagen: "imagenes/dioneas/fuzzy tooth.png",
    precios: { chica: "28 soles", mediana: "-", grande: "-" },
    estado: "disponible",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Kim Jong Un'",
    imagen: "imagenes/dioneas/kim jong un.png",
    precios: { chica: "-", mediana: "-", grande: "-" },
    estado: "proximamente",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Kim Jong Il'",
    imagen: "imagenes/dioneas/kim jong il.png",
    precios: { chica: "-", mediana: "-", grande: "-" },
    estado: "proximamente",
    actualizacion: "31/10/2025"
  },
  {
    nombre: "Dionaea muscipula 'Kim Il Sung'",
    imagen: "imagenes/dioneas/kim il sung.png",
    precios: { chica: "-", mediana: "-", grande: "-" },
    estado: "proximamente",
    actualizacion: "31/10/2025"
  },
  {
  nombre: "Dionaea muscipula 'Hanicka's Butterfly'",
  imagen: "imagenes/dioneas/hanicka's butterfly.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "nodisponible",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Double Trouble'",
  imagen: "imagenes/dioneas/double trouble.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "proximamente",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Cup Trap'",
  imagen: "imagenes/dioneas/cup trap.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "proximamente",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Harmony'",
  imagen: "imagenes/dioneas/harmony.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "proximamente",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Jaws Smile'",
  imagen: "imagenes/dioneas/jaws smile.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "proximamente",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Ramesse I'",
  imagen: "imagenes/dioneas/ramesse 1.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "nodisponible",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Werewolf'",
  imagen: "imagenes/dioneas/werewolf.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "nodisponible",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Bristle Tooth'",
  imagen: "imagenes/dioneas/bristle tooth.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "proximamente",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Isistus'",
  imagen: "imagenes/dioneas/isistus.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "proximamente",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Long Red Fingers'",
  imagen: "imagenes/dioneas/long red fingers.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "nodisponible",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Clayton’s Volcanic Red'",
  imagen: "imagenes/dioneas/clayton’s volcanic red.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "proximamente",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Polish Dracula'",
  imagen: "imagenes/dioneas/polish dracula.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "proximamente",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Dentate'",
  imagen: "imagenes/dioneas/dentate.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "proximamente",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Red Dentate'",
  imagen: "imagenes/dioneas/red dentate.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "nodisponible",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Red Bull'",
  imagen: "imagenes/dioneas/red bull.jpg",
  precios: { chica: "10", mediana: "-", grande: "-" },
  estado: "disponible",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Schuppenstiel 1'",
  imagen: "imagenes/dioneas/schuppenstiel 1.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "nodisponible",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Schuppenstiel 2'",
  imagen: "imagenes/dioneas/schuppenstiel 2.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "nodisponible",
  actualizacion: "31/10/2025"
},
{
  nombre: "Dionaea muscipula 'Microdent'",
  imagen: "imagenes/dioneas/microdent.png",
  precios: { chica: "-", mediana: "-", grande: "-" },
  estado: "proximamente",
  actualizacion: "31/10/2025"
}

];
