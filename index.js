const express = require("express");
const routes = require("./routes/web");
const session = require("express-session");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Configuração da sessão
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 86400 * 30 - (new Date().getTimezoneOffset() * 1000 * 60),
      httpOnly: true,
      path: "/",
    },
  })
);

// Routes
app.use("/", routes);

/**
 * Pasta(s) estática(s)
 * Indica que tudo dentro dessas pastas é público e poderá ser acessado por URL
 */
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => {
  console.log("Running by FCamara Team");
});
