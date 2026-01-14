import logo from "../assets/coffee cups.png";

const LoginForm = ({ setLoginOpen }) => {
  return (
    <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-[10000] ">
      <div className="bg-white w-[30rem] max-md:w-full max-md:h-screen h-auto rounded-3xl max-md:rounded fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg p-8 border border-gray-300 z-[100] ">
        {/* close-btn */}

        <button
          onClick={() => setLoginOpen(false)}
          className="text-4xl absolute top-4 right-4 cursor-pointer hover:text-gray-500 transition duration-300 max-md:right-6"
        >
          &times;
        </button>

        <div className="  font-[Pacifico]">
          <img
            src={logo}
            alt="Coffee Logo"
            className="w-12 mx-auto max-md:mt-12 pt-5"
          />
          <h1 className="text-xl max-md:text-lg text-[#371409] text-center mt-2 uppercase tracking-wider">
            <a href="#">Ray's Coffee</a>
          </h1>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Welcome back! Please login to continue
        </p>

        <form action="">
          {/* Email Input */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-[#371409]"
            placeholder="your@email.com"
          />

          {/* Password Input */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-[#371409]"
            placeholder="Enter your password"
          />

          <div className="flex justify-between items-center">
            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                className="mr-2 size-4 accent-indigo-500"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            {/* Forgot Password Link */}
            <div className="text-center mb-4">
              <a href="#" className="text-[#371409] hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <p className="text-center mb-4">Or continue with</p>

          {/* Social Login Buttons */}
          <div className="flex justify-center space-x-4 mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-90 transition duration-300 max-md:text-xs">
              <i className="fa-brands fa-facebook-f mr-2"></i> Facebook
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:opacity-90 transition duration-300 max-md:text-xs">
              <i className="fa-brands fa-google mr-2"></i> Google
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#371409] text-white py-2 rounded hover:opacity-90 transition duration-300 mt-4 cursor-pointer max-md:text-sm max-md:py-3"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
