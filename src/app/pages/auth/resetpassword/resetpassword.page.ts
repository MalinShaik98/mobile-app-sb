import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ApiService } from "src/app/services/api.service";
import { NavextrasService } from "src/app/services/navextras.service";

@Component({
  selector: "app-resetpassword",
  templateUrl: "./resetpassword.page.html",
  styleUrls: ["./resetpassword.page.scss"],
})
export class ResetpasswordPage implements OnInit {
  token = "";
  resetForm: FormGroup;
  errorcode: number | undefined;
  errormsg: any;
  submitted: boolean | undefined;
  constructor(
    private fb: FormBuilder,
    private navExtras: NavextrasService,
    private apiService: ApiService
  ) {
    this.resetForm = this.fb.group(
      {
        newPassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl(null, Validators.required),
      },
      {
        validators: this.MustMatch("newPassword", "confirmPassword"),
      }
    );
  }

  ngOnInit() {
    console.log("malin");
  }
  get controls() {
    return this.resetForm.controls;
  }
  MustMatch(controlName: string, confirmControlName: string) {
    return (Formgroup: FormGroup) => {
      const control = Formgroup.controls[controlName];
      const matchcontrol = Formgroup.controls[confirmControlName];
      if (matchcontrol.errors && !matchcontrol.errors["MustMatch"]) {
        return;
      }
      if (control.value !== matchcontrol.value) {
        matchcontrol.setErrors({ MustMatch: true });
      } else {
        matchcontrol.setErrors(null);
      }
    };
  }

  async submit() {
    let data = this.resetForm.value;
    let password = data.newPassword;
    console.log("password", password);

    this.token = this.navExtras.getExtras().token;
    console.log("token", this.navExtras.getExtras().token);

    this.submitted = true;

    console.log("submited");

    this.errormsg = "invalid";

    var body = {
      token: this.token,
      password: password,
    };

    this.apiService.resetPassword(body).subscribe((res) => {
      console.log("response", res);
    });
  }
}
