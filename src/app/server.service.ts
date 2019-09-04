import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup } from '@angular/forms';

@Injectable()
export class ServerService{
    constructor(private http: HttpClient){}
    storeComments(commentarios: string){
        return this.http.post('https://uniference-a6c6f.firebaseio.com/comentario.json',commentarios);
    }
    getComments(){
        return this.http.get('https://uniference-a6c6f.firebaseio.com/data.json');
    }
}