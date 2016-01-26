System.register(["angular2/core","angular2/router","./components/person/listperson.component","./components/person/addperson.component","./components/person/deletePerson.component","./components/person/editPerson.component"],function(e){var n,t,o,r,s,c,p,i=this&&this.__decorate||function(e,n,t,o){var r,s=arguments.length,c=3>s?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,o);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(3>s?r(c):s>3?r(n,t,c):r(n,t))||c);return s>3&&c&&Object.defineProperty(n,t,c),c},a=this&&this.__metadata||function(e,n){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,n):void 0};return{setters:[function(e){n=e},function(e){t=e},function(e){o=e},function(e){r=e},function(e){s=e},function(e){c=e}],execute:function(){p=function(){function e(){}return e=i([n.Component({selector:"my-app",template:'\n    <a [routerLink]="[\'ListPersonCenter\']">Person</a>\n    <div class="container-fluid">\n        <router-outlet></router-outlet>\n    </div>\n  ',directives:[t.ROUTER_DIRECTIVES]}),t.RouteConfig([{path:"/person",name:"ListPersonCenter",component:o.ListPersonComponent},{path:"/person/add",name:"AddPerson",component:r.AddPersonComponent},{path:"/person/delete/:id",name:"DeletePerson",component:s.DeletePersonComponent},{path:"/person/edit/:id",name:"EditPerson",component:c.EditPersonComponent}]),a("design:paramtypes",[])],e)}(),e("AppComponent",p)}}});