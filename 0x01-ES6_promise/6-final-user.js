import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((data) => {
    const result = [];
    for (const row of data) {
      result.push({ status: row.status, value: row.value || row.reason });
    }
    return result;
  });
}
