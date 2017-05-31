import {Component} from '@angular/core';
import {LoginRegister} from './loginRegister.service';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    providers:[LoginRegister]
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
    constructor(private loginregister:LoginRegister){ }
    
    login():void{
        this.loginregister.loginUser().subscribe(data=>{
            console.log(data);
        });
    }
    
    register():void{
        console.log(this.register_data);
        
    }
    
    
}