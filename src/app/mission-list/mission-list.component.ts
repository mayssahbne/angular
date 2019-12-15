import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import { ApiService } from '../services/api.service';
import * as pdfmake from 'pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
pdfMake = pdfFonts.pdfMake.vfs
//@ViewChild('reportContent') reportContent: ElementRef;
//@ViewChild('reportContent', {static: false}) foo: ElementRef;
  missionsData: any;
ville: string;
preparingPDF: boolean;

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

public captureScreen()
  {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }

}
