import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from "@angular/core";
import { IonicModule, ModalController, ToastController } from "@ionic/angular";
// import { NavExtrasService } from "../service/nav-extras.service";
// import { EditItemComponent } from "../edit-item/edit-item.component";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavextrasService } from "src/app/services/navextras.service";
import { EditItemComponent } from "../edit-item/edit-item.component";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartPage implements OnInit {
  cartItems = [] as any;
  giftItems = [] as any;
  activeItem: number = 0;
  constructor(
    private navExtras: NavextrasService,
    private modalController: ModalController,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartItems = this.navExtras.getExtras()?.cartItems;
    this.giftItems = this.navExtras.getExtras()?.giftCardDetails;
    console.log(this.giftItems);
  }
  async back() {
    const sumTotal = this.cartItems?.reduce(
      (sum: number, item: any) => sum + item.qty,
      0
    );
    await this.modalController.dismiss(sumTotal);
    // const giftTotal = this.giftItems?.length;
    // console.log(sumTotal + giftTotal);
    // const total = Number(sumTotal + giftTotal);
    // console.log(total);
    // await this.modalController.dismiss(total);
    // console.log(sumTotal);
    // this.router.navigate("./folder/home");
  }
  async editItem(item: any) {
    this.navExtras.setExtras({ editItem: item });
    const modal = this.modalController.create({
      component: EditItemComponent,
      componentProps: {
        page: "editItem",
      },
    });
    (await modal).onDidDismiss().then((data) => {});
    return (await modal).present();
  }
  async showTooltip(event: MouseEvent) {
    const popover = await this.toastController.create({
      message: "This is a tooltip",
      position: "top",
      duration: 2000,
    });
    popover.present();
  }
  editGiftItem(item: any) {}
  updateActiveItem(itemNumber: number) {
    this.activeItem = itemNumber;
  }
  addCustomer() {
    this.router.navigate(["/create-customer"]);
  }
  clickPopover() {}
}
