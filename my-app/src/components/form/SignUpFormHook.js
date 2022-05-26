import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
//Bài 133: Cài đặt thư viện React Hook Form
//Bài 134: Sử dụng React Hook Form cơ bản
//Bài 135: Validation cơ bản
//Bài 136: Sử dụng Yup cơ bản
//Bài 137: Các trạng thái trong React Hook Form p1
//Bài 138: Các trạng thái trong React Hook Form p2
//Bài 140: Tìm hiểu phương thức Reset
//Bài 141: Tìm hiểu phương thức setValues và setFocus
//Bài 142: Tìm hiểu Controller
// dùng controller để tạo những component của input, select.. để tái sử dụng
//Bài 143: Tìm hiểu useController
const schemaValidation = Yup.object({
  //string la chuỗi
  //required là bắt buộc
  //maxLength là tối đa
  firstName: Yup.string()
    .required("Please fill out this field")
    .max(10, "Must be 10 charactor or less"),
});
const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    reset,
    resetField,
    setFocus,
    setValue,
    control,
    //dirtyField: Trả về một mảng các trường đã chạm vào
    //isDirty: Kiểm tra các trường đã chạm vào
    //isSubmitSuccessful : đã submit thành công
    //isSubmitted: đã submit nhưng chưa chắc đã thành công
    //isSubmitting: khi chúng ta nhấn vào button (đang submit)
    //isValid: mọi thứ nhập trong form đã thành công (kiểm tra tính hợp lệ)
    //isValidating: đang validate từng trường một
    //submitCount: số lần chúng ta nhấn vào
    //=>(submitCount > 5 thì ko cho submit nữa)
    // khi sử dụng isValid phải thêm mode : "onChange" ở useForm
    //setValue set giá trị vào ô input khi người dùng ko biết ô input
    //    đó có dữ liệu như thế nào
    //setFocus: focus một thuộc tính, hay phần tử nào đó khi mới bắt đầu loading web
    //
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });

  // console.log("SignUpFormHook ~ errors", errors);
  // console.log("SignUpFormHook ~ errors", isSubmitting);
  console.log("SignUpFormHook ~ isValid", isValid);
  const watchShowAge = watch("showAge", false);
  const onSubmit = async (values) => {
    if (isValid) {
      console.log("send data to backend");
      //after successfuly submitted
      // then reset form
      reset({
        firstName: "evondev",
        lastName: "tuan",
        email: "",
      });
    }
    // const res = await axios.get(
    //   `https://hn.algolia.com/api/v1/search?query=react`
    // );
    // return res.data;
    // return new Promise((resolver) => {
    //   setTimeout(() => {
    //     resolver();
    //     console.log(values);
    //   }, 800);
    // });
  };
  // errors = formState.errors
  useEffect(() => {
    setFocus("lastName");
  }, [setFocus]);
  const handleSetDemoData = () => {
    setValue("firstName", "nguyen");
    setValue("lastName", "truong");
    setValue("email", "truong@gmail.com");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />
        {/* Kiểm tra nếu có errors.firstName và
        errors.firstName.type === 'required' thì in ra dòng thông báo  */}
        {errors?.firstName && (
          <div className="text-red-500">{errors.firstName?.message}</div>
        )}
        {/* {errors.firstName?.type === "max" && (
          <div className="text-red-500">{errors.firstName.message}</div>
        )} */}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name..."
          className="p-4 rounded-md border border-gray-400"
          {...register("lastName", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors.lastName?.type === "required" && (
          <div className="text-red-500">required</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="email ">Email address</label>
        <MyInput
          name="email"
          id="email"
          placeholder="Enter your email address"
          control={control}
        ></MyInput>
        {/* <input
          type="email"
          id="email "
          placeholder="Enter your email address"
          className="p-4 rounded-md border border-gray-400"
          {...register("email")}
        /> */}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input type="number" placeholder="Please enter your age" />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-500
          font-semibold rounded-md
        text-white"
        >
          {isSubmitting ? (
            <div
              className="mx-auto w-8 h-8 border-2 border-white border-t-4
        border-t-transparent rounded-full animate-spin
        "
            ></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <div>
        <button
          onClick={handleSetDemoData}
          className="p-3 bg-green-400 text-white"
        >
          Demo Data
        </button>
      </div>
    </form>
  );
};
// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md border
//         border-gray-400"
//           {...field}
//           {...props}
//         />
//         // khi sử dụng field thì react hook form sẽ hiểu là
//         //trong input sẽ có handleBlur, handleChange .....
//         //và nó sẽ lấy được value
//       )}
//     ></Controller>
//   );
// };
const MyInput = ({ control, ...props }) => {
  //Bài 143: Tìm hiểu useController
  //Bài 144: Tìm hiểu Control
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border 
        border-gray-400"
      {...field}
      {...props}
    />
    // khi sử dụng field thì react hook form sẽ hiểu là
    //trong input sẽ có handleBlur, handleChange .....
    //và nó sẽ lấy được value
  );
};
export default SignUpFormHook;
//Bài 145: Recap formik và React Hook Form(RHF)
