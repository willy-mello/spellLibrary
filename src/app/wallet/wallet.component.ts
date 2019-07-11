import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.component.html",
  styleUrls: ["./wallet.component.scss"]
})
export class WalletComponent implements OnInit {
  transactionForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  bank: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.transactionForm = this.formBuilder.group({
      gold: ["", Validators.min(0)],
      silver: ["", Validators.min(0)],
      copper: ["", Validators.min(0)]
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.transactionForm.invalid) {
      return;
    }
    this.success = true;
  }
  ngOnInit() {}
}
