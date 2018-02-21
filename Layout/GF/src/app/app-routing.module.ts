import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./blog/blog.component";
import {AppHomeContentComponent} from "./app-home-content/app-home-content.component";
import {BlogItemComponent} from "./blog-item/blog-item.component";
import {FaqComponent} from "./faq/faq.component";
import {GuideComponent} from "./guide/guide.component";
import {EventsComponent} from "./events/events.component";
import {AddEventComponent} from "./add-event/add-event.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: AppHomeContentComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-item', component: BlogItemComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'guide', component: GuideComponent},
    {path: 'events', component: EventsComponent},
    {path: 'add-event', component: AddEventComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


