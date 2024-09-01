import { motion } from 'framer-motion';

const Page1 = () => {
  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-5 min-h-screen bg-[url(/page1.png)] lg:bg-none md:bg-none bg-center">
      <motion.div
        className="md:col-span-2 lg:col-span-3 flex flex-col justify-center px-12 py-0 md:px-20 md:py-0 h-screen"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white md:text-gray-800 tracking-wide">
          Welcome to Design Community
        </h2>
        

        <div className="mt-6 md:mt-4 lg:mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white md:text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full md:p-2 lg:p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mt-5 md:mt-4 lg:mt-6">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-white md:text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full md:p-2 lg:p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mt-5 md:mt-4 lg:mt-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white md:text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full md:p-2 lg:p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mt-3 text-gray-300 md:text-gray-400 text-xs md:text-sm">
          <ul className="ml-1 list-disc list-outside flex-wrap w-full hidden md:flex">
            <li className=" md:w-full lg:w-1/3">Use 8 or more characters</li>
            <li className="w-1/2 md:w-full lg:w-1/3">One uppercase letter</li>
            <li className="w-1/2 md:w-1/2 lg:w-1/3">One lowercase letter</li>
            <li className="w-1/2 md:w-full lg:w-1/3">One special character</li>
            <li className="w-1/2">One number</li>
          </ul>
        </div>

        <div className="mt-5 md:mt-4 lg:mt-9 flex items-center">
          <input
            type="checkbox"
            id="check"
            className="mb-3 md:mb-5 w-4 h-4 border border-gray-300 rounded-md text-blue-600 focus:ring-blue-500 focus:border-blue-500"
          />
          <label htmlFor="check" className="mt-0 md:mt-0 md:mb-5 ml-2 text-white md:text-gray-700 md:text-sm text-xs">
            I want to receive emails about the product, feature updates, events,
            and marketing promotions.
          </label>
        </div>

        <div className="mt-5 text-xs md:text-xs lg:text-sm">
          <h3 className='text-white md:text-black ml-2 md:ml-0'>
            By creating an account, you agree to the 
            {" "}<u>Terms of use</u> and <u>Privacy Policy</u>
          </h3>
        </div>

        <div className="mt-6">
          <button className="w-40 h-8 md:w-36 md:h-10 md:text-sm lg:w-40 lg:h-12 rounded-3xl bg-white md:bg-gray-300 text-black md:text-white">
            Create an account
          </button>
        </div>

        <div className="mt-3 text-sm md:text-xs lg:text-sm">
          <h4 className='text-white md:text-black'>
            Already have an account? {" "}<u>Log in</u>
          </h4>
        </div>
      </motion.div>

      <motion.div
        className="md:col-span-2 lg:col-span-2 flex items-center justify-center bg-gray-200 h-full"
        initial={{ opacity: 0, x: -20}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img
          src="/page1.png"
          alt="Design Community"
          className="w-full h-full object-cover hidden md:block"
        />
      </motion.div>
    </div>
  );
};

export default Page1;
