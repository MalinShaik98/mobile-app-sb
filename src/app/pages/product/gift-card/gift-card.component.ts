import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router } from "@angular/router";
import { IonicModule, ModalController } from "@ionic/angular";
import { CartPage } from "../cart/cart.page";
import { NavextrasService } from "src/app/services/navextras.service";

@Component({
  selector: "app-gift-card",
  templateUrl: "./gift-card.component.html",
  styleUrls: ["./gift-card.component.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormsModule],
  // providers: [{ provide: "ENVIRONMENT", useValue: environment }],
})
export class GiftCardComponent implements OnInit {
  giftCardForm: FormGroup;
  submitted: boolean = false;
  giftItems = [] as any;
  isToggled: boolean = false;
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private router: Router,
    private navExtras: NavextrasService
  ) {
    this.giftCardForm = new FormGroup({
      from: new FormControl(),
      recipient: new FormControl(),
      email: new FormControl(),
      message: new FormControl(),
      giftAmount: new FormControl(),
      giftCode: new FormControl(),
    });
  }
  ngOnInit() {
    console.log("malin");
  }
  async closeModal() {
    // await this.modalController.dismiss(this.giftItems);
    this.router.navigateByUrl("/folder/home");
  }
  async submit() {
    this.submitted = true;
    if (this.giftCardForm.valid) {
      // console.log("form valid");
      let val = this.giftCardForm.value;
      // console.log("form" + JSON.stringify(val));
      this.giftItems.push(val);
      this.navExtras.setExtras({ giftCardDetails: this.giftItems });
      // console.log(this.giftItems);
      // this.giftCardForm.reset();
      const modal = this.modalController.create({
        component: CartPage,
      });
      (await modal).onDidDismiss().then((data) => {
        console.log(data);
        //  this.itemCount = data.data;
      });
      return (await modal).present();
    }
    // this.router.navigateByUrl("/cart");

    console.log(this.submitted);
  }
  notify(event: any) {
    this.isToggled = event.target.checked;
    console.log("toggled: " + this.isToggled);
  }
}
