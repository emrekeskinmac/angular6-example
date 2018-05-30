import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Kendo UI
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { AppComponent }  from './app.component';
import { Routing }        from './app.routing';
import { AuthComponent } from './components/auth/auth.component';


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        Routing,
        BrowserAnimationsModule,
        ButtonsModule,
        LayoutModule
    ],
    declarations: [
        AppComponent,
        AuthComponent
    ],
    providers: [

    ]
})

export class AppModule { }
