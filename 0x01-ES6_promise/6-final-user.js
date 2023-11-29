import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((data) => {
    const result = [];
    for (const row of data) {
      result.push({ status: row.status, value: data.value || data.reason });
    }
    return result;
  });
}
// NB;   returned data  by promise.all
// [
//     { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
//     { status: 'rejected', reason: Error: bob_dylan.jpg cannot be processed at uploadPhoto ... }
//   ]
