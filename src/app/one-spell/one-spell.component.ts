import { Component, OnInit, Input, HostListener } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-one-spell",
  templateUrl: "./one-spell.component.html",
  styleUrls: ["./one-spell.component.scss"],
  host: { "(click)": "clickToOpen()" }
})
export class OneSpellComponent implements OnInit {
  // @HostListener("click") clickToOpen = () => {
  //   this.open = !this.open;
  //   console.log("clicked", this.open);
  // };
  @Input() url: string;
  spell: Object;
  open: boolean = false;
  disabled = false;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getSpecificSpell(this.url).subscribe(data => {
      this.spell = data;
      console.log("data", data);
    });
  }
  clickToOpen = () => {
    this.open = !this.open;
    console.log("clicked", this.open);
  };
  addToInventory = async () => {
    let exists = await localStorage.getItem("spells");
    let spellsArray;
    this.disabled = true;
    console.log("added to ionventorytoto");
    if (exists !== null) {
      spellsArray = JSON.parse(exists);
      spellsArray.push(this.spell);
      await localStorage.setItem("spells", JSON.stringify(spellsArray));
      return;
    } else {
      await localStorage.setItem("spells", JSON.stringify([this.spell]));
    }
  };
}
