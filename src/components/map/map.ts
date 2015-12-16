import {Component, View, Inject} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';


@Component({
	selector: 'map'
})
@View({
	directives: [RouterLink],
	template: `
		<article>
			{{ name }}
			<google-map latitude="37.77493" longitude="-122.41942"></google-map>
			
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iure error fugiat reiciendis maxime neque ducimus recusandae, tempore non eum voluptatum cumque harum tempora doloremque adipisci enim molestias eaque commodi.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iure error fugiat reiciendis maxime neque ducimus recusandae, tempore non eum voluptatum cumque harum tempora doloremque adipisci enim molestias eaque commodi.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iure error fugiat reiciendis maxime neque ducimus recusandae, tempore non eum voluptatum cumque harum tempora doloremque adipisci enim molestias eaque commodi.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iure error fugiat reiciendis maxime neque ducimus recusandae, tempore non eum voluptatum cumque harum tempora doloremque adipisci enim molestias eaque commodi.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iure error fugiat reiciendis maxime neque ducimus recusandae, tempore non eum voluptatum cumque harum tempora doloremque adipisci enim molestias eaque commodi.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iure error fugiat reiciendis maxime neque ducimus recusandae, tempore non eum voluptatum cumque harum tempora doloremque adipisci enim molestias eaque commodi.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iure error fugiat reiciendis maxime neque ducimus recusandae, tempore non eum voluptatum cumque harum tempora doloremque adipisci enim molestias eaque commodi.
		</article>
	`
})
export class Map {
	
}