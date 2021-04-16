export default class Undo {

	constructor(currentPicture) {
		this.storage = [];
		this.maxItems = 10; //todo
		this.current = 0;
		this.clear();
		this.add(currentPicture);
	}

	clear() {
		this.storage = [];
		this.current = 0;
	}

	// [x] [] [] []
	add(pictureData) {
		if (this.current < this.storage.length - 1 ) {
			this.storage = this.storage.slice(0, this.current + 1);
		}
		this.storage.push(pictureData);
		this.current = this.storage.length - 1;
		console.log('ADDED, CURRENT: ' + this.current);
		return this.current;
	}

	forward() {
		let whichOne = this.current + 1;
		if (whichOne > this.storage.length - 1) {
			whichOne = this.storage.length - 1;
		}
		this.current = whichOne;
		return this.storage[whichOne];
	}

	back() {
		let whichOne = (this.current) - 1;
		if ( whichOne < 0 ) {
			whichOne = 0;
		}
		this.current = whichOne;
		return this.storage[whichOne];
	}
}
