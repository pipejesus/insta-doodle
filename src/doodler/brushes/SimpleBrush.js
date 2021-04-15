import Brush from "./Brush";

export default class SimpleBrush extends Brush {

  init() {
    this.surface.strokeWeight(this.brushSize);
    this.surface.stroke(this.rgba.r, this.rgba.g, this.rgba.b);
    this.surface.strokeJoin('round');
    console.log('Simple Brush Initialized');
  }

  draw(prevX, prevY, currX, currY) {
    this.surface.line(prevX, prevY, currX, currY);
  }

	updateDrawingColor() {
		this.surface.stroke(this.rgba.r, this.rgba.g, this.rgba.b);
	}

}
