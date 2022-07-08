const initialState = [
  {
    'personal': {
      'username': 'Gross Clarke',
      'avatar': null,
      'rating': 40,
      'isOnline': true,
      'id': '62c59248d2a67a4cb7934d39'
    },
    'id': '62c5924859caf6648982e10e',
    'date': 'Mon Jun 21 2021 14:17:55 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Goodwin Haynes',
      'avatar': null,
      'rating': 31,
      'isOnline': true,
      'id': '62c59248de0644ebb9b4872c'
    },
    'id': '62c59248a185b0d9f2682977',
    'date': 'Fri Apr 22 2022 21:08:28 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Sandoval Bean',
      'avatar': null,
      'rating': 40,
      'isOnline': false,
      'id': '62c59248bd10b3605fc285c8'
    },
    'id': '62c5924892360c6354554608',
    'date': 'Sun Mar 07 2021 03:20:12 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Nicholson Horn',
      'avatar': null,
      'rating': 32,
      'isOnline': true,
      'id': '62c59248541738e4db99eab2'
    },
    'id': '62c59248cc38036c44637c5d',
    'date': 'Mon Jan 18 2021 22:22:54 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Suarez Mccormick',
      'avatar': null,
      'rating': 30,
      'isOnline': true,
      'id': '62c592484e4f6b8402da4b0f'
    },
    'id': '62c59248c08345db34696546',
    'date': 'Tue Jan 04 2022 11:57:56 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Mcknight Klein',
      'avatar': null,
      'rating': 37,
      'isOnline': false,
      'id': '62c59248f317c7886f0ae253'
    },
    'id': '62c59248c6b021fa084c995f',
    'date': 'Tue Feb 22 2022 05:02:16 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Donaldson Livingston',
      'avatar': null,
      'rating': 26,
      'isOnline': true,
      'id': '62c592481fc245c2f4c4e787'
    },
    'id': '62c592485e7a20bbad117071',
    'date': 'Mon May 16 2022 07:28:45 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Ola Holloway',
      'avatar': null,
      'rating': 33,
      'isOnline': false,
      'id': '62c59248f61375bbcbd2f63f'
    },
    'id': '62c59248375d4ea3b5bbbe8f',
    'date': 'Sun Jun 26 2022 12:25:25 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Mcconnell Lowe',
      'avatar': null,
      'rating': 21,
      'isOnline': false,
      'id': '62c592487501c9875eadd612'
    },
    'id': '62c59248e77870990c876a12',
    'date': 'Tue Jun 14 2022 03:41:57 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Helena Michael',
      'avatar': null,
      'rating': 27,
      'isOnline': true,
      'id': '62c59248fc6c34ac0f22d725'
    },
    'id': '62c59248d4218347b063af1a',
    'date': 'Fri Jul 30 2021 22:12:10 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Marina Barnes',
      'avatar': null,
      'rating': 23,
      'isOnline': false,
      'id': '62c59248b3b1f4e66f080173'
    },
    'id': '62c592483dd8e55a2d590764',
    'date': 'Fri May 20 2022 08:33:27 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Elba Gomez',
      'avatar': null,
      'rating': 26,
      'isOnline': true,
      'id': '62c592483fa1103ae2632e15'
    },
    'id': '62c59248f428c9ddf928865f',
    'date': 'Fri Oct 01 2021 03:15:50 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Debora Calderon',
      'avatar': null,
      'rating': 39,
      'isOnline': false,
      'id': '62c592487a17b2c9acf4bfa1'
    },
    'id': '62c592487ede5b1d8a757ff6',
    'date': 'Mon May 09 2022 19:16:19 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Michael Kaufman',
      'avatar': null,
      'rating': 24,
      'isOnline': false,
      'id': '62c592480f69f3bd59624c61'
    },
    'id': '62c59248bbf7e2fdbcf7178a',
    'date': 'Fri Jan 07 2022 10:21:20 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Ashley Duke',
      'avatar': null,
      'rating': 29,
      'isOnline': false,
      'id': '62c592480675f260525bf1ce'
    },
    'id': '62c5924879d5951f3c38b1b7',
    'date': 'Wed Jul 07 2021 13:46:30 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Edwina Lee',
      'avatar': null,
      'rating': 32,
      'isOnline': true,
      'id': '62c5924834f7db47dccac378'
    },
    'id': '62c59248facdbdf11bfc3a71',
    'date': 'Mon Aug 30 2021 07:16:37 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Hurst Mcgowan',
      'avatar': null,
      'rating': 40,
      'isOnline': true,
      'id': '62c5924839d4fe45f256f4f9'
    },
    'id': '62c592487e026ce2b7b8b358',
    'date': 'Sun Aug 08 2021 07:20:33 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Charles Riggs',
      'avatar': null,
      'rating': 21,
      'isOnline': false,
      'id': '62c59248fe46859e206028bd'
    },
    'id': '62c59248bd6fc5dcedefece8',
    'date': 'Mon Dec 27 2021 06:04:44 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Dona Torres',
      'avatar': null,
      'rating': 38,
      'isOnline': false,
      'id': '62c5924854722aa87d242bae'
    },
    'id': '62c5924800049b10d4c75a33',
    'date': 'Tue Feb 22 2022 00:07:06 GMT+0300 (Москва, стандартное время)'
  },
  {
    'personal': {
      'username': 'Phillips Terrell',
      'avatar': null,
      'rating': 32,
      'isOnline': true,
      'id': '62c59248107f6d809f0793f8'
    },
    'id': '62c59248e00ac2403033c47f',
    'date': 'Sun Oct 17 2021 22:50:31 GMT+0300 (Москва, стандартное время)'
  }
]

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_DIALOGS':
    return action.dialogs
  case 'SET_RATING_FROM':
    return state
  default:
    return state
  }

}

export const setDialogs = dialogs => {
  return {
    type: 'SET_DIALOGS',
    dialogs
  }
}



export default dialogsReducer