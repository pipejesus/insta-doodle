import Brush from "./Brush";

export default class SimpleBrush extends Brush {

  init() {
    this.surface.strokeWeight(this.brushSize);
    this.surface.stroke(40, 40, 0);
    this.surface.strokeJoin('round');
    console.log('Simple Brush Initialized');
  }

  draw(prevX, prevY, currX, currY) {
    this.surface.line(prevX, prevY, currX, currY);
  }

}
