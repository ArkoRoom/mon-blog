import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: "AIzaSyA44NE-2IKba9kpi4MN2Dx__Vr5qdD1T3I",
      authDomain: "mon-blog-4be45.firebaseapp.com",
      databaseURL: "https://mon-blog-4be45.firebaseio.com",
      projectId: "mon-blog-4be45",
      storageBucket: "mon-blog-4be45.appspot.com",
      messagingSenderId: "63717814851"
    };
    firebase.initializeApp(config);
  }
}
