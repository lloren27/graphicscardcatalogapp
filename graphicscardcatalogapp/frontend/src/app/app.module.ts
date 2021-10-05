import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { GraphicsCardDetailComponent } from "./components/graphics-card-detail-component/graphics-card-detail.component";

import { GraphicsCardListContainerComponent } from "./components/graphics-card-list-container/graphics-card-list-container.component";
import { GraphicsCardReducer } from "./state/graphicsCards.reducer";
import { GraphicsCardEffects } from "./state/graphicsCards.effects";
import { FilterPipe } from "./pipes/filter.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GraphicsCardDetailComponent,
    GraphicsCardListContainerComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ graphicsCards: GraphicsCardReducer }),
    EffectsModule.forRoot([GraphicsCardEffects]),
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
