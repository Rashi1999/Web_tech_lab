import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  getParamId:any;
  errormsg:any;
  sucessmsg:any;
  userForm=new FormGroup({
    'name':new FormControl('',Validators.required),
    'department':new FormControl('',Validators.required)
  });

  constructor(private service:ApiServiceService, private router:ActivatedRoute){}

  ngOnInit(): void {
    this.getParamId=this.router.snapshot.paramMap.get('id');
    if(this.getParamId){
      this.service.getSingleData(this.getParamId).subscribe((res)=>{
        this.userForm.patchValue({
          name:res['msg'].name,
          department:res['msg'].department
        });
      });
    }
  }

  userSubmit(){
    if(this.userForm.value){
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,"res=>=>");
        this.userForm.reset();
        this.sucessmsg="Record Successfully Enterred !!"
      })
      console.log(this.userForm.value);
    }
    else
      this.errormsg="All fields are required !!"
  }

  userUpdate(){
    console.log(this.getParamId);
    if(this.userForm.value){
      this.service.updateData(this.userForm.value, this.getParamId).subscribe((res)=>{
        console.log(res,"Updated !!");
        this.userForm.reset();
        this.sucessmsg=res.msg;
      });
    }
    else{
      this.errormsg="All fields are required !!";
    } 
  }


}
