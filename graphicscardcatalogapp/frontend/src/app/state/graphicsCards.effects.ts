import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as GraphicsCardActions from "./graphicsCards.actions";
import { GraphicsCardsService } from "./../services/graphicsCards.service";
import GraphicsCard from "./../models/GraphicsCard.model";

@Injectable()
export class GraphicsCardEffects {
  constructor(
    private graphicsCardsService: GraphicsCardsService,
    private action$: Actions
  ) {}

  GetGraphicsCards$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(GraphicsCardActions.BeginGetGraphicsCardAction),
      mergeMap((action) =>
        this.graphicsCardsService.getGraphicsCards().pipe(
          map((data: GraphicsCard[]) => {
            return GraphicsCardActions.SuccessGetGraphicsCardAction({
              payload: data,
            });
          }),
          catchError((error: Error) => {
            return of(GraphicsCardActions.ErrorGraphicsCardAction(error));
          })
        )
      )
    )
  );
}
