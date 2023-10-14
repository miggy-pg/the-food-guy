import { Form as FormTag } from "react-router-dom";

export function Form() {
  return (
    <FormTag method="POST">
      <div className="mb-6">
        <input
          type="text"
          name="username"
          placeholder="Email"
          className="bordder-[#E9EDF4] text-body-color focus:border-primary w-full rounded-md border bg-[#FCFDFE] px-5 py-3 text-base placeholder-[#ACB6BE] outline-none transition focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bordder-[#E9EDF4] text-body-color focus:border-primary w-full rounded-md border bg-[#FCFDFE] px-5 py-3 text-base placeholder-[#ACB6BE] outline-none transition focus-visible:shadow-none"
        />
      </div>
      <div className="mb-10">
        <input
          type="submit"
          className="border-primary bg-primary w-full cursor-pointer rounded-md border px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:shadow-md"
        />
      </div>
    </FormTag>
  );
}
