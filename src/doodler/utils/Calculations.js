const Calculations = {
	distance(prevX, prevY, currX, currY, dt) {
		return Math.sqrt( Math.pow(prevX - currX, 2) + Math.pow(prevY - currY, 2) );
	}
}
export default Calculations;
