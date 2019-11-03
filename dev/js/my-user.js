import {name} from  './my-name.js';
let user={
  name: name,
  age:30,
  say(){
    console.log(`i'm ${this.name} and my age is ${this.age}`);
  }
};
export  {user};
