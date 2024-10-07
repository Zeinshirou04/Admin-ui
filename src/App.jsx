import GuestLayout from "./layout/GuestLayout";
import GoogleLogo from "./assets/svg/Google.svg";

function App() {
  return (
    <GuestLayout>
      <div className="w-full h-full text-center flex flex-col justify-center items-center">
        <div className="w-1/4 p-2">
          <header className="text-center w-full text-3xl tracking-widest py-8">
            <h1 className="text-primary font-poppins">
              <span className="font-bold">FINE</span>bank.
              <span className="font-bold">IO</span>
            </h1>
          </header>
          <div className="w-full">
            <form className="flex flex-col gap-5 text-left">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full active:border-primary focus:border-primary hover:border-primary/80 transition-color duration-75 ease-in-out border-2 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-end">
                  <label htmlFor="password" className="font-medium">
                    Password
                  </label>
                  <p className="text-xs text-primary">Forgot Password?</p>
                </div>
                <input
                  type="password"
                  name="password"
                  className="w-full active:border-primary focus:border-primary hover:border-primary/80 transition-color duration-75 ease-in-out border-2 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-row gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  className="accent-primary"
                />
                <label htmlFor="remember" className="font-light text-sm">
                  Keep me signed in
                </label>
              </div>
              <input
                type="submit"
                value="Login"
                className="bg-primary text-white p-2 rounded-md"
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="w-16 h-0.5 bg-gray-200"></div>
                <p className="text-xs text-gray-400">Or Sign In With</p>
                <div className="w-16 h-0.5 bg-gray-200"></div>
              </div>
              <button className="bg-gray-200 p-2 rounded-md flex flex-row justify-center items-center gap-2">
                <img
                  src={GoogleLogo}
                  alt="Google Logo for Sign In"
                  className="h-5"
                />
                <p>Continue with Google</p>
              </button>
              <a
                href="#"
                className="text-center text-primary text-sm font-medium py-6"
              >
                Create an Account
              </a>
            </form>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}

export default App;
