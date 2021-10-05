import { createAction, props } from "@ngrx/store";
import GraphicsCard from "../models/GraphicsCard.model";

export const GetGraphicsCardAction = createAction(
  "[GraphicsCard] - Get GraphicsCard"
);

export const SuccessGetGraphicsCardAction = createAction(
  "[GraphicsCard] - Sucess Get GraphicsCard",
  props<{ payload: GraphicsCard[] }>()
);

export const BeginGetGraphicsCardAction = createAction('[GraphicsCard] - Begin Get GraphicsCard');


export const ErrorGraphicsCardAction = createAction("[GraphicsCard] - Error", props<Error>());


