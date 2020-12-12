import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { WorksComponent } from './works/works.component'


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'works', component: WorksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
