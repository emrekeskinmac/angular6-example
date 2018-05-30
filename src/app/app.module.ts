import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './components/login/login.component';
import { Routing }        from './app.routing';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        Routing
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }