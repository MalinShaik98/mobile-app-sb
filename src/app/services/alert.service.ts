import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async presentAlert(header: any, msg: any, buttons: any) {
    const alert = this.alertController.create({
      cssClass: "alert-service-class",
      backdropDismiss: false,
      header: header,
      message: msg,
      buttons: buttons,
    });
    (await alert).present();
  }
}
