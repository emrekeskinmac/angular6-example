import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layout
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout.component';

// Guard
import { AuthGuard } from './guards/auth.guard';

// Pages
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { DocsComponent } from './components/docs/docs.component';

const appRoutes: Routes = [
    {
      path: '',
      component: HomeLayoutComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: '',
          component: HomeComponent
        }
      ]
    },
    {
      path: 'docs',
      component: HomeLayoutComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: '',
          component: DocsComponent
        }
      ]
    },
    {
      path: '',
      component: LoginLayoutComponent,
      children: [
        {
          path: 'login',
          component: AuthComponent
        }
      ]
    },
    { path: '**', redirectTo: '' }
  ];


  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}
