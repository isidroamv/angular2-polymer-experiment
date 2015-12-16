import 'zone.js';
import 'reflect-metadata';

import {bootstrap, bind, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {reflector} from 'angular2/src/core/reflection/reflection';
import {ReflectionCapabilities} from 'angular2/src/core/reflection/reflection_capabilities'

import {Spotify} from './services/spotify';
import {App} from './components/app';

var universalInjectables = [
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
];

reflector.reflectionCapabilities = new ReflectionCapabilities();
bootstrap(App, universalInjectables);