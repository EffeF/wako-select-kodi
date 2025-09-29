import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PluginBaseModule, WakoProviders } from '@wako-app/mobile-sdk';

import { PluginService } from './services/plugin.service';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [TranslateModule.forRoot(), IonicStorageModule.forRoot({})],
  providers: [
    PluginService,
    ...WakoProviders,
    provideIonicAngular({
      swipeBackEnabled: true,
      backButtonText: '',
      mode: 'md',
    }),
  ],
})
export class PluginModule extends PluginBaseModule {
  static override pluginService = PluginService;
}
