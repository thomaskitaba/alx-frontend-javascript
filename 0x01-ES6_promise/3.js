
import { uploadPhoto, createUser } from './utils';
// import createUser from './utils';

export default function handleProfileSignup() {
  const profile = uploadPhoto();
  const user = createUser();

  profile.then((data) => console.log(data.body)).catch(() => console.log('Signup system offline'));
  user.then((data) => console.log(data.firstName + ' ' + data.lastName)).catch(() => console.log('Signup system offline'));
}
