import { Component, Input, OnInit } from "@angular/core";
import { IonicModule, ModalController } from "@ionic/angular";
import { CommonModule, Location } from "@angular/common";
// import { countries } from "../constants/countries";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "../../pipes/pipes.module";

@Component({
  selector: "app-common-search",
  templateUrl: "common-search.component.html",
  styleUrls: ["common-search.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
})
export class CommonSearchComponent implements OnInit {
  activeItem: number = 1;
  loading: boolean = true;
  products = [
    {
      src: "../assets/images/bottles.webp",
      itemName: "bottles",
      avl: 3,
      Price: 10,
      Quantity: 1,
      Amount: 10,
    },
    {
      src: "../assets/images/beauty.avif",
      itemName: "Beauty Products",
      avl: 2,
      Price: 20,
      Quantity: 1,
      Amount: 20,
    },
    {
      src: "../assets/images/camera.jpg",
      itemName: "Camera",
      avl: 5,
      Price: 30,
      Quantity: 1,
      Amount: 30,
    },
    {
      src: "../assets/images/coffee.jfif",
      itemName: "Coffee",
      avl: 1,
      Price: 50,
      Quantity: 1,
      Amount: 50,
    },
    {
      src: "../assets/images/Lipstick.webp",
      itemName: "Lipstick",
      avl: 4,
      Price: 40,
      Quantity: 1,
      Amount: 40,
    },
    {
      src: "../assets/images/nescafe.webp",
      itemName: "Nescafe",
      avl: 10,
      Price: 40,
      Quantity: 1,
      Amount: 40,
    },
    {
      src: "../assets/images/watch.avif",
      itemName: "Watch",
      avl: 11,
      Price: 40,
      Quantity: 1,
      Amount: 40,
    },
  ] as any;
  orders = [
    {
      orderid: "#1004",
      price: 5,
      customerName: "John Smith",
      date: "10 / 10 / 2020",
    },
    {
      orderid: "#1114",
      price: 4,
      customerName: "Emily Johnson",
      date: "11 / 11 / 2020",
    },
    {
      orderid: "#1214",
      price: 3,
      customerName: "Michael Davis",
      date: "09 / 09 / 2020",
    },
    {
      orderid: "#1314",
      price: 6,
      customerName: "Sarah Miller",
      date: "08 / 09 / 2020",
    },
  ];
  customers = [
    {
      customerName: "David Wilson",
      email: "malinshaik@gmail.com",
      phone: "9876543210",
    },
    {
      customerName: "Robert Jones",
      email: "malinshaik@gmail.com",
      phone: "9876543210",
    },
    {
      customerName: "Olivia Taylor",
      email: "malinshaik@gmail.com",
      phone: "9876543210",
    },
    {
      customerName: "William Martinez",
      email: "malinshaik@gmail.com",
      phone: "9876543210",
    },
    {
      customerName: "Sophia Anderson",
      email: "malinshaik@gmail.com",
      phone: "9876543210",
    },
  ];
  @Input("listData") listData = [] as any;
  @Input() page: any;
  // countries1 = [] as any;
  filteredList: any[] = [];
  searchData: string = "";
  data: string = "";
  constructor(
    private modalController: ModalController,
    private location: Location
  ) {}
  // async closeModal() {
  //   await this.modalController.dismiss();
  //   // this.location.back();
  // }
  isActive: boolean = false;

  toggleActive(event: any) {
    console.log(event.target.value);
    // event.color = "red";
  }
  ngOnInit() {
    // if (this.activeItem == 1) {
    //   this.listData = this.products;
    //   console.log(this.listData);
    // }
    if (this.page == "country" || this.page == "state") {
      this.filteredList = [...this.listData];
    } else if (this.activeItem == 1) {
      this.listData = this.products;
      this.filteredList = [...this.listData];
    }

    console.log(this.page);
  }
  updateActiveItem(itemNumber: number) {
    this.activeItem = itemNumber;
    if (this.activeItem == 1) {
      this.listData = this.products;
      console.log(this.listData);
      this.filteredList = [...this.listData];
    } else if (this.activeItem == 2) {
      this.listData = this.customers;
      console.log(this.listData);
      this.filteredList = [...this.listData];
    } else {
      this.listData = this.orders;
      console.log(this.listData);
      this.filteredList = [...this.listData];
    }
  }
  getItems(event: any) {
    this.loading = true;
    this.data = event.target.value;
    this.searchData = this.data;

    switch (this.page) {
      // case "countries":
      //   // for (let i = 0; i <= countries.length; i++) {

      //   // }

      //   break;
      case "countries":
      default:
        if (!event.target.value || event.target.value.length < 3) {
          this.filteredList = [...this.listData];
          return;
        } else {
          this.filteredList = [...this.listData];
          // this.loading = false;
          if (this.page == "country" || this.page == "state") {
            // if(this.page=="state" && this.page=)
            this.loading = false;
            this.filteredList = this.filteredList.filter((currentItem) => {
              return (
                // currentItem.name.indexOf(event.target.value.toLowerCase()) > -1
                currentItem.name
                  .toLowerCase()
                  .indexOf(event.target.value.toLowerCase()) > -1
              );
            });
          } else if (this.activeItem == 1) {
            this.loading = false;
            this.filteredList = this.filteredList.filter((currentItem) => {
              return (
                // currentItem.name.indexOf(event.target.value.toLowerCase()) > -1
                currentItem.itemName
                  .toLowerCase()
                  .indexOf(event.target.value.toLowerCase()) > -1
              );
            });
          } else if (this.activeItem == 2) {
            this.loading = false;
            this.filteredList = this.filteredList.filter((currentItem) => {
              return (
                // currentItem.name.indexOf(event.target.value.toLowerCase()) > -1
                currentItem.customerName
                  .toLowerCase()
                  .indexOf(event.target.value.toLowerCase()) > -1
              );
            });
          } else if (this.activeItem == 3) {
            this.loading = false;
            // this.filteredList = this.filteredList.filter(currentitemName);
            this.filteredList = this.filteredList.filter((currentItem) => {
              return (
                // currentItem.name.indexOf(event.target.value.toLowerCase()) > -1
                currentItem.orderid
                  .toLowerCase()
                  .indexOf(event.target.value.toLowerCase()) > -1
              );
            });
          }
        }
    }
  }
  async closeModal(selectedItem: any = null) {
    await this.modalController.dismiss(selectedItem);
  }
  selectedItem(item: any) {
    this.closeModal(item);
  }
}
