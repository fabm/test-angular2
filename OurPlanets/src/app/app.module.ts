import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlanetsService } from './shared/planets.service';
import { BasicAutoComponent } from './shared/basic-auto';
import { MaterialModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, BasicAutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    NgxDatatableModule,
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
