import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule, ModalController, NavParams } from "@ionic/angular";
import { CommonSearchComponent } from "../../common/common-search/common-search.component";
// import { CommonSearchComponent } from "../common-search/common-search.component";

@Component({
  selector: "app-view-item",
  templateUrl: "./view-item.page.html",
  styleUrls: ["./view-item.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ViewItemPage implements OnInit {
  type: any;
  qty: number = 0;
  values: any;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {
    this.type = "description";
    this.values = this.navParams.get("value");
  }
  ngOnInit() {
    //console.log("modal data", this.value);
    //this.modalController.dismiss(this.values, "Test");
  }
  decrement() {
    if (this.qty == 0) {
    } else {
      this.qty = this.qty - 1;
    }
  }
  increment() {
    this.qty = this.qty + 1;
  }
  typeChanged(event: any) {
    this.type = event.target.value;
    console.log(this.type);
  }
  async openSearch() {
    const modal = this.modalController.create({
      component: CommonSearchComponent,
    });
    (await modal).onDidDismiss().then((data) => {
      console.log(data);
      // this.itemCount=data
    });
    return (await modal).present();
  }
  close() {
    this.modalController.dismiss();
  }
}
