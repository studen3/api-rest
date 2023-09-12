import express from "express";
import "dotenv/config";
import cors from "cors";
import { cancionesRouter } from "./routes/canciones.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/canciones", cancionesRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

const port = process.env.PORT ?? 3000;

app.listen(process.env.PORT || 3000, () => {
  console.log("Escuchando en el puerto: " + process.env.PORT);
});


