import { CommonModule } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule, ModalController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { PipesModule } from "../../pipes/pipes.module";

@Component({
  selector: "app-address-search",
  templateUrl: "./address-search.component.html",
  styleUrls: ["./address-search.component.scss"],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
  ],
})
export class AddressSearchComponent implements OnInit {
  // country;
  loading: boolean = true;
  @Input("country") country: any;
  searchData: string = "";
  filteredList: any = [];
  page: string = "";
  constructor(
    private http: HttpClient,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    console.log(this.country);
  }
  // closeModal() {}
  getItems(event: any) {
    console.log(event.target.value);
    this.filteredList = [];
    // if (event.target.value == "" || event.target.value == undefined) {
    //   this.filteredList = [];
    // } else {
    let value = event.target.value;

    console.log(event.target.value);
    // let country = this.createAddressForm.get("country")?.value;
    // let state = this.createAddressForm.get("state")?.value;
    let url = `https://api.geoapify.com/v1/geocode/autocomplete?apiKey=1b48259b810e48ddb151889f9ea58db0&limit=10&text=${value} ${this.country}`;
    this.http.get(url).subscribe((res: any) => {
      console.log("ressssssssssssss", res);
      let addressList = res.features;
      console.log(res.features);
      for (let i = 0; i <= addressList.length; i++) {
        this.filteredList.push(addressList[i]?.properties);
      }
      console.log("filterlist data" + this.filteredList);
    });
  }
  //  }
  async closeModal(selectedItem: any = null) {
    await this.modalController.dismiss(selectedItem);
  }
  selectedItem(item: any) {
    this.closeModal(item);
  }
}
