import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {en} from "./translations/en";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'a11y-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a11y-front';

  constructor(private readonly translate: TranslateService) {
    this.manageTranslations();
  }

  private manageTranslations() {
    // If you need to add a language, add it to the table below, and add a new "translate.setTranslation" line as well.
    const availableLanguages = ['en'];
    this.translate.setTranslation('en', en);
    this.translate.setDefaultLang(availableLanguages[0]);

    // This is a very basic language management system. It does not manage locales (en-US, en-GB, etc.), and the files
    // are imported statically. It might not scale well if we get so many translations.
    const browserLanguages = window.navigator?.languages || [];
    for (const language of browserLanguages) {
      const languageCode = language.split('-')[0]?.toLowerCase();
      if (availableLanguages.indexOf(languageCode) >= 0) {
        this.translate.use(languageCode);
        return;
      }
    }
  }
}
