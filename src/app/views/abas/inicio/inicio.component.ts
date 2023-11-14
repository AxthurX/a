import { Component } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import {
  ELocalNotificationTriggerUnit,
  LocalNotifications,
} from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  scheduled: any;
  constructor(
    private modal: ModalController,
    private platform: Platform,
    private localNotifications: LocalNotifications,
    private alertCtrl: AlertController
  ) {
    this.notificao();
    this.notificaoTrigger();

    this.localNotifications.on('click').subscribe((res) => {
      console.log('click', res);
      const msg = res.data ? res.data.mydata : '';
      setTimeout(() => {
        this.showAlert(res.title, res.text, msg);
      }, 600);
    });

    this.localNotifications.on('trigger').subscribe((res) => {
      console.log('trigger', res);
      const msg = res.data ? res.data.mydata : '';
      setTimeout(() => {
        this.showAlert(res.title, res.text, msg);
      }, 600);
    });
  }

  async showTelaDeFotos() {
    const modal = await this.modal.create({
      component: 'FotosComponent',
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaMapa() {
    const modal = await this.modal.create({
      // component: MapsComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  notificao() {
    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        id: 1,
        title: 'Liberação ',
        smallIcon: 'res://mipmap-xxhdpi/ic_launcher.png',
        icon: 'res://mipmap-xxxhdpi/ic_launcher.png',
        foreground: true,
        launch: false,
        sound: null,
        data: {
          route: 'home/liberacoes',
          id: 123,
          mydata: 'My hidden message this is',
        },
      });
    });
  }

  notificaoTrigger() {
    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        id: 2,
        title: 'Attention ',
        smallIcon: 'res://mipmap-xxhdpi/ic_launcher.png',
        icon: 'res://mipmap-xxxhdpi/ic_launcher.png',
        sound: null,
        data: {
          mydata: 'My hidden message this is',
        },
        trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
      });
    });
  }

  getAll() {
    this.localNotifications.getAll().then((res) => {
      this.scheduled = res;
      console.log(this.scheduled);
    });
  }

  showAlert(header, sub, msg) {
    debugger;
    this.alertCtrl
      .create({
        header,
        subHeader: sub,
        message: msg,
        buttons: ['ok'],
      })
      .then((alert) => alert.present);
  }
}
