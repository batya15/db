import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'db-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public tiles: Object = [
		{text: 'One', cols: 1, rows: 4, color: 'lightblue'}
	];
}
