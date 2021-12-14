import express from "express";
import "./database";

const app = express();

/**
 * GET = buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = deletar
 * PATCH = Alterar uma infoação específica
 */

app.get("/", (request, response) => {
  return response.json({
      message: "Olá Bianca, continue assim :D",
  });  
});

app.post("/users", (request, response) =>  {
    return response.json({ message: "Usuário salvo com sucesso!" });
})

app.listen(3333,  () => console.log("Server is running on port 3333"));