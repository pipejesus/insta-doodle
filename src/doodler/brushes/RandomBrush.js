import Brush from "./Brush";

export default class RandomBrush extends Brush {

  init() {
    this.surface.strokeWeight(this.brushSize);
    this.surface.stroke(40, 40, 0);
    this.surface.strokeJoin('round');
    console.log('Random Brush Initialized');
  }

  draw(prevX, prevY, currX, currY) {
		this.surface.line(prevX, prevY, currX, currY);
		this.surface.line(prevX + Math.random() * 10, prevY + Math.random() * 10, currX, currY);
  }

}

// LEGACY: RANDOM BRUSH
		// if (drawing === true) {
		// 	p5.line(prevX, prevY, currX, currY);
		// 	p5.line(prevX + Math.random() * 10, prevY + Math.random() * 10, currX, currY)
		// 	prevX = currX;
		// 	prevY = currY;
		// }
