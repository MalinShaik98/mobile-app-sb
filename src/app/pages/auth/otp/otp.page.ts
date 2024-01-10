import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { NavextrasService } from "src/app/services/navextras.service";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.page.html",
  styleUrls: ["./otp.page.scss"],
})
export class OtpPage implements OnInit {
  first = "";
  second = "";
  third = "";
  forth = "";
  fifth = "";
  sixth = "";
  empId: any;

  // OTP: any = {
  //   first: "",
  //   second: "",
  //   third: "",
  //   forth: "",
  //   fifth: "",
  //   sixth: "",
  // };
  constructor(
    private navExtras: NavextrasService,
    private apiService: ApiService,
    private router: Router
  ) {
    // this.route.queryParams.subscribe((_p) => {
    //   const navParams = this.router.getCurrentNavigation().extras.state;
    //   if (navParams) this.item = navParams.item;
    // });
  }

  ngOnInit() {
    console.log("malin");
  }
  otpController(event: any, next: any, prev: any, index: any) {
    console.log("values", event.target.value);

    if (index == 6) {
      console.log("submit");
    }
    if (event.target.value.length < 1 && prev) {
      prev.setFocus();
    } else if (next && event.target.value.length > 0) {
      next.setFocus();
    } else {
      // return 0;
    }
  }

  proceedVerify() {
    // console.log(
    //   this.first +
    //     "" +
    //     this.second +
    //     "" +
    //     this.third +
    //     "" +
    //     this.forth +
    //     "" +
    //     this.fifth +
    //     "" +
    //     this.sixth
    // );
    var otp =
      this.first +
      "" +
      this.second +
      "" +
      this.third +
      "" +
      this.forth +
      "" +
      this.fifth +
      "" +
      this.sixth;
    this.router.navigateByUrl("/resetpassword");

    var empId = this.navExtras.getExtras().empId;
    console.log("empId", this.navExtras.getExtras().empId);

    // response;

    var data = {
      employeeId: empId,
      otp: otp,
    };
    this.router.navigateByUrl("/resetpassword");
    this.apiService.otp(data).subscribe((res) => {
      console.log("otp responseeeeeeeeeee", res);
      var response: any = res;
      var token = response.response;

      console.log("tokennnnnnnnnnnnnnn", token);

      if (res) {
        this.navExtras.setExtras({ token: token });
        console.log("empId", this.navExtras.getExtras().token);
        this.router.navigateByUrl("/resetpassword");
      }
    });
  }
}
