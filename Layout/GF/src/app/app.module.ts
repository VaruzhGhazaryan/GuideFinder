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
    AddEventModalComponent
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
  entryComponents: [AppSignInComponent, AppSignUpComponent, ListComponent, EditComponent, AddEventModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
