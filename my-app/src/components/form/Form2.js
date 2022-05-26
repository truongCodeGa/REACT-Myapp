import React from "react";
import useHandleChange from "../../hooks/useHandleChange";
//Bài 107,108,109: Tìm hiểu Form cơ bản trong React phần 1,2,3
const Form2 = () => {
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

  // const handleInputChange = (e) => {
  //   // console.log(e.target.type);
  //   const type = e.target.type;
  //   setValues({
  //     ...values,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   });
  // if (type === "checkbox") {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.checked,
  //   });
  // } else {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // }
  // console.log(e.target.value);

  const { values, handleChange } = useHandleChange({});
  console.log(values);
  // Fomik vs React hook form
  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullname"
          className="border w-full max-w-[300px]
        border-gray-300 rounded-md p-4"
          placeholder="enter you name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="border w-full max-w-[300px]
        border-gray-300 rounded-md p-4"
          placeholder="enter you name address"
          onChange={handleChange}
        />
        <input type="checkbox" name="hobby" onChange={handleChange} />
      </div>
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

export default Form2;
