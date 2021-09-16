import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';
import { TASKS } from './mock-tasklist';

@Injectable({
	providedIn: 'root'
})
export class ListserviceService {
	
	getTasks(): Observable<Task[]>{
		return of(TASKS);
	}

	constructor() { }
}
