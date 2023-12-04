function createInt8TypedArray(length, position, value) {
	const newArray = new Int8Array(length);
	try
	{
		newArray[position] = value;
		if (position >= length) {

		}
	}
	catch(error) {
		throw Error("Position outside range");
	}
	return newArray;

}