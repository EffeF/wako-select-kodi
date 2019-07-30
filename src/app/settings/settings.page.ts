import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginLoaderService } from '@wako-app/mobile-sdk';
import { AddonSettingsComponent } from './addon-settings/addon-settings.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit {
  @ViewChild('settingsRef', {read: ViewContainerRef, static: true})
  settingsRef: ViewContainerRef;

  constructor(private pluginLoader: PluginLoaderService, private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  async addonSettings() {
    const modal = await this.modalCtrl.create({
      component: AddonSettingsComponent
    });

    modal.present();
  }
}
