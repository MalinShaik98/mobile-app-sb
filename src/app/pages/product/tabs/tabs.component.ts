import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsComponent implements OnInit {
  public appPages = [
    { title: "Home", url: "/folder/inbox", icon: "mail" },
    { title: "Customer", url: "/folder/outbox", icon: "paper-plane" },
    { title: "Order", url: "/folder/favorites", icon: "heart" },
    { title: "Items", url: "/folder/archived", icon: "archive" },
    { title: "Register", url: "Register", icon: "trash" },
    { title: "setting", url: "/folder/spam", icon: "warning" },
    { title: "support", url: "/folder/spam", icon: "warning" },
  ];
  constructor(private alert: AlertService, private router: Router) {}

  ngOnInit() {}
  // logout() {
  //   const btn = [
  //     {
  //       text: "NO",
  //       role: "cancel",
  //       handler: () => {},
  //     },
  //     {
  //       text: "YES",
  //       handler: () => {
  //         this.router.navigate(["/end-page"]);
  //       },
  //     },
  //   ];

  //   const message = "Would you like to close the drawer?";
  //   this.alert.presentAlert("", message, btn);
  //   // this.alert.presentAlert("", "", "");
  // }
}
