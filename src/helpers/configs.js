/* eslint-disable no-control-regex */
/* eslint-disable no-useless-escape */
export const postFormConfig = {
  name: {
    required: 'Enter your name',
    minLength: {
      value: 2,
      message: 'Name must be longer than two characters',
    },
    maxLength: {
      value: 60,
      message: 'Name must be shorter than sixty characters',
    },
  },
  email: {
    required: 'Enter your name',
    minLength: {
      value: 2,
      message: 'Name must be longer than two characters',
    },
    maxLength: {
      value: 60,
      message: 'Name must be shorter than sixty characters',
    },
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: 'User email, must be a valid email according to RFC2822',
    },
  },
  phone: {
    required: 'Enter your name',
    pattern: {
      value: /^[\+]{1}380([0-9]{9})$/,
      message: 'Number should start with code of Ukraine +380',
    },
  },
  photo: {
    required: 'Photo is required',
  },
};
