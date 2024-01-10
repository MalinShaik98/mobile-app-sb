import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { IonicModule, ModalController, ToastController } from "@ionic/angular";

import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { GiftCardComponent } from "../gift-card/gift-card.component";
import { ViewItemPage } from "../view-item/view-item.page";
import { CartPage } from "../cart/cart.page";
import { CommonSearchComponent } from "../../common/common-search/common-search.component";
import { NavextrasService } from "src/app/services/navextras.service";
import { PipesModule } from "../../pipes/pipes.module";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  itemform: FormGroup;
  itemCount: number = 0;
  cartItems = [] as any;
  items = [
    {
      src: "../assets/images/bottles.webp",
      itemName: "bottles",
      name: "item1",
      itemNumber: 0,
      qty: 0,
    },
    {
      src: "../assets/images/beauty.avif",
      itemName: "Beauty Products",
      name: "item2",
      itemNumber: 0,
      qty: 0,
    },
    {
      src: "../assets/images/camera.jpg",
      itemName: "Camera",
      name: "item3",
      itemNumber: 0,
      qty: 0,
    },
    {
      src: "../assets/images/coffee.jfif",
      itemName: "Coffee",
      name: "item4",
      itemNumber: 0,
      qty: 0,
    },
    {
      src: "../assets/images/Lipstick.webp",
      itemName: "Lipstick",
      name: "item5",
      itemNumber: 0,
      qty: 0,
    },
    {
      src: "../assets/images/nescafe.webp",
      itemName: "Nescafe",
      name: "item6",
      itemNumber: 0,
      qty: 0,
    },
    {
      src: "../assets/images/watch.avif",
      itemName: "Watch",
      name: "item7",
      itemNumber: 0,
      qty: 0,
    },
    {
      src: "../assets/images/Iphone.avif",
      itemName: "Iphone",
      name: "item8",
      itemNumber: 0,
      qty: 0,
    },
    {
      src: "../assets/images/oneplus9.webp",
      itemName: "onePlus9",
      name: "item9",
      itemNumber: 0,
      qty: 0,
    },
  ];
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private navExtras: NavextrasService,
    private router: Router,
    private toast: ToastController
  ) {
    this.itemform = new FormGroup({});
  }
  ngOnInit() {
    this.itemform = this.fb.group({});
  }
  back() {}
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
  async addItem(items: any) {
    this.cartItems.push(items);
    let toast = await this.toast.create({
      message: "Item Added",
      duration: 2500,
    });
    toast.present();
    const item = this.cartItems.find(
      (item: any) => item.itemName === items.itemName
    );
    if (item) {
      item.qty++;
    }
    const uniqueItems = Object.values(
      this.cartItems.reduce((accumulator: any, item: any) => {
        accumulator[item.name] = item;
        return accumulator;
      }, {})
    );
    this.cartItems = uniqueItems;
    this.navExtras.setExtras({ cartItems: this.cartItems });
    console.log(this.cartItems);
    this.itemCount += 1;
    console.log(this.itemCount);
  }
  async goToCart() {
    // this.router.navigateByUrl("/cart");
    const modal = this.modalController.create({
      component: CartPage,
    });
    (await modal).onDidDismiss().then((data) => {
      console.log(data);
      this.itemCount = data.data;
    });
    return (await modal).present();
  }
  async gift() {
    // const modal = this.modalController.create({
    //   component: GiftCardComponent,
    // });
    // (await modal).onDidDismiss().then((data) => {
    //   this.itemCount = data.data.length + this.itemCount;
    //   console.log(data.data.length);
    // });
    // return (await modal).present();
    this.router.navigateByUrl("/gift-card");
  }
  async openItem(item: any) {
    console.log("selected item", item);
    const modal = this.modalController.create({
      component: ViewItemPage,
      componentProps: { value: item },
    });
    (await modal).onDidDismiss().then((data) => {
      // this.itemCount = data.data.length + this.itemCount;
      //s console.log(data.data.length);
      console.log("modal dismissed data", data);
    });
    return (await modal).present();
  }

  clickPopover(event: any) {}
  addCustomer() {
    this.router.navigateByUrl("/create-customer");
  }
}
