import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonModule } from '@angular/common';

// Kendo UI
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MenuModule } from '@progress/kendo-angular-menu';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs'; // Kendo UI Chart kütüphanesi için yüklediği modül

// App Component ve Routing
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

// Provider ve Auth Modülleri
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService, UserService  } from './services';
import { JwtInterceptor, fakeBackendProvider } from './helpers';
import { RouterModule } from '@angular/router';

// Layout
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout.component';

// Component
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DocsComponent } from './components/docs/docs.component';


@NgModule({
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ButtonsModule,
        LayoutModule,
        MenuModule,
        GridModule,
        ChartsModule,
        AngularFontAwesomeModule,
        RouterModule,
        CommonModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        HomeComponent,
        SidebarComponent,
        HeaderComponent,
        HomeLayoutComponent,
        LoginLayoutComponent,
        DocsComponent
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
    ]
})

export class AppModule { }
