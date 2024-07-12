const express = require('express');
const courseRouter = require('./routes/course');
const port = 8080;
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/courses', courseRouter);
console.log(__dirname);


app.listen(port, ()=> {
    console.log(`el servidor esta activo en el puerto ${port}`);
})