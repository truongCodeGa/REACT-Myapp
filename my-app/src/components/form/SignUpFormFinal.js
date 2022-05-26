import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
//Bài 128: Bài tập SignUpForm - Phân tích và code giao diện
//Bài 129: Bài tập SignUpForm - Chia nhỏ và tái sử dụng components
//Bài 130: Bài tập SignUpForm - Tìm hiểu và sử dụng hook useField
//Bài 131: Bài tập SignUpForm - Tối ưu components và validtion
//Bài 132: Bài tập SignUpForm - Reset form và submitting
const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the terms and conditions"
        ),
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        console.log(actions);
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          actions.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
          >
            <MyInput
              label="Firt name"
              name="firstName"
              placeholder="Enter your first name"
              id="firstName"
            ></MyInput>
            <MyInput
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
            ></MyInput>
            <MyInput
              label="Email address"
              name="email"
              placeholder="Enter your email address"
              id="email"
              type="email"
            ></MyInput>
            <MyTextarea
              label="Introduce yourself"
              name="intro"
              placeholder="Enter your introduce"
              id="intro"
            ></MyTextarea>
            <MySelectbox label="Select your job" name="job" id="job">
              <option value="">--Chon--</option>
              <option value="frontend"> FE developer</option>
              <option value="backend"> BE developer</option>
              <option value="fullstack"> Full developer</option>
            </MySelectbox>
            <MyCheckbox name="terms" id="terms">
              <p className="pt-[-10px]">I accpept the terms and conditians</p>
            </MyCheckbox>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-blue-500
              font-semibold rounded-md
            text-white"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
//useField
//destructuring
//rest parameter ...
// spread opeartor
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(props);
  //{label, ...props}
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-400"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(props);
  //{label, ...props}
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-400 h-[150px]
        resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MySelectbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(props);
  //{label, ...props}
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        type="text"
        className="p-4 rounded-md border border-gray-400"
        {...field}
        {...props}
      ></select>
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  console.log(props);
  //{label, ...props}
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="flex item-center gap-2">
        <input className="w-4 h-[22px]" type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default SignUpFormFinal;
