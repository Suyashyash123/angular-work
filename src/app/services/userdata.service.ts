import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor() { }
  users(){
    return[
      {name:'Suyash', age:22 , email:'suyashsrivastava409@gmail.com'},
      {name:'Yash', age:22 , email:'yashsoni6959@gmail.com'},
      {name:'Adarsh', age:22 , email:'adarshraj008@gmail.com'},
    ]
  }
}
