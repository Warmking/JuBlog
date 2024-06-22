import { Client } from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client()
    dataBase;
    bucket;

    constructor() {
    }

}

const service = new Service()

export default service