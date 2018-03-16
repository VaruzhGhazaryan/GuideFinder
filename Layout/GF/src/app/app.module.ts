import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppHomeContentComponent } from './app-home-content/app-home-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppSignInComponent } from './app-sign-in/app-sign-in.component';
import { AppSignUpComponent } from './app-sign-up/app-sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import {NgxMaskModule} from 'ngx-mask';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NouisliderModule } from 'ng2-nouislider';


import { AppRoutingModule } from './app-routing.module';


import { BlogComponent } from './blog/blog.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { FaqComponent } from './faq/faq.component';
import { MatExpansionModule } from '@angular/material';
import { AppInlineNavbarComponent } from './app-inline-navbar/app-inline-navbar.component';
import { GuideComponent } from './guide/guide.component';
import { EventsComponent } from './events/events.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { AddEventModalComponent } from './add-event-modal/add-event-modal.component';
import { AccountComponent } from './account/account.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EventsViewComponent } from './events-view/events-view.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ChargeEventComponent } from './account/charge-event/charge-event.component';
import { ChargeSuccessComponent } from './account/charge-success/charge-success.component';
import { EventItemComponent } from './event-item/event-item.component';
import { BookProvidenceComponent } from './event-item/book-providence/book-providence.component';
import { RemoveProvidenceComponent } from './event-item/remove-providence/remove-providence.component';
import { RateEventModalComponent } from './event-item/rate-event-modal/rate-event-modal.component';
import { ScheduleModalComponent } from './event-item/schedule-modal/schedule-modal.component';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppHeaderComponent,
    AppHomeContentComponent,
    AppFooterComponent,
    AppSignInComponent,
    AppSignUpComponent,
    BlogComponent,
    BlogItemComponent,
    FaqComponent,
    AppInlineNavbarComponent,
    GuideComponent,
    EventsComponent,
    AppInlineNavbarComponent,
    HeaderSearchComponent,
    AccountComponent,
    ListComponent,
    EditComponent,
    AddEventComponent,
    AddEventModalComponent,
    ProfileComponent,
    EditProfileComponent,
    EventsViewComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    AboutComponent,
    BookingComponent,
    ChargeEventComponent,
    ChargeSuccessComponent,
    EventItemComponent,
    BookProvidenceComponent,
    RemoveProvidenceComponent,
    RateEventModalComponent,
    ScheduleModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    OwlModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MatCheckboxModule,
    HttpClientModule,
    MatDialogModule,
    MatExpansionModule,
    MatTabsModule,
    NouisliderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  entryComponents: [
    AppSignInComponent,
    AppSignUpComponent,
    ListComponent, EditComponent,
    AddEventModalComponent,
    ChargeEventComponent,
    ChargeSuccessComponent,
    BookProvidenceComponent,
    RemoveProvidenceComponent,
    RateEventModalComponent,
    ScheduleModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
