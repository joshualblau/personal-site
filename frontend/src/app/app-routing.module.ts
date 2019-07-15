import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WritingComponent } from './writing/writing.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'blog', component: WritingComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
