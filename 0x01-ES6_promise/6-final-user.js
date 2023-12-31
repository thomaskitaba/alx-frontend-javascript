import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((data) => {
    const result = [];
    for (const row of data) {
      result.push({ status: row.status, value: row.value || row.reason });
    }
    console.log(result);
    return result;
  }).catch((error) => {
    console.log('Error: ', error);
    return [];
  });
}
