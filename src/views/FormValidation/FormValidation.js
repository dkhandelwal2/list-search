export default function Formvalidation(value) {
  let error = {};
  let emailValidationRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i;
  if (!value.username) {
    error.username = "Please enter username"
  }
  if (!value.email) {
    error.email = "Please enter email"
  } else if (!emailValidationRegex.test(value.email)) {
    error.email = "Please enter a valid email"
  }
  if (!value.password) {
    error.password = "Please enter password"
  } else if (value.password.length > 10 || value.password.length < 4) {
    error.password = "Password length should be 4 to 10 characters"
  }
  if (!value.password2) {
    error.password2 = "Confirm password required!"
  } else if (!(value.password === value.password2)) {
    error.password2 = "Confirm password must be same as password"
  }
  return error;
}