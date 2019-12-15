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
name_user : String;
password: String;
acces: boolean;
dataUser : any;
constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.name_user = '';
    this.acces = false;
    this.password = '';
    this.statut = '';
    this.dataUser = [];
    this.loggin(this.name_user, this.password);
  }

  getUserById(name_user) {
    this.apiService.getUserById(name_user).subscribe(response => {
      console.log(response);
      this.dataUser = response;
      this.statut = response.statut;
      this.password = response.password;
    })
  }
loggin(name_user, password): boolean {
this.name_user = name_user;
this.getUserById(name_user);
if (((this.password = '') || (this.name_user = '')) && (this.dataUser = []))
return this.acces = false;
else{
if (password == this.password)
return this.acces = true;
}
}
}
