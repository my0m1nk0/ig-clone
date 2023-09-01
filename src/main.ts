import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { APP_CONFIG } from './app/models/app-config';

fetchAppConfig().then((configJson: any) => {
  
  platformBrowserDynamic([{ provide: APP_CONFIG, useValue: configJson }]).bootstrapModule(AppModule)
    .catch(err => console.error(err));
})




async function fetchAppConfig(): Promise<any> {
  const stage = environment.stage
  if(stage === 'development') {
    const response = await fetch("/assets/" + stage + ".json")
    return Promise.resolve(await response.json())
  }
  
}