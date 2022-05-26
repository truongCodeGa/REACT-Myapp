import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";
//Bài 107,108,109: Tìm hiểu Form cơ bản trong React phần 1,2,3
//Bài 111: Tìm hiểu Form cơ bản trong React phần 5
const Form = () => {
  // const [fullname, setfullname] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  // const handleInputChange = (e) => {
  //   console.log(e.target.value);
  //   setfullname(e.target.value);
  // };
  // const handleTextareaChange = (e) => {
  //   console.log(e.target.value);
  //   setMessage(e.target.value);
  // };
  // const handleSelectChange = (e) => {
  //   console.log(e.target.value);
  //   setCountry(e.target.value);
  // };
  // const [values, setValues] = useState({
  //   fullname: "",
  //   email: "",
  //   hobby: false,
  // });
  // const handleInputChange = (e) => {
  //   // console.log(e.target.type);
  //   const type = e.target.type;
  //   setValues({
  //     ...values,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   });
  //   // if (type === "checkbox") {
  //   //   setValues({
  //   //     ...values,
  //   //     [e.target.name]: e.target.checked,
  //   //   });
  //   // } else {
  //   //   setValues({
  //   //     ...values,
  //   //     [e.target.name]: e.target.value,
  //   //   });
  //   // }
  //   // console.log(e.target.value);
  // };
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
  });
  console.log(values);
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setNameError("Your fullname is empty");
    } else {
      setNameError("");
    }
  };
  // formik + yup vs react hook form
  // regex
  return (
    <div className="p-5">
      <form onSubmit={handleSubmitForm} className="flex gap-x-3">
        <div className="flex flex-col gap-y">
          <input
            type="text"
            name="fullname"
            className="border w-full max-w-[300px]
        border-gray-300 rounded-md p-4"
            placeholder="enter you name"
            onChange={handleChange}
          />{" "}
          <br />
          <span className="text-red-400">{nameError}</span>
        </div>
        <input
          type="email"
          name="email"
          className="border w-full max-w-[300px]
        border-gray-300 rounded-md p-4"
          placeholder="enter you name address"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="p-3 
        rounded-lg bg-blue-400"
        >
          Submit
        </button>
      </form>
      {/* {message}
      <br />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        className="border w-full max-w-[300px]
        border-gray-300 rounded-md p-4"
        onChange={handleTextareaChange}
      ></textarea>{" "}
      <br />
      {country} <br />
      <select
        name="countruy"
        className="border w-full max-w-[300px]
        border-gray-300 rounded-md p-4"
        onChange={handleSelectChange}
        id=""
      >
        <option value="">chon</option>
        <option value="vietnam">VN</option>
        <option value="use">USA</option>
        <option value="japan">Japan</option>
      </select> */}
    </div>
  );
};

export default Form;
