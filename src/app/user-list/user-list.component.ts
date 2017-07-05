import { Component, OnInit } from '@angular/core';
import {APIServiceService} from '../api-service/apiservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  data_user:object[];

  constructor(private apiservice:APIServiceService) { }

  ngOnInit() {
    this.apiservice.getData()
    .subscribe(result => this.data_user = result);
  }
  
  deleteUser(index){
    this.data_user.splice(index,1);
  }

}
