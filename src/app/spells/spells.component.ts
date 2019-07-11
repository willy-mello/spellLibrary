import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { spells } from "../models/spells";

@Component({
  selector: "app-spells",
  templateUrl: "./spells.component.html",
  styleUrls: ["./spells.component.scss"]
})
export class SpellsComponent implements OnInit {
  searchForm: FormGroup;
  spells: Object;
  // searchCriteria: string;
  constructor(private data: DataService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: [""]
    });
  }
  reset() {
    this.data.getSpells().subscribe(data => {
      this.spells = data.results;
      console.log("spells data", data);
    });
  }
  ngOnInit() {
    this.reset();
  }
  // handleChange = () => {};
  onSubmit() {
    let term = this.searchForm.controls.search.value;
    this.spells = this.spells.filter(elem => {
      return elem.name.toLowerCase().includes(term.toLowerCase());
    });
  }
}
