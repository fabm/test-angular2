import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {MessagesModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {TreeModule} from "primeng/primeng";
import {MenuModule} from 'primeng/primeng';
import { RouterModule }   from '@angular/router';
import {FieldsetModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    MessagesModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    JsonpModule,
    TreeModule,
    MenuModule,
    RouterModule.forRoot([]),
    FieldsetModule,
    SplitButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
