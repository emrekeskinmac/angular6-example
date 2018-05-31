import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: AuthComponent },

    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
