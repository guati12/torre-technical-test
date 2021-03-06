import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonaInfoComponent } from './persona-info/persona-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportantMessageComponent } from './important-message/important-message.component';
import { IdeaMessageComponent } from './idea-message/idea-message.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonaInfoComponent,
    ImportantMessageComponent,
    IdeaMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
