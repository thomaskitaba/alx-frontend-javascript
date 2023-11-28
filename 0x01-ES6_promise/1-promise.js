export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const data2 = {
      status: 200,
      body: 'Success',
    };
    if (success === true) {
      resolve(data2);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
