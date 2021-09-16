import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
	providedIn: 'root'
})
export class ListserviceService {
	
	async createTask(task: Task){
		console.log("Object", task);
		await this.store.collection("tasks").doc().set({...task});
	}

	constructor(private store: AngularFirestore) { }
}

// create a class to work with
@Injectable()
export class Task{
    id!: number;
    content!: string;
    dateDue!: string;
}