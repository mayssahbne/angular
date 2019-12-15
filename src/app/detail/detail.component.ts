import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from '../models/mission';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 id: String;
 data: Mission;
mission_name: string;
name_user: string;

departement : String;
  constructor(private apiService: ApiService,
              public activatedRoute: ActivatedRoute,
              public router: Router,
) {

}

  ngOnInit() {
this.id = this.activatedRoute.snapshot.params["id"];
 console.log(this.id);
this.apiService.getItem(this.id)
.subscribe(response => {
      this.data = response;
      console.log(this.data);
    })
}
}
