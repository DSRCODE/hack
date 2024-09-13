import React, { useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("user");
  return (
    <div className="Login-container  ">
      <p className="back-icon " onClick={()=>navigate("/")}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACUCAMAAADvY+hPAAAAY1BMVEX///8AAADHx8d0dHSysrLl5eVhYWEoKCji4uLU1NTv7+9SUlLZ2dnPz88lJSVsbGxbW1tNTU1mZmYzMzMMDAz19fW6urqTk5MWFhYgICAaGhrBwcEuLi6KioqkpKSdnZ09PT0Vw3bGAAACsElEQVR4nO2c207CQBRFGXqhgkLF0oJc9P+/UhFjYGbTGRPSs09z1qPxYWWyejqdVicTwzAMwzAMw1DKfH88nippi/9QdO6H+kXaJJmidr/scmmXRKrS/bHVsdJV7a44SOukUL26GxQsdLG4VXZHaaMoRekpu7W0UozKX2XnVtJOEfyWz3xIS/VT1KGy474Zhi1/s5C26gWF4WZzaa0+CqT8Rj2dK9TyjFoZtuyepbX6gC031MoKW4Zz+Z1beSQtz6iVNbaMwuB+osItP0lr9WEtD0E1lpapw7CWh0DhkIPbIoUtH7hXGSpTtwznMnfL8HGVXFlhy+Exos3lh4Nb1jeX36hXGbZsB1wPBrx4YD/gwi1zh4EmxpJbeSQtb6mH3Fhatrn8YGDLS2pl+CDlupepOE/3Xj7iJ+xmi346LM2hPG2gMmyZhlURKs/hKhOxCPvopJ2idL7yRtooAT/pqbRQAlPP+SgtlID/kZZG51xaKAH/885KWiiB4IMn9vHsXB3M5+eZtFME9AIn30lb9bJrQ+XJpJXW6uPzztPdvgG/3JSZPN39J6UcNZ3BXSAPsOnweuUC3lpW5CvdoseSNfV3lXeaXrFLvwPpUtoqQotGHvuH7y1aafqmlwqnB2yafU7DvUepcaXpRx6c0+wrDe+I0lYRYNNr8pVu0S6PvmmVc1rjbXyPmq7ZV9qaHgjYNPt+GjZNv/eAeWhsmn3k4SMEaasI1vRQwJuLyqbZpeFRb82ex2iaZr+Nq2wan+Wx56HyqHc0TbPvPXS+vkBzOpO2igAPINn/ERU8FpOWioGapv4S9gxo+iTtFCVsmt85bJr9Ijzj3xHJJ/SF273Hq7ROGjevL6j/TOGKq62phpovTBcX69r/lpOZefuRZV2u4vq7YkN+nGQYhmEYhvFvvgBkTCjAAsWZiwAAAABJRU5ErkJggg==" alt="" />
       </p>
      <div className=" login-box flex  flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="flex flex-col items-center mt-4">
          {/* Tabs */}
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 text-lg font-medium transition-colors duration-300 border-b-2 ${
                activeTab === "user"
                  ? "text-indigo-600 border-indigo-600"
                  : "text-gray-600 border-transparent hover:text-indigo-600 hover:border-indigo-600"
              }`}
              onClick={() => setActiveTab("user")}
            >
              User
            </button>

            <button
              className={`px-4 py-2 text-lg font-medium transition-colors duration-300 border-b-2 ${
                activeTab === "academy"
                  ? "text-indigo-600 border-indigo-600"
                  : "text-gray-600 border-transparent hover:text-indigo-600 hover:border-indigo-600"
              }`}
              onClick={() => setActiveTab("academy")}
            >
              Academy
            </button>

            <button
              className={`px-4 py-2 text-lg font-medium transition-colors duration-300 border-b-2 ${
                activeTab === "association"
                  ? "text-indigo-600 border-indigo-600"
                  : "text-gray-600 border-transparent hover:text-indigo-600 hover:border-indigo-600"
              }`}
              onClick={() => setActiveTab("association")}
            >
              Association
            </button>
          </div>
        </div>

        {/* ******************************* For USER*************************************8 */}
        {activeTab === "user" && (
          <>
            <div className="registerbox">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login as User/Player
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  onClick={() => navigate("/signup")}
                >
                  Register Now
                </a>
              </p>
            </div>
          </>
        )}
        {/* ******************************* For Academy*************************************8 */}
        {activeTab === "academy" && (
          <>
            <div className="registerbox">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login as a Academy
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Academy Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  onClick={() => navigate("/signup")}
                >
                  Register Now
                </a>
              </p>
            </div>
          </>
        )}
        {/* ******************************* For Accositaion*************************************8 */}
        {activeTab === "association" && (
          <>
            <div className="registerbox">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login as a Accosiation
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Accosiation Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  onClick={() => navigate("/signup")}
                >
                  Register Now
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
