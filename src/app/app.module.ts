import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListviewComponent } from './listview/listview.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TaskaddComponent } from './taskadd/taskadd.component'
import { Task } from './listservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent,
    TaskdetailComponent,
    TaskaddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ Task ],
  bootstrap: [AppComponent]
})
export class AppModule { }
