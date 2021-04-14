export default class Brush {

  constructor( config ) {

    let {
      surface,
      overlay,
      brushSize,
      minBrushSize,
      maxBrushSize,
      cursorSize
    } = config;

    this.surface = surface;
		console.log('WHAT WE THINK IS SURDACE?');
		console.log(surface);
    this.overlay = overlay;
    this.brushSize = brushSize;
    this.minBrushSize = minBrushSize;
    this.maxBrushSize = maxBrushSize;
    this.cursorSize = cursorSize;
    this.init();

  }

  init() {}
	draw(prevX, prevY, currX, currY) {}

	drawCursor(x, y) {
    this.overlay.clear();
    this.overlay.stroke(187, 0, 27);
    this.overlay.noFill();
    this.overlay.ellipse(x, y, this.cursorSize, this.cursorSize);
    this.overlay.ellipse(x, y, this.brushSize, this.brushSize);
  }

	onMouseWheel(event) {
    let oldBrushSize = this.brushSize;
    if (event.deltaY < 0) {
      this.brushSize--;
      this.brushSize = Math.max( this.minBrushSize, this.brushSize );
    } else if (event.deltaY > 0) {
      this.brushSize++;
      this.brushSize = Math.min( this.brushSize, this.maxBrushSize );
    }
    if (this.brushSize != this.oldBrushSize) {
      this.surface.strokeWeight(this.brushSize);
    }
  }

}
