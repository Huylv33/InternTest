import { Component, OnInit } from '@angular/core';
import { UserEntityService } from '../User/user-entity.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  isActive1: boolean = true;
  isActive2: boolean = false;
  constructor(private UserEntityService: UserEntityService) { 
    this.username = "film.test1";
  }
  toggleActiveStyle(number: number) {
    if (number == 1) {
      this.isActive1 = true;
      this.isActive2 = false;
    }
    else {
      this.isActive1 = false;
      this.isActive2 = true;
    }
  }
  ngOnInit() {
    
  }
}
