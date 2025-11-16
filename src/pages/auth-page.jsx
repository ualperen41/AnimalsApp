import { useState } from "react";
import MainPhoto from "../components/main/main-photo";
import SignUp from "../components/main/sign-up";
import SignIn from "../components/main/sign-in";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#27277d]">
      <div className="md:w-1/2 w-full ">
        <MainPhoto />
      </div>

      {/* Ekranın sol tarafı */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8">
        {isSignUp ? <SignUp /> : <SignIn />}
        {/* geçiş butonu */}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="mt-6 text-sm text-white"
        >
          {isSignUp ? (
            <>
              Already have an account?
              <span className="underline cursor-pointer text-pink-400 hover:text-pink-600">
                Sign In
              </span>
            </>
          ) : (
            <>
              No account yet?
              <span className="underline cursor-pointer text-pink-400 hover:text-pink-600">
                Create Account
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
