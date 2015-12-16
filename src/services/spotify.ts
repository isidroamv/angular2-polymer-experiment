import {Injectable} from 'angular2/angular2';

@Injectable()
export class Spotify {
	url: string;
	constructor() {
		this.url = 'https://api.spotify.com/v1/';
	}
	
	public searchArtist (value) {
		
		var fetched = window['fetch'](this.url+'search?type=artist&q='+value);
		return fetched;
	}
	
	public getArtistById (id) {
		return window['fetch'](this.url+'artists/'+id);
	}
}