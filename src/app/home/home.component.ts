import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private data: DataService) {}
  h1Style: boolean = false;
  armor: string = "";
  ngOnInit() {}
  firstClick() {
    this.h1Style = !this.h1Style;
    this.data.thirdClick();
  }
  secondClick = async () => {
    try {
      let req = await fetch("http://www.dnd5eapi.co/api/equipment/109");
      let item = await req.json();
      this.armor = await item.name;
    } catch (error) {
      console.error(error);
    }
  };
}
