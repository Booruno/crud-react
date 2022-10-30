import express from "express";
import cors from "cors";
import rotasUsuarios from "./rotas/usuarios.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", rotasUsuarios);

app.listen(8800);
