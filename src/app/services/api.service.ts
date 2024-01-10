import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseurl = "http://192.168.1.5:8096/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // Authorization: "Bearer " + authToken, // Replace with your token
    }),
  };

  constructor(private http: HttpClient) {}

  emailCheck(user_name: any) {
    console.log("usernamee", user_name);
    return this.http.get(
      this.baseurl + "pos-employees/" + user_name + "/stores"
    );
  }
  login(body: any) {
    console.log("request body", body);
    return this.http.post(this.baseurl + "pos-employees", body);
  }

  forgotPassword(username: any) {
    let formData = new FormData();
    console.log("usernamee", username);
    return this.http.post(
      this.baseurl + "pos-employees/" + username + "/otp",
      formData
    );
  }

  otp(body: any) {
    console.log("request body", body);
    return this.http.post(this.baseurl + "pos-employees/otpValidation", body);
  }

  resetPassword(body: any) {
    console.log("request body", body);
    return this.http.post(this.baseurl + "/pos-employees/reset-Password", body);
  }
}
