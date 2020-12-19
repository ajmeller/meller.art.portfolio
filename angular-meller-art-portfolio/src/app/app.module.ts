import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { ArchiveComponent } from './archive/archive.component';
import { AbstractComponent } from './abstract/abstract.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    WorksComponent,
    ContactComponent,
    ArchiveComponent,
    AbstractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
