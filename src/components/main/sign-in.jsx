import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5003/users");
      const users = await res.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        alert("Login Succesful");
        navigate("/home");
      } else {
        alert("Invalid informations");
      }
    } catch (err) {
      console.error("Error", err);
    }
  };
  return (
    <div className="auth-box mb-2">
      <div className="mb-10">
        <h1
          className="font-bold text-pink-100 text-3xl ml-24"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          LOGIN
        </h1>
        <h2 className="text-sm text-zinc-400">
          Please enter your password to continue
        </h2>
      </div>

      <form
        onSubmit={handleSignIn}
        className="w-3/4 flex flex-col gap-6 pt-1 pb-2"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-pink-400 hover:bg-pink-700 cursor-pointer text-white p-2 rounded-full w-30 ml-15"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
