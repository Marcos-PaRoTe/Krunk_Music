const express = require('express');
const app = express();
const User = require('./models/User');
const Produtos = require('./models/Produtos');
const crypto = require("crypto");
const SECRET = "secret"
const salt = "bf7b9ee01194d6a5d4bc2d847296e195"
const cors = require('cors');

app.use(express.json());
app.use(cors());

function sha512(senha, salt){
    var hash = crypto.createHmac('sha512', salt); // Algoritmo de cripto sha512
    hash.update(senha);
    var hash = hash.digest('hex');
    return {
        salt,
        hash,
    };
};

function gerarSenha(senha) {
    var senha = sha512(senha, salt); 
    return senha.hash
}

app.get("/produtos", async (req, res) => {
  try {
    const produtos = await Produtos.findAll();
    const produtosSemTimestamps = produtos.map((produto) => {
      const produtoSemTimestamps = produto.toJSON();
      delete produtoSemTimestamps.createdAt;
      delete produtoSemTimestamps.updatedAt;
      return produtoSemTimestamps;
    });

    res.status(200).json(produtosSemTimestamps);
  } catch (error) {
    return res.status(400).json({
      mensagem: "Erro ao buscar produtos!"
    });
  }
});

app.post("/produtos", async (req , res) => {
  try {
    if (req.body.nome && req.body.categoria && req.body.valor && req.body.anunciante != null) {
      const novoProduto =  await Produtos.create({
        anunciante: req.body.anunciante,
        nome: req.body.nome,
        categoria: req.body.categoria,
        valor: req.body.valor
    });
      return res.json({
        id: novoProduto.id,
        anunciante: novoProduto.anunciante,
        nome: novoProduto.nome,
        categoria: novoProduto.categoria,
        valor: novoProduto.valor
      });
    } else {
      return res.status(400).json({
        mensagem: "Erro: Requisição inválida!"
      });
    }
  } catch (error) {
    return res.status(400).json({
      mensagem: "Erro: Produto não cadastrado!"
    });
  }});

  app.post("/login", async (req, res) => {
    validarUsuario(req.body.email, req.body.senha)
      .then(usuario => {
        if (usuario) {
          return res.json({ nome: usuario.nome });
        } else {
          res.status(400).end();
        }
      });
  });
  
  async function validarUsuario(email, senha) {
    try {
      senha = gerarSenha(senha);
      const usuario = await User.findOne({ where: { email, senha } });
      if (usuario) {
        return usuario;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  app.post("/cadastrar", async (req, res) => {
    try {
      if (req.body.nome && req.body.email && req.body.senha && req.body.dataNascimento != null) {
        const senha = gerarSenha(req.body.senha);
        const novoUsuario = await User.create({
          nome: req.body.nome,
          email: req.body.email,
          senha: senha,
          dataNascimento: req.body.dataNascimento
        });
        return res.json({
          nome: novoUsuario.nome
        });
      } else {
        return res.status(400).json({
          mensagem: "Erro: Requisição inválida!"
        });
      }
    } catch (error) {
      if(error.original.code == "ER_DUP_ENTRY"){
        return res.status(409).json({
          mensagem: "Erro: Usuário já cadastrado!"
        });
      }
      console.log(error);
      return res.status(400).json({
        mensagem: "Erro: Usuário não cadastrado!"
      });
    }
  });

app.listen(8080, () => {
    console.log("Servidor iniciado");
});