export const loginValidation = {
  required: 'Required',
  validate: (value) => {
    if (value.match(/[0-9]/)) {
      return 'Enter valid name '
    }
    
    return true;
  }
}

export const passwordValidation = {
  required: 'Required',
  validate: (value) => {
    if (value.length < 8) {
      return 'Enter valid password '
    }
    
    return true;
  }
}