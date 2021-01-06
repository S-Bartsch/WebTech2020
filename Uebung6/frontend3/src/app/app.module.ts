import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './members/create/create.component';
import { ReadComponent } from './members/read/read.component';
import { UpdateComponent } from './members/update/update.component';
import { DeleteComponent } from './members/delete/delete.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { PencilSquare } from 'ngx-bootstrap-icons';
import {FormComponent} from "./members/read/form.component";

const icons = {
  PencilSquare,
  Trash,
};
@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        ReadComponent,
        UpdateComponent,
        DeleteComponent,
        FormComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
