import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//Bài 127: Tối ưu source code
const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="firstName">FirstName</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name..."
            className="p-4 rounded-md border border-gray-400"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="lastName">LastName</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter your last name.."
            className="p-4 rounded-md border border-gray-400"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-500
        font-semibold rounded-md
        text-white"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2;
