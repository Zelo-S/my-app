import { Component, OnInit } from '@angular/core';
import { ListserviceService } from '../listservice.service';
import { Task } from '../task';

@Component({
	selector: 'app-listview',
	templateUrl: './listview.component.html',
	styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
	
	taskList: Task[] = [];
	
	selectedTask?: Task;
	
	// setting tasks
	whenSelect(task: Task){
		this.selectedTask = task;
		console.log("Selected: " + task.id);
	}
	
	getTasks(): void{
		// subscribe to task list
		this.listService.getTasks().subscribe(
			taskList => this.taskList = taskList
		);
	}

	constructor(private listService: ListserviceService) { }

	ngOnInit(): void {
		this.getTasks();
	}

}
