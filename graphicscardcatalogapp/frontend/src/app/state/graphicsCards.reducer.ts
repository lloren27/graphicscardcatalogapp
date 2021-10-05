import { createReducer, on, Action } from "@ngrx/store";

import * as GraphicsCardActions from "./graphicsCards.actions";
import AppState, { initializeState } from "./app.state";

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(GraphicsCardActions.GetGraphicsCardAction, (state) => state),

  on(
    GraphicsCardActions.SuccessGetGraphicsCardAction,
    (state: AppState, { payload }) => {
      return { ...state, graphicsCards: payload, GraphicsCardError: null };
    }
  ),
  on(
    GraphicsCardActions.ErrorGraphicsCardAction,
    (state: AppState, error: Error) => {
      console.error(error);
      return { ...state, GraphicsCardError: error };
    }
  )
);

export function GraphicsCardReducer(
  state: AppState | undefined,
  action: Action
): AppState {
  return reducer(state, action);
}
