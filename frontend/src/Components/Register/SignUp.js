import React,{useState} from "react";
import "./signUp.css";
import { Formik } from "formik";
import closeButton from "../../Assests/Navbar/closeButton.png";
import { registerUser } from "../../Services/userService";
const SignUp = (props) => {
  const [alert,setAlert]=useState(false)
  return (
    <div>
      <div className="popup">
        <div className="popup-inner">
          <button
            className="close-btn"
            onClick={() => {
              props.signUpPopUpHandle();
            }}
          >
            <img src={closeButton} alt="close" />
          </button>
          <div className="content">
            <div className="text-center">
              <img
                src="https://www.ugaoo.com/cdn/shop/files/greenlogo.png?height=200&v=1660383580"
                alt="logo image"
              />
            </div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                gender:""
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "Password is required";
                }
                if (!values.firstName) {
                  errors.firstName = "First Name is required";
                }
                if (!values.lastName) {
                  errors.lastName = "Last Name is required";
                }
                if (!values.gender) {
                  errors.gender = "Gender is required";
                }
                return errors;
              }}
              onSubmit={async(values) => {

              await   registerUser(values).then(res=>{
                console.log(res.data.email)
                setAlert(true)
              }).catch(err=>{
                console.log(err)
              })
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                //   setSubmitting(false);
                // }, 400);
              }} >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className=" my-5 mx-5 text-center">
                    <div className="my-3">
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder="First Name"
                        className="input"
                      />
                      <div className="my-1 text-danger">
                        {errors.firstName &&
                          touched.firstName &&
                          errors.firstName}
                      </div>
                    </div>

                    <div className="my-3">
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder="Last Name"
                        className="input"
                      />
                      <div className="my-1 text-danger">
                        {errors.lastName && touched.lastName && errors.lastName}
                      </div>
                    </div>

                    <div className="my-3">
                      <input
                        type="text"
                        name="gender"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender}
                        className="input"
                      />
                      <div className="my-1 text-danger text-center">
                        {errors.gender && touched.gender && errors.gender}
                      </div>
                    </div>
                    <div className="my-3">
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="email"
                        className="input"
                      />
                      <div className="my-1 text-danger text-center">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>

                    <div className="my-3">
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Password"
                        className="input"
                      />
                      <div className="my-1 text-danger">
                        {errors.password && touched.password && errors.password}
                      </div>
                    </div>

                    <div className="text-center ">
                      <button
                        className="my-3 button_style"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {" "}
                        Create Account{" "}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
            {alert && <div className="text-success text-center"> User with the id already exist!! </div>}
            <div className="text-center">
              Already have an account?
              <button onClick={()=>{props.loginPopUpHandle();
              props.signUpPopUpHandle()

              }} style={{ border: "none", background: "transparent" }}>
                <span className="text-success mx-1">Sign in</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
