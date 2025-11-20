const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

// Middleware para permitir que o Express entenda JSON no corpo das requisições
app.use(express.json());

// Define EJS como o view engine e o diretório de views
app.set("view engine", "ejs");
app.set("views", "src/views");

// Middleware customizado que roda para todas as requisições, logando detalhes
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

// Rota para renderizar a view EJS com a lista de usuários
app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});

  res.render("index", { users });
});

// Rota da API para buscar todos os usuários no banco de dados
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Rota da API para buscar um usuário específico pelo ID
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Rota da API para criar um novo usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Rota da API para atualizar um usuário (parcialmente)
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Rota da API para deletar um usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

// Inicia o servidor na porta definida
app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
