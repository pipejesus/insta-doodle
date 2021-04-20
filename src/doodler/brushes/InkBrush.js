import Brush from "./Brush";

export default class InkBrush extends Brush {

  init() {
    this.surface.strokeWeight(this.brushSize);
    this.surface.stroke(this.rgba.r, this.rgba.g, this.rgba.b);
    this.surface.strokeJoin('round');
    console.log('Ink Brush Initialized');
  }

  draw(prevX, prevY, currX, currY, dt) {
		this.surface.line(prevX, prevY, currX, currY);
		if ( this.brushSize < this.maxBrushSize ) {
			this.brushSize = this.brushSize
			+ ( dt / 40);
			this.surface.strokeWeight(this.brushSize);
		}
  }

	updateDrawingColor() {
		this.surface.stroke(this.rgba.r, this.rgba.g, this.rgba.b);
	}

	touchStarted() {
		this.originalBrushSize = this.brushSize;
	}

	touchEnded() {
		this.brushSize = this.originalBrushSize;
		this.surface.strokeWeight(this.brushSize);
	}


}
