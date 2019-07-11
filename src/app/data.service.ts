import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  thirdClick() {
    return console.log("thirdClicked");
  }
  getArmor() {
    return this.http.get("http://www.dnd5eapi.co/api/equipment");
  }
  getSpells() {
    return this.http.get("http://www.dnd5eapi.co/api/spells");
  }
  getSpecificSpell(url) {
    return this.http.get(url);
  }
  getSpecificItem(url) {
    return this.http.get(url);
  }
}
