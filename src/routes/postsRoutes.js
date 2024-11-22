import express from "express";
import multer from "multer";
import {
  listarPosts,
  postarNovoPost,
  uploadImagem,
  atualizarNovoPost,
} from "../controllers/postsController.js";

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
  // Permite que o servidor interprete requisições com corpo JSON
  app.use(express.json());

  // Rota para buscar todos os posts
  app.get("/posts", listarPosts);
  // Rota para criar um novo post
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
