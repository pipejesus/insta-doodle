import Brush from "./Brush";

export default class SimpleBrush extends Brush {

  init() {
    this.surface.strokeWeight(this.brushSize);
    this.surface.stroke(this.rgba.r, this.rgba.g, this.rgba.b, this.rgba.a);
    this.surface.strokeJoin('MITER');
    console.log('Simple Brush Initialized');
  }

	applyBrushSizeToCanvas() {
		this.surface.strokeWeight(this.brushSize);
	}

  draw(prevX, prevY, currX, currY, dt) {
		this.surface.line(prevX, prevY, currX, currY);
  }

	updateDrawingColor() {
		this.surface.stroke(this.rgba.r, this.rgba.g, this.rgba.b, this.rgba.a);
	}

}
