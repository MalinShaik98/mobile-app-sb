import { ComponentFixture, TestBed } from "@angular/core/testing";
import { QuickPinPage } from "./quick-pin.page";

describe("QuickPinPage", () => {
  let component: QuickPinPage;
  let fixture: ComponentFixture<QuickPinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuickPinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
