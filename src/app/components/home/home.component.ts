import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from '../../services'
import { User } from '../../models'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuItems: any[];
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

    this.menuItems = [{
      text: 'Anasayfa'
    },{
      text: 'Ödeme',
      items: [{ text: 'Gelir' }, { text: 'Gider'}]
    }, {
      text: 'Finans',
      items: [{ text: 'Toplu' }, { text: 'Tek Tek' }]
    }, {
      text: 'Çıkış Yap'
    }];

    this.loadAllUsers();

  }

  public onSelect({ item }): void {
    console.log(item);
    
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => { 
        this.users = users; 
    });
  }

}
