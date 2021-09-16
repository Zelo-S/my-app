import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
	providedIn: 'root'
})
export class ListserviceService {
	
	async createTask(task: Task){
		console.log("Object", task);
		await this.store.collection("tasks").doc().set({...task});
	}
	
	getTasks() {
		return new Promise<any>((resolve, reject) => {
			this.store.collection("tasks").snapshotChanges().
			subscribe((snapshots) => {
				resolve(snapshots);
			})
		});
	}

	constructor(private store: AngularFirestore, private auth: AngularFireAuth) { }
}

// create a class to work with
@Injectable()
export class Task{
    id!: number;
    content!: string;
    dateDue!: string;
}