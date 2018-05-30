import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';

const appRoutes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'login', component: AuthComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
