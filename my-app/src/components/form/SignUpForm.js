import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
//Bài 122: Setup giao diện form cơ bản
//Bài 123: Cài đặt và sử dụng formik vào form
//Bài 124: Validation cơ bản với formik
//Bài 125: Validation cơ bản với formik tiếp theo
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = " must be 20 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = " must be 20 characters or less";
//   }

//   return errors;
// };
//Bài 126: Validation với thư viện Yup
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log("object ~ formik", formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name..."
          className="p-4 rounded-md border border-gray-400"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div
            className="text-sm
        text-red-500"
          >
            {formik.errors.firstName}
          </div>
        ) : null}

        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name..."
          className="p-4 rounded-md border border-gray-400"
          {...formik.getFieldProps("lastName")}
          // thay cho cac dong
          /**
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
           */
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div
            className="text-sm
        text-red-500"
          >
            {formik.errors.lastName}
          </div>
        ) : null}
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
    </form>
  );
};

export default SignUpForm;
// sử dụng handleBlur và touched để đánh dấu input nào tương tác input nào chưa tương tác
// => để hiển thị validate
