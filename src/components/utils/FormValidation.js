import validator from 'validator';

export default function validateFields(inputFields) {
  const updatedFields = [...inputFields];
  let error = false;
  updatedFields.forEach((field, index) => {
    if (field.type === 'name') {
      const validName = validator.isEmpty(field.value);
      if (validName) {
        updatedFields[index].error = 'This field cannot be empty';
        error = true;
      } else {
        updatedFields[index].error = '';
      }
    }
    if (field.type === 'mail') {
      const validName = validator.isEmail(field.value);
      if (!validName) {
        updatedFields[index].error = 'Email is incorrect';
        error = true;
      } else {
        updatedFields[index].error = '';
      }
    }
    if (field.type === 'checkbox') {
      if (!field.checked) {
        updatedFields[index].error = 'This field must be checked';
        error = true;
      } else {
        updatedFields[index].error = '';
      }
    }
    if (field.type === 'password') {
      if (!validator.isLength(field.value, { min: 5 })) {
        error = true;
        updatedFields[index].error = "Password can't be less than 5 symbols";
      } else {
        updatedFields[index].error = '';
      }
    }
  });

  return { fields: updatedFields, error: error };
}
