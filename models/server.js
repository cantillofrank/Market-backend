import express from "express";  
import 'dotenv/config';
import cors  from "cors";

 export class Server {  


    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.middlewares();

        this.rutas();
    }
    //Segundo Metodo de mi Clase Server 
    rutas() {
        this.app.get('/api', (req, res) => {
            res.json({
                message: 'GET - Server'
            })
        });
        this.app.post('/api', (req, res) => {
            res.json({
                message: 'POST - Server'
            })
        });
        this.app.put('/api', (req, res) => {
            res.json({
                message: 'PUT- Server'
            })
        });
        this.app.delete('/api', (req, res) => {
            res.json({

                message: 'DELETE - Server'
            })
        });
    }

    //Metodo 3 de mi Clase Server
    middlewares() {
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    //Primer Metodo de mi Clase Server
    listen() {
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto: ${this.port}`);
        });
    }

}

export default Server;
