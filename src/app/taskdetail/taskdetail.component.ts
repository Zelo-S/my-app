import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
	selector: 'app-taskdetail',
	templateUrl: './taskdetail.component.html',
	styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {
	
	@Input() task?: Task;

	constructor() { }

	ngOnInit(): void {
	}

}
