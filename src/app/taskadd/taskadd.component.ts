import { Component, OnInit } from '@angular/core';
import { Task, ListserviceService } from '../listservice.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
    selector: 'app-taskadd',
    templateUrl: './taskadd.component.html',
    styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent implements OnInit {
    
    content: string="";
    dateDue: string="";
    
    // adding a task, but utilizing service to do so
    addTask(): void{
        this.task.content = this.content;
        this.task.dateDue = this.dateDue
        this.listserviceService.createTask(this.task);
    }

    constructor(private task: Task, private listserviceService: ListserviceService) { }

    ngOnInit(): void {
    }

}
