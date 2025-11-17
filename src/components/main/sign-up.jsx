import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const newUser = { name, surname, email, password };

    try {
      const res = await fetch("http://localhost:5003/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (res.ok) {
        alert("Account created succesfully");
      } else {
        alert("Failed to create account");
      }
    } catch (err) {
      console.error("Error", err);
    }
  };

  return (
    <div className="auth-box">
      <div className="flex flex-col mb-5">
        <h1 className="text-4xl font-bold">Welcome!</h1>
        <h2 className="text-zinc-400">Please fill in the blanks</h2>
      </div>

      <form onSubmit={handleSignUp} className="w-3/4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Surname"
          className="p-2 border rounded"
          value={surname}
          onChange={(e) => setSurName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-pink-400 text-white p-2 rounded-full cursor-pointer"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
