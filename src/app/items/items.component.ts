import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
  searchForm: FormGroup;
  items: Object;
  savedItems: Object;

  constructor(private data: DataService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: [""]
    });
  }
  onSubmit() {
    let term = this.searchForm.controls.search.value;
    this.items = this.items.filter(elem => {
      return elem.name.toLowerCase().includes(term.toLowerCase());
    });
  }

  reset() {
    this.data.getArmor().subscribe(data => {
      this.items = data.results;
    });
  }

  ngOnInit() {
    this.reset();
  }
}
