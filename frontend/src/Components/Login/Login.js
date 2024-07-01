import React from 'react'
import { Formik } from "formik";
import closeButton from "../../Assests/Navbar/closeButton.png";

const Login = (props) => {
  return (
    <div>
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.loginPopUpHandle();
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
              email: "",
              password: "",
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
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
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
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
          <div className="text-center">
            New here?
            <button onClick={()=>{
                props.loginPopUpHandle();
                props.signUpPopUpHandle()
            }} style={{ border: "none", background: "transparent" }}>
              <span className="text-success mx-1">Create an account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login