# API de Canciones

Esta API proporciona una serie de endpoints para gestionar canciones y su información relacionada.

## Obtener todas las canciones

### GET /canciones
http://localhost:3001/canciones
Obtiene una lista de todas las canciones almacenadas en la base de datos.

## Obtener una canción por ID

### GET /canciones/:id
http://localhost:3001/canciones/1
Obtiene los detalles de una canción específica identificada por su ID.

## Crear una nueva canción

### POST /canciones
http://localhost:3001/canciones
Crea una nueva canción en la base de datos. Debe proporcionar un objeto JSON con la información de la canción.

Ejemplo de objeto JSON:

```json
{
    "id": 1,
    "nombre": "Mas fuerte que tu",
    "artista": "garnet",
    "descripcion":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    "imagen":
      "https://pm1.aminoapps.com/6153/83a955ccc63687218cca6f347282b7064a244ec6_00.jpg",
    "stock": "disponible",
}
```
  ## Actualizar una canción
### PATCH /canciones/:id
http://localhost:3001/canciones:id
Actualiza los detalles de una canción existente identificada por su ID. Debe proporcionar un objeto JSON que contenga la información que desea actualizar.

Ejemplo de objeto JSON para actualizar:

```json
{
  "nombre": "Nuevo Nombre",
  "artista": "Nuevo"
}
```

  ## Eliminar una canción
## DELETE /canciones/:id
http://localhost:3001/canciones/:id
Elimina una canción de la base de datos según su ID.


 ## Ejemplo de Uso
Aquí tienes un ejemplo de cómo utilizar la API para obtener todas las canciones:
GET /canciones

```json
[
  {
    "id": 1,
    "nombre": "Mas fuerte que tu",
    "artista": "garnet",
    "descripcion":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    "imagen":
      "https://pm1.aminoapps.com/6153/83a955ccc63687218cca6f347282b7064a244ec6_00.jpg",
    "stock": "disponible",
  },
  {
    "id": 2,
    "nombre": "Aqui viene un pensamiento",
    "artistas": "garnet y stevony",
    "descripcion":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    "imagen":
      "https://pm1.aminoapps.com/6368/95838cb4969e37858b0b46daa9798a03fcc1ab1b_00.jpg",
    "stock": "disponible",
  },
  {
    "id": 3,
    "nombre": "Amar como tu",
    "artista": "rose",
    "descripcion":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    "imagen": "https://i.ytimg.com/vi/qpdL4kh9uyI/maxresdefault.jpg",
    "stock": "supedida",
  },
  {
    "id": 4,
    "nombre": "mujer gigante",
    "artista": "perla y amatista",
    "descripcion":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    "imagen":
      "https://pm1.aminoapps.com/6341/bcd0ee0f37be89a0c54d79b0a34a1439ebfc0a89_hq.jpg",
    "stock": "eliminada",
  }
]
```
