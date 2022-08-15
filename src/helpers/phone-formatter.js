const phoneFormatter = tel => {
  const phone = tel.split('');
  phone.splice(3, '', ' (');
  phone.splice(7, '', ') ');
  phone.splice(11, '', ' ');
  phone.splice(14, '', ' ');
  return phone.join('');
};

export default phoneFormatter;
