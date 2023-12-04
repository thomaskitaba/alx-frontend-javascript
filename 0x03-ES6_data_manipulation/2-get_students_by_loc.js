function getStudentsByLocation(myArray, myCity) {
	return myArray.filter((obj) => obj.location === myCity);
}
export default getStudentsByLocation;
