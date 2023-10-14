import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) return;

    dispatch(updateUser({ username, password }));
    navigate("/");
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="mb-6">
        <input
          type="text"
          name="username"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="text-body-color focus:border-primary w-full rounded-md border border-[#E9EDF4] bg-[#FCFDFE] px-5 py-3 text-base placeholder-[#ACB6BE] outline-none transition focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-body-color focus:border-primary w-full rounded-md border border-[#E9EDF4] bg-[#FCFDFE] px-5 py-3 text-base placeholder-[#ACB6BE] outline-none transition focus-visible:shadow-none"
        />
      </div>
      <div className="mb-10">
        <input
          type="submit"
          className="border-primary bg-primary w-full cursor-pointer rounded-md border px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:shadow-md"
        />
      </div>
    </form>
  );
}
