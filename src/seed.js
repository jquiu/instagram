/* eslint-disable no-plusplus */
// NOTE: replace 'LFnX9q4dEWPyWhbZPTk3nk9KhYB2' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'LFnX9q4dEWPyWhbZPTk3nk9KhYB2',
      username: 'jenny ',
      fullName: 'jenniffer quintero',
      emailAddress: 'jenniffer54@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'eduard',
      fullName: 'eduard altamar',
      emailAddress: 'eduard@sanzio.com',
      following: [],
      followers: ['LFnX9q4dEWPyWhbZPTk3nk9KhYB2'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'johanna',
      fullName: 'Johanna Dalí',
      emailAddress: 'nana@dali.com',
      following: [],
      followers: ['LFnX9q4dEWPyWhbZPTk3nk9KhYB2'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'tina',
      fullName: 'Tina de quintero',
      emailAddress: 'tinatina@orwell.com',
      following: [],
      followers: ['LFnX9q4dEWPyWhbZPTk3nk9KhYB2'],
      dateCreated: Date.now()
    }
  ]

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k])
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/eduard/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'dali',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'orwell',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      })
  }
}

console.log('entro')