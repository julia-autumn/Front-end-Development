import axios from "axios";

export default class TaskService {
    static async getAll() {
        try{

            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data;

        }  catch(e) {
            console.log(e);
        }


       }
}