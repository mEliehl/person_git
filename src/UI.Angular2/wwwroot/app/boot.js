System.register(["angular2/core","angular2/platform/browser","angular2/router","angular2/http","./app.component","./services/dataService","./services/personService","rxjs/Rx"],function(t){var e,n,o,r,s,i,c,u,a=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};return{setters:[function(t){e=t},function(t){n=t},function(t){o=t},function(t){r=t},function(t){s=t},function(t){i=t},function(t){c=t},function(t){}],execute:function(){u=function(t){function e(){t.apply(this,arguments),this.headers=new r.Headers({"Content-Type":"application/json"})}return a(e,t),e}(r.BaseRequestOptions),n.bootstrap(s.AppComponent,[o.ROUTER_PROVIDERS,r.HTTP_PROVIDERS,e.provide(r.RequestOptions,{useClass:u}),i.DataService,c.PersonService])}}});