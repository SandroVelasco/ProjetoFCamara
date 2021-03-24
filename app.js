const express = require("express");
const handlebars = require("express-handlebars");
const web = require("./routes/web");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");


//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

//Public
app.use(express.static(path.join(__dirname,"public")))


// Configuração da sessão
app.use(
  session({
    secret: 'byphZjcFavJH',
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
app.use("/", web);

/**
 * Pasta(s) estática(s)
 * Indica que tudo dentro dessas pastas é público e poderá ser acessado por URL
 */
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => {
  console.log("Running by FCamara Team");
});
