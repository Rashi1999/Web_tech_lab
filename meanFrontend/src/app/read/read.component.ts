import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  readData:any;

  constructor(private service:ApiServiceService) { 
    this.getAllData();
  }

  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>>");
      this.readData=res['msg'];
    });
  }

  deleteId(id:any){
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res,"Deleted");
      this.getAllData();
    });
  }

  ngOnInit(): void {
  }

}
