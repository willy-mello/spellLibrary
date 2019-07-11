import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";
import { WalletComponent } from "./wallet/wallet.component";
import { HomeComponent } from "./home/home.component";
import { SpellsComponent } from "./spells/spells.component";
import { ItemsComponent } from "./items/items.component";
import { OneItemComponent } from './one-item/one-item.component';
import { OneSpellComponent } from './one-spell/one-spell.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    WalletComponent,
    HomeComponent,
    SpellsComponent,
    ItemsComponent,
    OneItemComponent,
    OneSpellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
