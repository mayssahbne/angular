import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-create',
   templateUrl: './mission-create.component.html',
   styleUrls: ['./mission-create.component.css']
})
export class MissionCreateComponent implements OnInit {

  data: Mission

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Mission();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });

  }

}
