import { Component, OnInit } from '@angular/core';
import { ListserviceService } from '../listservice.service';
import { Task } from '../listservice.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'

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

	}
	
	saveAllData(){
		const taskOb = {
			value: this.taskList
		}
		const ref = this.store.collection("tasks");
		ref.add(taskOb).then(
			(response) => { console.log(response); }
		).catch(
			(error) => { console.log(error); }
		);
	}

	constructor(private listService: ListserviceService, private store: AngularFirestore) { }

	ngOnInit(): void {
		this.getTasks();
	}

}
