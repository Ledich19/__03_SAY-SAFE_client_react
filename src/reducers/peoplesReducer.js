const initialState = [
  {
    'name': 'Уэйд',
    'lastname': 'Уинстон',
    'patronymic': 'Уилсон',
    'photo': 'data:image/jpeg;base64,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',
    'raiting': 99,
    'id': 3567345567,
    'gender': 'man',
    'follow': true,
    'isOnline': false
  },
  {
    'name': 'Джанет',
    'lastname': 'ван',
    'patronymic': 'Дайн',
    'photo': '',
    'raiting': 2,
    'id': 5363745636,
    'gender': 'woman',
    'follow': true,
    'isOnline': true
  },
  {
    'name': 'Питер',
    'lastname': 'Бенджамин',
    'patronymic': 'Паркер',
    'photo': '',
    'raiting': 3,
    'id': 574,
    'gender': 'man',
    'follow': true,
    'isOnline': true
  },
  {
    'name': 'Канг',
    'lastname': 'Саэ-пёк',
    'patronymic': '',
    'photo': '',
    'raiting': 4,
    'id': 8907587450,
    'gender': 'woman',
    'follow': false,
    'isOnline': true
  },
  {
    'name': 'Джейсон',
    'lastname': 'Диппер',
    'patronymic': 'Пайнс',
    'photo': '',
    'raiting': 5,
    'id': 890824570,
    'gender': 'man',
    'follow': false,
    'isOnline': true
  },
  {
    'name': 'Парень',
    'lastname': '',
    'patronymic': '',
    'photo': '',
    'raiting': 6,
    'id': 8569598,
    'gender': 'man',
    'follow': false,
    'isOnline': true
  },
  {
    'name': 'Ге́ральт',
    'lastname': 'Белый',
    'patronymic': 'Волк',
    'photo': '',
    'raiting': 7,
    'id': 2436624356346,
    'gender': 'man',
    'follow': false,
    'isOnline': true
  },
  {
    'name': 'Бэк',
    'lastname': '',
    'patronymic': '',
    'photo': '',
    'raiting': 8,
    'id': 2346234554,
    'gender': 'man',
    'follow': false,
    'isOnline': true
  },
  {
    'name': 'Василий',
    'lastname': 'Петрович',
    'patronymic': 'Голобородько',
    'photo': '',
    'raiting': 8,
    'id': 23464525754,
    'gender': 'man',
    'follow': false,
    'isOnline': true
  },
  {
    'name': 'Уэйд',
    'lastname': 'Уинстон',
    'patronymic': 'Уилсон',
    'photo': '',
    'raiting': 100,
    'id': 35673567,
    'gender': 'man',
    'follow': false,
    'isOnline': true
  },
  {
    'name': 'Джанет',
    'lastname': 'ван',
    'patronymic': 'Дайн',
    'photo': '',
    'raiting': 2,
    'id': 5363736,
    'gender': 'woman',
    'follow': true,
    'isOnline': true
  },
  {
    'name': 'Питер',
    'lastname': 'Бенджамин',
    'patronymic': 'Паркер',
    'photo': '',
    'raiting': 3,
    'id': 57874,
    'gender': 'man',
    'follow': false,
    'isOnline': true
  },
  {
    'name': 'Канг',
    'lastname': 'Саэ-пёк',
    'patronymic': '',
    'photo': '',
    'raiting': 4,
    'id': 89075870,
    'gender': 'woman',
    'follow': false,
    'isOnline': true
  },
  {
    'name': 'Джейсон',
    'lastname': 'Диппер',
    'patronymic': 'Пайнс',
    'photo': '',
    'raiting': 5,
    'id': 890870,
    'gender': 'man',
    'follow': true,
    'isOnline': true
  },
  {
    'name': 'Парень',
    'lastname': '',
    'patronymic': '',
    'photo': '',
    'raiting': 6,
    'id': 856978,
    'gender': 'man',
    'follow': true,
    'isOnline': true
  },
  {
    'name': 'Ге́ральт',
    'lastname': 'Белый',
    'patronymic': 'Волк',
    'photo': '',
    'raiting': 7,
    'id': 243662346,
    'gender': 'man',
    'follow': false,
    'isOnline': true
  },
  {
    'name': 'Бэк',
    'lastname': '',
    'patronymic': '',
    'photo': '',
    'raiting': 8,
    'id': 2346254,
    'gender': 'man',
    'follow': false,
    'isOnline': true
  },
  {
    'name': 'Василий',
    'lastname': 'Петрович',
    'patronymic': 'Голобородько',
    'photo': '',
    'raiting': 8,
    'id': 234645254,
    'gender': 'man',
    'follow': false,
    'isOnline': true
  }
]

const counterReducer = (state = initialState, action) => {
  // console.log(action)

  switch (action.type) {
  case 'NEW_MESSAGE':
    console.log(state)
    return state
  default:
    return state
  }

}
const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

export default counterReducer