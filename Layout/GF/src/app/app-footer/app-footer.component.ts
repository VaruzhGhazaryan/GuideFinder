import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  templateUrl: 'app-footer.component.html',
  styleUrls: ['app-footer.component.css'],

})
export class AppFooterComponent implements OnInit {
  lang: string;
  
  model = {
    eventCount: 1000,
    guidsCount: 200,
    citiesCount:5
  };


  constructor(private translate: TranslateService) {
    this.lang = "Русский";
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ru');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ru');
  }

  public changeLang(e, culture: string) {
    e.preventDefault();
    this.lang = e.target.innerHTML;
    this.translate.use(culture);
  }

  ngOnInit() {
  }
}
