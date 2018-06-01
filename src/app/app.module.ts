import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Kendo UI
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MenuModule } from '@progress/kendo-angular-menu';
import { GridModule } from '@progress/kendo-angular-grid';

// Util
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app.routing.module';

// Provider
import { AuthGuard } from "./guards/auth.guard";
import { AuthenticationService, UserService  } from "./services";
import { JwtInterceptor, fakeBackendProvider } from "./helpers";

// Layout
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout.component';

// Component
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ButtonsModule,
        LayoutModule,
        MenuModule,
        GridModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        HomeComponent,
        SidebarComponent,
        HeaderComponent,
        HomeLayoutComponent,
        LoginLayoutComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        fakeBackendProvider
    ],
})

export class AppModule { }
