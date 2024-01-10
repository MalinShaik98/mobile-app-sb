import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormsModule],
  providers: [{ provide: "ENVIRONMENT", useValue: environment }],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup<any>;
  submitted: boolean = false;
  auth_token: any;
  store_counters = [] as any;
  stores = [] as any;
  storeCounters = [] as any;
  storeresp: any;
  counterresp: any;

  constructor(public router: Router, private apiService: ApiService) {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      counter_id: new FormControl("", [Validators.required]),
      store_Id: new FormControl("", [Validators.required]),
    });
  }
  get controls() {
    return this.loginForm.controls;
  }
  ngOnInit() {
    console.log("malin");
  }
  forgot() {
    this.router.navigateByUrl("/forgotpassword");
  }
  onInputChange() {
    let data = this.loginForm.value;
    let email = data.username;
    console.log("emaillllll", email);

    this.apiService.emailCheck(email).subscribe((res) => {
      console.log("responseeee", res);
      let respon: any = res;
      this.storeresp = respon.response.stores;
      this.counterresp = respon.response.store_counter_dtos;

      console.log("emailresss", this.storeresp);
      console.log("emailresss", this.counterresp);
    });
  }

  // submit() {
  //   this.submitted = true;
  //   //   const authentication = {
  //   //     loginId: "posadmin@netscore.com",
  //   //     password: "admin",
  //   //   };
  //   //   const logininit = {
  //   //     // email: "posadmin@netscore.com",
  //   //     pin: 1234,
  //   //   };
  //   //   const headers = new HttpHeaders({
  //   //     Authorization: `Bearer ${this.navExtras.getExtras().token}`,
  //   //     "Content-Type": "application/json", // Set the appropriate content type
  //   //   });
  //   //   // this.httpService.authentication(authentication).subscribe((res: any) => {
  //   //   //   console.log(res);
  //   //   // });
  //   //   const apiUrl = "http://192.168.1.5:9002/authentication";
  //   //   this.http.post(apiUrl, authentication).subscribe(
  //   //     (response: any) => {
  //   //       console.log(response.token); // Handle the response data here
  //   //       this.auth_token = response.token;
  //   //       this.navExtras.setExtras({ token: response.token });
  //   //       console.log(this.auth_token);
  //   //     },
  //   //     (error) => {
  //   //       console.error(error); // Handle any errors here
  //   //     }
  //   //   );
  //   //   this.httpService
  //   //     .post("/authentication", authentication)
  //   //     .subscribe((res) => {
  //   //       console.log(res);
  //   //     });
  //   // const authentication = {
  //   //   loginId: "posadmin@netscore.com",
  //   //   password: "admin",
  //   // };
  //   // //authentication
  //   // this.httpService
  //   //   .post("/authentication", authentication, "")
  //   //   .subscribe((res: any) => {
  //   //     this.auth_token = res.access_token;
  //   //     console.log(this.auth_token);
  //   //     this.navExtras.setExtras({ token: this.auth_token });
  //   //   });
  //   //logininit
  //   const apiUrl1 = "http://192.168.1.5:9002/user-api/employeeLoginInit";
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer dksjhfsjkgfjhsgdhfgsjhdgfjhsgdfhgshdgfjhsgd`,
  //     "Content-Type": "application/json", // Set the appropriate content type
  //   });
  //   const logininit = {
  //     email: "posadmin@netscore.com",
  //     // pin: 1234,
  //   };
  //   console.log(headers);
  //   this.http.post(apiUrl1, logininit, { headers: headers }).subscribe(
  //     (res: any) => {
  //       console.log(res);
  //       console.log(res.store_counters);
  //       this.navExtras.setExtras({ store_counters: res.store_counters });
  //       this.store_counters = this.navExtras.getExtras().store_counters;
  //       console.log(this.navExtras.getExtras().store_counters);
  //       // for (let i = 0; i <= this.store_counters.length; i++) {
  //       //   this.stores = this.store_counters[i]?.stores;
  //       //   console.log("stores" + this.stores);
  //       // }
  //       // for (let i = 0; i <= this.stores.length; i++) {
  //       //   this.storeCounters = this.stores[i]?.storeCounters;
  //       //   console.log("storeCounters" + this.storeCounters);
  //       // }
  //       for (const key in this.store_counters) {
  //         if (this.store_counters.hasOwnProperty(key)) {
  //           this.stores = this.store_counters[key].stores;
  //           console.log(this.stores);
  //         }
  //         for (const key in this.stores) {
  //           if (this.stores.hasOwnProperty(key)) {
  //             this.storeCounters = this.stores[key].storeCounters;
  //             console.log(
  //               "store_counters" + JSON.stringify(this.storeCounters)
  //             );
  //           }
  //         }
  //         console.log("stores" + this.stores);

  //         console.log("store_counters" + this.storeCounters);
  //       }

  //       // for (let i = 0; i <= this.stores.length; i++) {
  //       //   this.storeCounters = this.stores[i]?.storeCounters;
  //       //   console.log("storeCounters" + this.storeCounters);
  //       // }
  //     },
  //     (error) => {
  //       console.error(error); // Handle any errors here
  //     }
  //   );

  //   this.httpService
  //     .post("/user-api/employeeLoginInit", logininit, { headers })
  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  // }

  submit() {
    this.submitted = true;

    let data = this.loginForm.value;

    console.log("dataaaaaaaaaa", data);

    this.apiService.login(data).subscribe((res) => {
      console.log("login repsonse", res);
    });
  }
}
