import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const data = await Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(fileName),
    ]);
    const result = [];
    for (const row of data) {
        result.push({ status: row.status, value: data.value || data.reason });
    }
    return result;
}
