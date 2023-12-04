function createInt8TypedArray(length, position, value) {
	const newArray = new Int8Array(length);
	try:
	{
		newArray[position] = value;

	}
	catch(Error) {
		console.error(error);
	}
	return newArray;

}