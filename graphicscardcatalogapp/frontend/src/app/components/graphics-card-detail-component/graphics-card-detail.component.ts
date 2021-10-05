import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { Store, select } from "@ngrx/store";
import AppState from "../../state/app.state";
import * as selectors from "../../state/graphicsCards.selectors";
import GraphicsCard from "./../../models/GraphicsCard.model";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-graphics-card-detail",
  templateUrl: "./graphics-card-detail.component.html",
  styleUrls: ["./graphics-card-detail.component.css"],
})
export class GraphicsCardDetailComponent implements OnInit {
  id: any;
  graphicsCard: GraphicsCard;
  graphicsCard$: Observable<AppState>;
  graphicsCardSubscription: Subscription;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private store: Store<{ graphicsCards: AppState }>,
    private spinner: NgxSpinnerService
  ) {
    this.graphicsCard$ = store.pipe(select("graphicsCards"));
  }

  ngOnInit() {
    let allGraphicsCards: GraphicsCard[] = [];
    this.spinner.show();
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.graphicsCardSubscription = this.graphicsCard$
        .pipe(
          map((x) => {
            allGraphicsCards = x.graphicsCards;
            const graphicsCardSelected = allGraphicsCards.filter((item) => {
              return item._id === this.id;
            });
            this.graphicsCard = graphicsCardSelected[0];
          })
        )
        .subscribe();
    });
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  ngOnDestroy() {
    if (this.graphicsCardSubscription) {
      this.graphicsCardSubscription.unsubscribe();
    }
  }
}
