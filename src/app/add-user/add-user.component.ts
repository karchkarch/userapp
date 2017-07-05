import { Component, OnInit } from '@angular/core';
import {APIServiceService} from '../api-service/apiservice.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newName:string = "";
  newEmail:string = "";
  newAddress:string = "";
  newPhoneNumber:number = null;
  newCompanyName:string = "";

  constructor(private apiservice:APIServiceService) { }

  ngOnInit() {
  }

  addUser() {
    this.apiservice.user.push({"name":this.newName, "email":this.newEmail, "address":this.newAddress, "phoneNumber":this.newPhoneNumber, "companyName":this.newCompanyName})
    this.newName = "";
    this.newEmail = "";
    this.newAddress = "";
    this.newPhoneNumber = null;
    this.newCompanyName = "";
    }
}
