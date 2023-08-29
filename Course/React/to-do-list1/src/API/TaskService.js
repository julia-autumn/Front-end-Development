import axios from "axios";
import {useData} from 'react';

export default class TaskService {
  static async getAll() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      console.log("getall");
     // const response = useData("https://jsonplaceholder.typicode.com/todos");
      console.log(response);

    return response.data;
  }
}
