import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((data) => {
    const result = [];
    for (const row of data) {
      result.push({ status: row.status, value: row.value || row.reason });
    }
    return result;
  }).catch((error) => {
    console.log('Error: ', error);
    return [];
  });
}
