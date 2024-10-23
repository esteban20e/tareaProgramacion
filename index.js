import express from 'express';

const app = express();

const tarea = [ {
    id: 1,
    titulo: "Preparar presentación",
    descripcion: "Crear la presentación para la reunión del l",
    fechaVencimiento: "2024-10-20T18:30:00Z",
    estado: {
    pendiente: true,
    enCurso: false,
    finalizada: false
    },
   },
   {
    id: 2,
    titulo: "Entrega de proyecto",
    descripcion: "Entregar el proyecto armado",
    fechaVencimiento: "2024-10-22T18:30:00Z",
    estado: {
    pendiente: false,
    enCurso: true,
    finalizada: false
    },
   },
]

app.get("/", (req, res) => {})
app.post("/tareas", (req, res) => {
    const {titulo, descripcion, fechaVencimiento, estado } = req.body;

    if (!titulo || !descripcion || !fechaVencimiento || !estado) {
      return res.status(400).json({error: "los campos son obligatorios"}); 
    }
    
    const nuevoId = tarea.length > 0 ? tarea[tarea.length - 1].id+1 : 1;

    const nuevoTarea = {
        id: nuevoId,
        titulo,
        descripcion,
        fechaVencimiento,
        estado
    };

    tarea.push(nuevoTarea);

    res.status(201).json({ message: "tarea creada con exito", tarea: nuevoTarea});
});
app.put("/", (req, res) => {})
app.delete("/", (req, res) => {})


app.listen(3000, () => {
    console.log('server listening on port 3000');

});


