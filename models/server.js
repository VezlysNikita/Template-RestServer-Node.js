const express = require('express');
const cors = require('cors');

class Server {
      constructor() {
            this.app = express();
            this.port = process.env.PORT;
            //Paths from rutes
            this.userPath = '/api/user';

            //Middlewares
            this.middlewares();

            //Rutes from App
            this.routes();
      }

      middlewares() {
            this.app.use(cors());

            //read json.body
            this.app.use(express.json());

            //Public
            this.app.use(express.static('public'));
      }

      //Rutes from App
      routes() {
            this.app.use(this.userPath, require('../routes/api.routes'));
      }

      listen() {
            this.app.listen(this.port, () => {
                  console.log('Listen port' + this.port);
            });
      }
}

module.exports = Server;
