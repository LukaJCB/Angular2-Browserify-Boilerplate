import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'site',
  templateUrl: 'templates/template.html',
  providers: [HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  
])
export class SiteComponent { }