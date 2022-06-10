import { useState } from "react";

const UseForm = (Formvalidation) => {
  const initialValues = { username: "", email: "", password: "", password2: "" }
  const [inputValues, setInputValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value })
    // console.log(inputValues);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Formvalidation(inputValues));
    setIsFormSubmitted(true);
  }
  return { handleChange, handleSubmit, inputValues, formErrors, isFormSubmitted }

}
export default UseForm;