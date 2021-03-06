"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var loginRegister_service_1 = require("./loginRegister.service");
var LoginComponent = (function () {
    function LoginComponent(loginregister) {
        this.loginregister = loginregister;
        this.register_data = {
            name: '',
            handle: '',
            password: '',
            email: '',
            phone: ''
        };
        this.login_data = {
            handle: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        this.loginregister.loginUser().subscribe(function (data) {
            console.log(data);
        });
    };
    LoginComponent.prototype.register = function () {
        console.log(this.register_data);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html',
        providers: [loginRegister_service_1.LoginRegister]
    }),
    __metadata("design:paramtypes", [loginRegister_service_1.LoginRegister])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map