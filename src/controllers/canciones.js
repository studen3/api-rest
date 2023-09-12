import {cancionesES} from "../models/canciones.js";

let idCount = cancionesES.length;

export const obtenerCanciones = (req, res) => {
  if (req.query.nombre) {
    // Buscar el personaje con el mismo nombre que llega por parametro con el metodo find
    const cancion = cancionesES.filter(
      (cancion) => cancion.nombre === req.query.nombre
    );
    // Si no existe
    if (!cancion) {
      return res.status(404).json({ error: "la cancion no a sido encontradad" });
    }
    // Si existe
    return res.json(cancion);
  }
  // Si no hay canciones
  if (cancionesES.length === 0) {
    return res.status(404).json({ error: "No hay canciones" });
  }
  res.json(cancionesES);
};

export const obtenerCancionesPorId = (req, res) => {
  // Obtener el id
  const id = parseInt(req.params.id);
  // Buscar la cancion con el mismo id que llega por parametro con el metodo find
  const cancion = cancionesES.find((cancion) => cancion.id === id);
  // Si no hay canciones
  if (!cancion) {
    return res.status(404).json({ error: "la cancion no se a encontrado" });
  }
  // Si hay cancion
  return res.json(cancion);
};

export const crearCanciones = (req, res) => {
  if (!req.body.nombre || !req.body.artista) {
    return res.status(400).json({ error: "Error en la peticion" });
  }
  const cancion = req.body;
  const id = ++idCount;
  cancionesES.push({ id, ...cancion });
  return res.status(201).json(cancion);
};

export const ModificarCanciones = (req, res) => {
  const id = parseInt(req.params.id);
  const index = cancionesES.findIndex((cancion) => cancion.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "cancion no encontradad" });
  } else {
    const cancionUnivers = { ...cancionesES[index], ...req.body };
    cancionesES[index] = cancionUnivers;
    res.json(cancionUnivers);
  }
};

export const borrarCanciones = (req, res) => {
  const id = parseInt(req.params.id);
  // Encontrar el indice de la cancion en la db por su id
  const index = cancionesES.findIndex((cancion) => cancion.id === id);
  // Si no existe ninguna cancion con ese id
  if (index === -1) {
    return res.status(404).json({ error: "cancion no encontradad" });
  } else {
    // Eliminar cancion de la base de datos segun su id
    cancionesES.splice(index, 1);
    // Responder con un mensaje
    res.json({ message: "cancion eliminada correctamente" });
  }
};