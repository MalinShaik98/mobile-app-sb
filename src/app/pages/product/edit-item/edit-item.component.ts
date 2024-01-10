import { CommonModule } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { IonicModule, ModalController } from "@ionic/angular";
import { AlertService } from "src/app/services/alert.service";
import { NavextrasService } from "src/app/services/navextras.service";
import { CommonSearchComponent } from "../../common/common-search/common-search.component";
import { CreateAddressPage } from "../create-address/create-address.page";
@Component({
  selector: "app-edit-item",
  templateUrl: "./edit-item.component.html",
  styleUrls: ["./edit-item.component.scss"],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditItemComponent implements OnInit {
  editItem: any;
  showCalendar = false;
  test: any;
  itemDetails = [] as any;
  newItemDetails = [] as any;
  @Input("page") page: any;
  @Input("quoteData") quoteData: any;
  @Input("orderData") orderData: any;
  constructor(
    private modalController: ModalController,
    private navExtras: NavextrasService,
    private router: Router,
    private alert: AlertService
  ) {}

  ngOnInit() {
    console.log(this.quoteData.items);
    console.log(this.quoteData);

    for (let i = 0; i <= this.quoteData.length; i++) {
      this.itemDetails = this.quoteData[i]?.items;
    }

    this.editItem = this.navExtras.getExtras()?.editItem;
    console.log(this.editItem);
    console.log(this.editItem);
    console.log(this.orderData);
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
  openCalendar(data: any) {
    this.showCalendar = !this.showCalendar;
  }
  increment(data: any) {
    debugger;
    if (this.page == "editItem") {
      this.editItem.qty = this.editItem.qty + 1;
    } else {
      data.Quantity = data.Quantity + 1;
      data.Amount = data.Price * data.Quantity;
    }
  }
  decrement(data: any) {
    if (this.page == "editItem") {
      this.editItem.qty = this.editItem.qty - 1;
    } else {
      data.Quantity = data.Quantity - 1;
      data.Amount = data.Price * data.Quantity;
    }
  }

  removeItem(data: any, itemname: any) {
    const btn = [
      {
        text: "cancel",
        role: "cancel",
        handler: () => {},
      },
      {
        text: "delete",
        handler: () => {
          if (itemname == "olditems") {
            this.itemDetails.splice(data, 1);
          } else if (itemname == "newitems") {
            this.newItemDetails.splice(data, 1);
          }
        },
      },
    ];

    const message = "Are you sure do you want to delete item?";
    this.alert.presentAlert("", message, btn);
  }
  async openSearch() {
    const modal = this.modalController.create({
      component: CommonSearchComponent,
    });
    (await modal).onDidDismiss().then((data: any) => {
      console.log(data);
      this.newItemDetails.push(data.data);
      console.log(this.newItemDetails);
    });
    return (await modal).present();
  }
  save() {
    console.log("submmited");
    // this.router.navigateByUrl("/quote-details");
    this.modalController.dismiss();
  }
  cancel() {
    this.modalController.dismiss();
  }
  async edit() {
    const modal = this.modalController.create({
      component: CreateAddressPage,
    });
    (await modal).onDidDismiss().then((data: any) => {
      console.log(data);
      this.newItemDetails.push(data.data);
      console.log(this.newItemDetails);
    });
    return (await modal).present();
  }
  onDateChange(event: any, data: any) {
    const selectedDate = event.detail.value;
    this.showCalendar = false;
  }
}
