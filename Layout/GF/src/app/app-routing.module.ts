import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {AppHomeContentComponent} from './app-home-content/app-home-content.component';
import {BlogItemComponent} from './blog-item/blog-item.component';
import {FaqComponent} from './faq/faq.component';
import {GuideComponent} from './guide/guide.component';
import {EventsComponent} from './events/events.component';
import {AccountComponent} from './account/account.component';
import {AddEventComponent} from './add-event/add-event.component';
import {ProfileComponent} from './profile/profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {EventsViewComponent} from './events-view/events-view.component';
import {EventItemComponent} from './event-item/event-item.component';
import {EditUserProfileComponent} from './edit-user-profile/edit-user-profile.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AboutComponent} from './about/about.component';
import {BookingComponent} from './booking/booking.component';
import {PaymentCardsComponent} from './payment-cards/payment-cards.component';
import {FinanceComponent} from './finance/finance.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: AppHomeContentComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-item', component: BlogItemComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'guide', component: GuideComponent},
    {path: 'events', component: EventsComponent},
    {path: 'account', component: AccountComponent},
    {path: 'add-event', component: AddEventComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'edit-profile', component: EditProfileComponent},
    {path: 'events-view', component: EventsViewComponent},
    {path: 'event-item', component: EventItemComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'edit-user-profile', component: EditUserProfileComponent},
    {path: 'about', component: AboutComponent},
    {path: 'booking', component: BookingComponent},
    {path: 'payment-cards', component: PaymentCardsComponent},
    {path: 'finance', component: FinanceComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


