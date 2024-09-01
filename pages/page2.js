const page2 = () => {
  return (
    <div className="grid grid-cols-6 min-h-screen">
      <div className="col-span-3">
        <img
          src="/page2.png"
          alt="Design Community"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="col-span-3 flex flex-col">
        <div className="px-40 py-14">
          <h2 className="text-3xl">Create an account</h2>
          <h4 className="mt-2 text-sm text-white md:text-black">
            Already have an account? <u className="cursor-pointer">Log in</u>
          </h4>
          <div className="mt-6 md:mt-4 lg:mt-6">
            <label className="block text-sm font-medium text-white md:text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-96 md:p-2 lg:p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mt-5 md:mt-4 lg:mt-6">
            <label className="block text-sm font-medium text-white md:text-gray-600">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-96 md:p-2 lg:p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mt-5 md:mt-4 lg:mt-6">
            <label className="block text-sm font-medium text-white md:text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-96 px-2 md:p-2 lg:p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <p className="mt-1 text-gray-600 text-xxs">
              Use 8 or more characters with a mix of letters,numbers, & symbols
            </p>
          </div>
          <div className="mt-5 text-sm w-72">
            <h3 className="text-gray-400 ml-2 md:ml-0">
              By creating an account, you agree our{" "}
              <u className="text-black cursor-pointer">Terms of use</u> and{" "}
              <u className="text-black cursor-pointer">Privacy Policy</u>
            </h3>
          </div>

          <div className="mt-8 w-80 h-14 border border-black rounded-3xl flex items-center">
            <input type="checkbox" id="checkbox" className="ml-8 w-4 h-4 custom-checkbox"/>
            <label className="ml-3 text-base flex items-center">
              I'm not a robot
            </label>
            <img
              className="ml-20 w-10 h-10"
              src="captcha.png"
              alt="Captcha"
            />
          </div>

          <div className="mt-6">
            <button className="w-56 h-14 rounded-3xl text-xl bg-white md:bg-gray-300 text-black md:text-white">
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page2;
