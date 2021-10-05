import { Routes } from "@angular/router";
import { GraphicsCardDetailComponent } from "./components/graphics-card-detail-component/graphics-card-detail.component";
import { GraphicsCardListContainerComponent } from "./components/graphics-card-list-container/graphics-card-list-container.component";

export const routes: Routes = [
  { path: "", component: GraphicsCardListContainerComponent },
  { path: "graphics-cards/:id", component: GraphicsCardDetailComponent },
];
