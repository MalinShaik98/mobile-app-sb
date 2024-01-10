import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quick-pin",
  templateUrl: "./quick-pin.page.html",
  styleUrls: ["./quick-pin.page.scss"],
})
export class QuickPinPage implements OnInit {
  constructor() {
    console.log("quick pin");
  }
  ngOnInit() {}
}
