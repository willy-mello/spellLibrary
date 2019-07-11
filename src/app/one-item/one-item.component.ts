import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-one-item",
  templateUrl: "./one-item.component.html",
  styleUrls: ["./one-item.component.scss"]
})
export class OneItemComponent implements OnInit {
  @Input() url: string;
  item: Object;
  open: boolean = false;
  disabled = false;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getSpecificItem(this.url).subscribe(data => {
      this.item = data;
      console.log("data", data);
    });
  }
  clickToOpen = () => {
    this.open = !this.open;
    console.log("clicked", this.open);
  };
  addToInventory = async () => {
    let exists = await localStorage.getItem("items");
    let itemsArray;
    this.disabled = true;
    console.log("added to ionventorytoto");
    if (exists !== null) {
      itemsArray = JSON.parse(exists);
      itemsArray.push(this.item);
      await localStorage.setItem("items", JSON.stringify(itemsArray));
      return;
    } else {
      await localStorage.setItem("items", JSON.stringify([this.item]));
    }
  };
}
