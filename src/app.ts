import express, {Application } from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App {

    public app : Application;

    constructor() {
        this.app = express();
        this.addJsonSupport();
        this.connectMongoDb();
        this.addRoutes();
        this.initializePort();
    }

    private addJsonSupport(): void {
        this.app.use(express.json());
    };

    private connectMongoDb(): void {
        mongoose.connect('mongodb+srv://admin:admin@unaflor-zpmnb.mongodb.net/unaflor?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    };

    private addRoutes() {
        this.app.use(routes);
    }

    private initializePort() {
        this.app.listen(4200);
    }
}

export default new App();