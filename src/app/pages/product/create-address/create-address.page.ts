import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { IonicModule, ModalController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { countries } from "../../constants/countries";
import { CommonSearchComponent } from "../../common/common-search/common-search.component";
import { AddressSearchComponent } from "../../common/address-search/address-search.component";

@Component({
  selector: "app-create-address",
  templateUrl: "./create-address.page.html",
  styleUrls: ["./create-address.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CreateAddressPage implements OnInit {
  countries = [] as any;
  submitted: boolean = false;
  states = [];
  createAddressForm: FormGroup;
  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) {
    this.createAddressForm = new FormGroup({
      country: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      address1: new FormControl("", [Validators.required]),
      address2: new FormControl(""),
      city: new FormControl("", [Validators.required]),
      zipcode: new FormControl("", [Validators.required]),
    });
  }
  back() {
    this.modalController.dismiss();
  }
  ngOnInit() {
    Object.keys(countries).forEach((x) => {
      this.countries.push(countries[x]);
    });
  }
  depositType(event: any) {}
  async openSearch(type: any) {
    let componentProps = { page: type, listData: [] };
    switch (type) {
      case "country":
        componentProps.listData = this.countries;

        break;
      case "state":
        componentProps.listData = this.states;

        break;
    }
    console.log(componentProps.page);
    const modal = this.modalController.create({
      component: CommonSearchComponent,
      componentProps: componentProps,
      // componentProps: {
      //   listData: this.countries,
      //   page: type,
      // },
    });
    (await modal).onDidDismiss().then((data: any) => {
      // if (data.data.name == "United States") {
      //   let url =
      //     "https://api.geoapify.com/v1/geocode/autocomplete?apiKey=8c65b7291e204b63bbe47e4323ad92d2&limit=10&text=";
      //   console.log("ababb United States");
      //   this.http.get(url).subscribe((res: any) => {
      //     console.log(res.features);
      //     let data = res.features;
      //     console.log(data[0].properties.country);
      //     if (data[0].properties.country == "United States") {
      //       this.createAddressForm.patchValue({
      //         address1: data[0].properties.address_line1,
      //         address2: data[0].properties.address_line2,
      //         city: data[0].properties.city,

      //       });
      //     }
      //   });
      // }
      if (data !== null) {
        if (data.data != null) {
          switch (type) {
            case "country":
              this.createAddressForm.patchValue({
                country: data.data.name,
              });
              if (data.data.states) {
                console.log(this.states);
                this.states = data.data.states;
                console.log(this.states);
              } else {
                this.states = [];
              }

              break;
            case "state":
              this.createAddressForm.patchValue({
                state: data.data.name,
              });
          }
        }
      }
      console.log(data);
      // this.itemCount=data
    });
    return (await modal).present();
  }
  submit() {
    this.submitted = true;
    console.log(this.createAddressForm.value);
    console.log(this.submitted);
    console.log(this.createAddressForm.get("country")?.value);
  }
  async addressSerch() {
    let country = this.createAddressForm.get("country")?.value;
    const modal = this.modalController.create({
      component: AddressSearchComponent,
      componentProps: {
        page: "address",
        country: country,
      },
    });
    (await modal).onDidDismiss().then((data: any) => {
      console.log(data.data.address_line1);
      // this.itemCount=data
      if (data !== null) {
        if (data.data != null) {
          this.createAddressForm.patchValue({
            address1: data.data.address_line1,
            address2: data.data.address_line2,
            city: data.data.city,
            zipcode: data.data.postcode,
          });
        }
      }
    });
    return (await modal).present();
  }
  getItems(event: any) {
    let value = event.target.value;
    console.log(event.target.value);
    let country = this.createAddressForm.get("country")?.value;

    let state = this.createAddressForm.get("state")?.value;
    let url = `https://api.geoapify.com/v1/geocode/autocomplete?apiKey=1b48259b810e48ddb151889f9ea58db0&limit=10&text=${value} ${country}`;
    this.http.get(url).subscribe((res) => {
      console.log(res);
    });
  }
}
