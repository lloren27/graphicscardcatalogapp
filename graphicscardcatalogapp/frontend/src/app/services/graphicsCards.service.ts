import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import GraphicsCard from "../models/GraphicsCard.model";

@Injectable({
  providedIn: "root",
})
export class GraphicsCardsService {
  constructor(private http: HttpClient) {}

  BASE_URL: string = "http://localhost:3000";

  getGraphicsCards(): Observable<GraphicsCard[]> {
    return this.http.get<GraphicsCard[]>(`${this.BASE_URL}/graphics-cards`);
  }

  getGraphicsCard(id) {
    return this.http.get(`${this.BASE_URL}/graphics-cards/${id}`);
  }

  // getGraphicsCards2(): Observable<Array<GraphicsCard>> {
  //   return this.http
  //     .get<{ items: GraphicsCard[] }>(`${this.BASE_URL}/graphics-cards`)
  //     .pipe(map((books) => books.items || []));
  // }
}
