import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  fetchData(): Promise<any> {
    return axios.get('https://api.github.com/users/xiaotian/repos')
      .then(response => response.data)
      .catch(error => {
        console.error('Error:', error);
        throw error; 
      });
  }
}
