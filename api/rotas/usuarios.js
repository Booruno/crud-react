import express from "express";
import { getUsers } from "../controllers/usuario.js";

const rotas = express.Router();

rotas.get("/", getUsers);

export default rotas;
