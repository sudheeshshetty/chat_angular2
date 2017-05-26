import {Component} from '@angular/core';

@Component({
    selector:'login',
    templateUrl:'./login.component.html'
})

export class LoginComponent{
    
    register_data:{name:string;
        handle:string;
        password:string;
        email:string;
        phone:string}={
        name:'',
        handle:'',
        password:'',
        email:'',
        phone:''
    }
    
    
    login_data:{handle:string;password:string}={
        handle:'',
        password:''
    }
    constructor(){
    
    }
    login():void{
        console.log(this.login_data);
    }
    
    register():void{
        console.log(this.register_data);
    }
    
    
}