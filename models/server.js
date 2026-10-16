import express from "express";  
import 'dotenv/config';

 export class Server {  


    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.middlewares();

        this.rutas();
    }
    //Segundo Metodo de mi Clase Server 
    rutas() {
        this.app.get('/', (req, res) => {
            res.send({
                message: 'Hola mundo de mi servidor'
            })
        });
    }

    //Metodo 3 de mi Clase Server
    middlewares() {
        this.app.use(express.static('public'));
    }

    //Primer Metodo de mi Clase Server
    listen() {
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto: ${this.port}`);
        });
    }

}

export default Server;