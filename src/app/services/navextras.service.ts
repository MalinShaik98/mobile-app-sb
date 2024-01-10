import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NavextrasService {
  extras: any;
  constructor() {}
  public setExtras(data: any) {
    this.extras = { ...this.extras, ...data };
  }
  public getExtras() {
    return this.extras;
  }
}
