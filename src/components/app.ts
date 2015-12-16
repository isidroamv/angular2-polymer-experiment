
//import deps

//you may need es6-shim if you get an error relating to list.fill
//import es6-shim;

//if using babel or typescript compiler:
import {
Component,
View,
NgFor
} from 'angular2/angular2';

import {RouteConfig, RouterLink, RouterOutlet, Route} from 'angular2/router';
import {Http} from 'angular2/http';
import {Spotify} from '../services/spotify';
import {Artist} from '../components/artist/artist';
import {Search} from '../components/search/search';
import {Map} from '../components/map/map';

//create a simple angular component
@Component({
  selector: 'app'
})
@View({
  directives: [RouterLink, RouterOutlet],
  templateUrl: '/src/components/app.html'
})
@RouteConfig([
  new Route ({ path: '/map', name: 'Map', component: Map}),
  new Route ({ path: '/search', name: 'Search', component: Search}),
  new Route ({ path: '/artist/:id', name: 'Artist', component: Artist})
])
export class App {
  name: string;
  constructor() {
  }
}