import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {

  missionsData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.missionsData = [];
  }

  ngOnInit() {
    this.getAllMissions();
  }

  getAllMissions() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.missionsData = response;
    })
  }


  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllMissions();
    });
  }
}
