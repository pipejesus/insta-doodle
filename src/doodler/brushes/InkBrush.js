import Calculations from '../utils/Calculations';
import Brush from "./Brush";

export default class InkBrush extends Brush {

  init() {
    this.surface.strokeWeight(this.brushSize);
    this.surface.stroke(this.rgba.r, this.rgba.g, this.rgba.b, this.rgba.a);
    this.surface.strokeJoin('round');
		this.distanceTravelled = 0;
		this.timePassed = 0;
    console.log('Ink Brush Initialized');
  }

	applyBrushSizeToCanvas() {
		this.surface.strokeWeight(this.brushSize);
	}

	resetDistanceTravelled() {
		this.distanceTravelled = 0;
		this.timePassed = 0;
	}

	updateDistanceTravelled(prevX, prevY, currX, currY, dt) {
		this.timePassed += dt;
		this.distanceTravelled += Calculations.distance(prevX, prevY, currX, currY, dt);
	}

  draw(prevX, prevY, currX, currY, dt) {
		this.updateDistanceTravelled(prevX, prevY, currX, currY, dt);
		let distDeltaRatio = this.distanceTravelled / this.timePassed;

		this.brushSize = this.brushSize + distDeltaRatio;
		if ( this.brushSize > this.maxBrushSize ) {
			this.brushSize = this.maxBrushSize;
		}

		this.surface.strokeWeight(this.brushSize);
		this.surface.line(prevX, prevY, currX, currY);
  }

	updateDrawingColor() {
		this.surface.stroke(this.rgba.r, this.rgba.g, this.rgba.b, this.rgba.a);
	}

	touchStarted() {
		this.originalBrushSize = this.brushSize;
		this.resetDistanceTravelled();
	}

	touchEnded() {
		this.brushSize = this.originalBrushSize;
		this.surface.strokeWeight(this.brushSize);
		this.resetDistanceTravelled();
	}


}
