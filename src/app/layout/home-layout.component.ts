import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
 
<div class="wrapper">

    <app-sidebar></app-sidebar>

    <div id="content">

    <router-outlet></router-outlet>

    </div>
</div>

  `,
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {}


