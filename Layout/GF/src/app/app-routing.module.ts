import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import {AppHomeContentComponent} from './app-home-content/app-home-content.component';
import {BlogItemComponent} from './blog-item/blog-item.component';
import {FaqComponent} from './faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppHomeContentComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-item', component: BlogItemComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


