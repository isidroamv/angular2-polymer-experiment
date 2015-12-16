
import { Component, View, NgFor, Inject } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { Spotify } from '../../services/spotify';

@Component({
	selector: 'search',
	viewProviders: [Spotify]
})
@View({
	directives: [NgFor, RouterLink],
	template: `
		<label for="search-string">Search for an artist</label>
		<input #searchvalue (keyup)="searchArtist($event, searchvalue.value)"/>
		<h2>Results</h2>
		<ul>
			<li *ngFor="#artist of artists">
				<h3>{{artist.name}}</h3>
				<a [routerLink]="['/Artist', {id: artist.id}]">Read more about this artist</a>
			</li>
		</ul>
	`
})
export class Search {
	timeoutId;
	artists: Object;
	service: Spotify;
	
	constructor (service: Spotify) {
		this.service = service;
	}
	
	searchArtist($event, value) {
		if (!value) {
			return;
		}
		
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
		
		this.timeoutId = setTimeout(() => {
			this.service.searchArtist(value)
				.then((result) => result.json() )
				.then((result) => {
					this.setResults(result.artists.items);
				})
		}, 250);
	}
	
	setResults(artists: Array<Object>) {
		this.artists = artists;
	}
}