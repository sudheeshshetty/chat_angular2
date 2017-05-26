"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'header',
        template: "\n        <nav class=\"navbar navbar-dark bg-primary\">\n    <div class=\"container-fluid\">\n    </div>\n</nav>\n<div class=\"container center text-center\">\n    <div class=\"container inner_container\">\n        <div class=\"row text-center Absolute-Cente is-Responsive\">\n            <div class=\"page-header\">\n                <h1>CHAT</h1>\n            </div>\n            <form>\n                <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                    <input class=\"form-control\" type=\"text\" name='handle' placeholder=\"handle\" ng-model=\"login_data.handle\"/> \n                </div>\n                <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                    <input class=\"form-control\" type=\"password\" name='password' placeholder=\"password\" ng-model=\"login_data.password\" my-enter=\"login()\"/>     \n                </div>\n                <div class=\"checkbox\">\n                    <label><input type=\"checkbox\" value=\"\" checked>Remember me</label>\n                </div>\n                <button type=\"button\" class=\"btn btn-primary btn-block\" ng-click=\"login()\"><span class=\"glyphicon glyphicon-off\"></span>\n                    Login</button>\n                <div class=\"form-group pull-left\"><a href=\"#\">Forgot Password?</a>\n                </div>\n                <div class=\"form-group pull-right\">Not a member?<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">Register</a>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\" >\n            <div class=\"modal-header\" style=\"padding:15px 50px;\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"text-center\"><span class=\"glyphicon glyphicon-lock\"></span> Register</h4>\n            </div>\n            <div class=\"modal-body\" style=\"padding:20px 50px;\">\n                <form role=\"form\" action=\"http://localhost:8080/register\" method=\"post\">\n                    <div class=\"form-group\">\n                        <label for=\"name\"><span class=\"glyphicon glyphicon-user\"></span> Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Full Name\" ng-model=\"user.name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"handle\"><span class=\"glyphicon glyphicon-user\"></span> Handle</label>\n                        <input type=\"text\" class=\"form-control\" id=\"handle\" placeholder=\"Enter Handle\" ng-model=\"user.handle\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"psw\"><span class=\"glyphicon glyphicon-eye-open\"></span> Password</label>\n                        <input type=\"password\" class=\"form-control\" id=\"psw\" placeholder=\"Enter password\" ng-model=\"user.password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email\"><span class=\"glyphicon glyphicon-envelope\"></span> Email</label>\n                        <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Enter Email\" ng-model=\"user.email\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"phone\"><span class=\"glyphicon glyphicon-phone\"></span> Phone</label>\n                        <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Enter Phone number\" ng-model=\"user.phone\">\n                    </div>\n\n                    <button type=\"button\" class=\"btn btn-primary btn-block\" data-dismiss=\"modal\" ng-click=\"Register()\"><span class=\"glyphicon glyphicon-off\"></span>\n                        Register</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n    "
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map