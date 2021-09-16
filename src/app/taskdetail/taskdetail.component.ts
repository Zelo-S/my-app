import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
	selector: 'app-taskdetail',
	templateUrl: './taskdetail.component.html',
	styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {
	
	@Input() task?: Task;
	
	saveData(){
		const ref = this.store.collection("individual-tasks");
		ref.add(this.task).then(
			(response) => { console.log(response); }
		).catch(
			(error) => { console.log(error); }
		);
	}

	constructor(private store: AngularFirestore) { }

	ngOnInit(): void {
	}

}
