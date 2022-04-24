import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../apiservice.service';

@Component({
  selector: 'app-avg-marks',
  templateUrl: './avg-marks.component.html',
  styleUrls: ['./avg-marks.component.css']
})
export class AvgMarksComponent implements OnInit {

  readMarksData:any;

  constructor(private service:ApiServiceService) {
    this.getAllProcessData();
   }

   getAllProcessData(){
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>>");
      this.readMarksData=res.data;
    });
  }


  ngOnInit(): void {
  }

}
