const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;
const bodyParser = require("body-parser");
const post = require("./post");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/cadastrar", (req, res) => {
    post.create({
      nota: req.body.nota,
    }).then(() => {
      res.redirect("/");
      console.log("cadastrado");
    }).catch((erro) => {
      res.send("Falha ao cadastrar os dados: " + erro);
      console.log("Falha ao cadastrar os dados: " + erro +" "+req.body.nota);
    });
});

app.get("/excluir/:id", function (req, res) {
  post.destroy({ where: { 'id': req.params.id } }).then(function () {
      res.redirect("/")
  }).catch(function (erro) {
      console.log("Erro ao excluir: " + erro)
  })
})

app.listen(8081, () => {
  console.log("Server on!");
});