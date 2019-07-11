import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ItemsComponent } from "./items/items.component";
import { SpellsComponent } from "./spells/spells.component";
import { WalletComponent } from "./wallet/wallet.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "items", component: ItemsComponent },
  { path: "spells", component: SpellsComponent },
  { path: "wallet", component: WalletComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
