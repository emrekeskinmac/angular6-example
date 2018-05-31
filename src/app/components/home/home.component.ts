import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public menuItems: any[]
  public gridData: any[];


  constructor() { }

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

  }

  public onSelect({ item }): void {
    console.log(item);
    
  }

}
