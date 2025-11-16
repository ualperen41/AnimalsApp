import MainPhoto from "../components/main/main-photo";
import SignUp from "../components/main/sign-up";

const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#27277d]">
      <div className="md:w-1/2 w-full">
        <MainPhoto />
      </div>

      {/* Ekranın sol tarafı */}
      <div>
        <SignUp />
      </div>
    </div>
  );
};

export default AuthPage;
