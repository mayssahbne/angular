import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-authetification',
  templateUrl: './user-authetification.component.html',
  styleUrls: ['./user-authetification.component.css']
})
export class UserAuthetificationComponent implements OnInit {
statut : String;
nameuser : String;
password: String;
acces: boolean;
dataUser : any;
constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.nameuser = '';
    this.acces = false;
    this.password = '';
    this.statut = '';
    this.dataUser = [];
    this.acces = this.loggin(this.nameuser, this.password);
  }

  getUserById(nameuser) {
    this.apiService.getUserById(nameuser).subscribe(response => {
      console.log(response);
      this.dataUser = response;
      this.statut = response.statut;
      this.password = response.password;
    })
  }
loggin(nameuser, password): boolean {
this.nameuser = nameuser;
this.getUserById(nameuser);
if (((password = '') || (this.nameuser = '')) && (this.dataUser = []))
return this.acces = false;
else{
if (password == this.password)
return this.acces = true;
}
}
}
