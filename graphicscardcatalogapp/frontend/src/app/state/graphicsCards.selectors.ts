import { createSelector } from "@ngrx/store";
import AppState from "./app.state";

import GraphicsCard from "../models/GraphicsCard.model";

export const selectGraphicsCards = createSelector(
  (state: AppState) => state.graphicsCards,
  (graphicsCards: Array<GraphicsCard>) => graphicsCards
);
