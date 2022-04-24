import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { Test } from '../_services/auth.service';
import { User } from './model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private test:Test) {  }

  name: string = "";
  surname: string = "";
  username: string = "";
  password: string = "";
  email: string = "";
  phone: String = "";
  address: string = "";
  user: User;

  login() {
    this.test.saveUser(this.user).subscribe({
      next:(v)=>console.log(v),
      error:(e)=>console.log(e +"Hata alındı..."),
      complete: ()=>console.log("Kullanıcı Gönderildi"),
    });
  }
  
  onUserSave() {
    if (this.name === "" || this.surname === "" || this.username === "" || this.password === "") {
      alert("First Name - Last Name - Username - Password  alanları boş geçilemez...");
      return;
    } else {
      this.user = 
      { Name: this.name, Surname: this.surname, UserName: this.username, Password: this.password, Email: this.email, Phone: this.phone, Address: this.address };
      console.log(this.user);

      this.ClearComponents();
      this.login();
    }
  }

  ClearComponents(){
    this.name= "";
    this.surname= "";
    this.username= "";
    this.password= "";
    this.email= "";
    this.phone= "";
    this.address= "";
  };
}
