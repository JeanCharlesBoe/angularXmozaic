import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Button from '@mozaic-ds/web-components/public/adeo/components/button/Button.js';
if (!customElements.get('m-button')) {
  customElements.define('m-button', Button);
}

import Card from '@mozaic-ds/web-components/public/adeo/components/card/Card.js';

if (!customElements.get('m-card')) {
  customElements.define('m-card', Card);
}

import Hero from '@mozaic-ds/web-components/public/adeo/components/hero/Hero.js';

if (!customElements.get('m-hero')) {
  customElements.define('m-hero', Hero);
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
