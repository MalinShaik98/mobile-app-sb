import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { NavextrasService } from "src/app/services/navextras.service";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.page.html",
  styleUrls: ["./forgotpassword.page.scss"],
})
export class ForgotpasswordPage implements OnInit {
  fpForm: FormGroup;
  submitted: boolean | undefined;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private navExtras: NavextrasService
  ) {
    this.fpForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  ngOnInit() {
    console.log("malin");
  }

  async submit() {
    this.submitted = true;

    console.log("submited");

    let data = this.fpForm.value;

    console.log(data);
    let email = data.email;
    console.log("emaillllll", email);

    this.apiService.forgotPassword(email).subscribe((res) => {
      console.log("response", res);
      var response: any = res;
      var empId = response.response.employee_id;

      console.log("eeeeeeeeeeeeeee", empId);

      if (response) {
        this.navExtras.setExtras({ empId: empId });
        console.log("empId", this.navExtras.getExtras().empId);
        this.router.navigateByUrl("/otp");
      }
    });

    // this.errormsg = "invalid";
  }
}
