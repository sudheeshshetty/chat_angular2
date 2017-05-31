import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {observable} from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginRegister{
    constructor(private http:Http){}
    
    loginUser(data:any):observable<any>{
        const headers=new Headers({'Content-Type':'application/json'});
        const options= new RequestOptions({headers:headers});
        return this.http.post('http://10.66.30.2:8080/login',{data},options)
            .map((data)=>console.log(data))
        )
    }
}