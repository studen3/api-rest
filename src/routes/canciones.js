import { Router } from "express";
import {
  borrarCanciones,
  crearCanciones,
  obtenerCanciones,
  obtenerCancionesPorId,
  ModificarCanciones,
} from "../controllers/canciones.js";

export const cancionesRouter = Router();

// Obtener todos las canciones
cancionesRouter.get("/", obtenerCanciones);

// Obtener una cancion por su id
cancionesRouter.get("/:id", obtenerCancionesPorId);

// Crear una nueva cancion
cancionesRouter.post("/", crearCanciones);

// Modificar una cancion
cancionesRouter.patch("/:id", ModificarCanciones);

// Borrar una cancion
cancionesRouter.delete("/:id", borrarCanciones);