import { Component, OnInit } from '@angular/core';
import { Task, ListserviceService } from '../listservice.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
	selector: 'app-listview',
	templateUrl: './listview.component.html',
	styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
	
	taskList: DocumentChangeAction<unknown>[] = [];	

	selectedTask?: Task;
	
	// setting tasks
	whenSelect(task: Task){
		this.selectedTask = task;
		console.log("Selected: " + task.id);
	}
	
	/*
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
	*/

	constructor(private listService: ListserviceService, private store: AngularFirestore, public tasks: Task) { }

	ngOnInit(): void {
		this.listService.getTasks().then(
			(res) => {
				this.taskList = res;
			})
	}

}
