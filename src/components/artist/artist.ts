import {Component, View, NgIf} from 'angular2/angular2';
import {RouterLink, RouteParams} from 'angular2/router';
import {Spotify} from '../../services/spotify';

@Component({
	selector: 'artist',
	viewProviders: [Spotify]
})
@View({
	directives: [NgIf],
	template: `
		<section *ngIf=artist>
			<h3>{{artist.name}}</h3>
			<img src="{{image}}">
		</section>`
})
export class Artist {
	artist: Object;
	service: Spotify;
	routeParams: RouteParams;
	image: string;
	constructor(service: Spotify, routeParam: RouteParams) {
		this.service = service;
		this.routeParams = routeParam;
		this.getArtist()
	}
	
	getArtist () {
		var id = this.routeParams.get('id');
		this.service.getArtistById(id)
			.then((response) => response.json())
			.then((response) => {
				this.artist = response;
				this.image = response.images[0].url;
			})
	}
}