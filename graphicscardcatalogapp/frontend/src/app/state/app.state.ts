import GraphicsCard from "../models/GraphicsCard.model";

export default class AppState {
  graphicsCards: Array<GraphicsCard>;
  GraphicsCardError: Error;
}

export const initializeState = (): AppState => {
  return { graphicsCards: Array<GraphicsCard>(), GraphicsCardError: null };
};
