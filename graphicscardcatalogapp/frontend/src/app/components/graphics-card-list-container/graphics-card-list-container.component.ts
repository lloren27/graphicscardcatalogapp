import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Store, select } from "@ngrx/store";

import { map } from "rxjs/operators";
import GraphicsCard from "./../../models/GraphicsCard.model";
import AppState from "../../state/app.state";
import * as GraphicsCardAction from "../../state/graphicsCards.actions";

@Component({
  selector: "app-graphics-card-list-container",
  templateUrl: "./graphics-card-list-container.component.html",
  styleUrls: ["./graphics-card-list-container.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphicsCardListContainerComponent implements OnInit {
  searchTerm: string = "";
  graphicsCard$: Observable<AppState>;
  graphicsCardSubscription: Subscription;
  graphicsCardList: GraphicsCard[] = [];
  graphicsCardError: Error = null;
  p: number = 1;

  constructor(
    private store: Store<{ graphicsCards: AppState }>,
    private cd: ChangeDetectorRef
  ) {
    this.graphicsCard$ = store.pipe(select("graphicsCards"));
  }

  ngOnInit() {
    this.graphicsCardSubscription = this.graphicsCard$
      .pipe(
        map((x) => {
          this.graphicsCardList = x.graphicsCards;
          this.graphicsCardError = x.GraphicsCardError;
          this.cd.markForCheck();
        })
      )
      .subscribe();

    this.store.dispatch(GraphicsCardAction.BeginGetGraphicsCardAction());
  
  }

  ngOnDestroy() {
    if (this.graphicsCardSubscription) {
      this.graphicsCardSubscription.unsubscribe();
    }
  }
}
