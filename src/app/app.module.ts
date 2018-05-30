import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Kendo UI
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './components/login/login.component';
import { Routing }        from './app.routing';


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        Routing,
        ButtonsModule,
        LayoutModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [

    ]
})

export class AppModule { }