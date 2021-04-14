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
  drawCursor(x, y) {}
  draw(prevX, prevY, currX, currY) {}

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
