import Brush from "./Brush";

export default class SimpleBrush extends Brush {

  init() {
    this.surface.strokeWeight(this.brushSize);
    this.surface.stroke(40, 40, 0);
    this.surface.strokeJoin('round');
    console.log('Simple Brush Initialized');
  }

  drawCursor(x, y) {
    this.overlay.clear();
    this.overlay.stroke(187, 0, 27);
    this.overlay.noFill();
    this.overlay.ellipse(x, y, this.cursorSize, this.cursorSize);
    this.overlay.ellipse(x, y, this.brushSize, this.brushSize);
  }

  draw(prevX, prevY, currX, currY) {
    this.surface.line(prevX, prevY, currX, currY);
  }

}
