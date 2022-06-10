import Formvalidation from "./FormValidation";
import UseForm from "./UseForm";

const FormSignup = () => {

  const { handleChange, handleSubmit, inputValues, formErrors, isFormSubmitted } = UseForm(Formvalidation);

  return (
    <>
      <div className="form-validation">
        <h2>Form Validation</h2>
        <div className="form">
          {Object.keys(formErrors).length === 0 && isFormSubmitted ?
            <div className="success-msg">Form Submitted successfully!!!</div>
            :
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={inputValues.username} placeholder="Username" onChange={handleChange} />
                {formErrors.username && <p className="form-error">{formErrors.username}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={inputValues.email} placeholder="Email" onChange={handleChange} />
                {formErrors.email && <p className="form-error">{formErrors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={inputValues.password} placeholder="Password" onChange={handleChange} />
                {formErrors.password && <p className="form-error">{formErrors.password}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name="password2" value={inputValues.password2} placeholder="Confirm Password" onChange={handleChange} />
                {formErrors.password2 && <p className="form-error">{formErrors.password2}</p>}
              </div>
              <div className="form-group">
                <button className="btn-primary">Submit</button>
              </div>
            </form>
          }
        </div>
      </div>
    </>
  )
}
export default FormSignup;