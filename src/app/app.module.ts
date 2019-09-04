import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


const config = {
    apiKey: "AIzaSyCglyPf4iiWWVUrsK4QUF-rmjPD45R99sA",
    authDomain: "uniference-main.firebaseapp.com",
    databaseURL: "https://uniference-main.firebaseio.com",
    projectId: "uniference-main",
    storageBucket: "uniference-main.appspot.com",
    messagingSenderId: "503195846332",
    appId: "1:503195846332:web:52d39b81847ba3c9"
  
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
