import { Component } from '@angular/core';
// import { Response } from '@angular/http';
import { ServerService } from './server.service';
import { FormControl, FormGroup} from '@angular/forms';
import  'rxjs/Rx';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    public serverService: ServerService
    ){ }

  ngOnInit() {
    this.miForm = new FormGroup({
      universidad: new FormControl(''),
      profesor: new FormControl(''),
      comentario: new FormControl('')
    })
  }
  
  miForm: FormGroup;
  title = 'try';
  onSubmit(){
    this.serverService.storeComments(JSON.stringify(this.miForm.value))
    .subscribe(
      (response: Response) => console.log(response),
      (error) => console.log(error)
      );
    console.log(this.miForm.value);
  }
  getInfo(){
    this.serverService.getComments()
    .map(
      (response: Response) => {
        const data = response.json();
      }
      );
  }
}
