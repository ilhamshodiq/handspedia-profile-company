const express = require("express")
const app = express()

app.use(express.static("src"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('views', './views');
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// get index.ejs
app.get('/', (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.info("Server started on port 3000");
});