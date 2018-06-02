import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `

<div class="wrapper">

    <app-header></app-header>
    <app-sidebar></app-sidebar>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

    <router-outlet></router-outlet>

    </main>
</div>

  `,
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {}


