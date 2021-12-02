import { Link } from "react-router-dom";
import LoginForm from "./components/form";

export default function () {
  return (
    <div className="flex flex-col lg:flex-row max-h-full min-h-screen font-metropolis">
      <div
        className="
        w-2/2
        lg:w-1/2
        flex flex-col flex-grow
        p-5
        items-center
        justify-center
        bg-blue-900
        text-blue-50
        bg-blue-800
      "
      >
        <div className="">IMAGE</div>
      </div>
      <div className="w-2/2 lg:w-1/2 flex flex-col flex-grow p-5 bg-blue-50">
        <div className="flex flex-col flex-grow items-center justify-center">
          <div className="w-full lg:max-w-xl text-4xl font-extrabold text-blue-800">
            <span className="text-blue-400">Arch</span>Dash
          </div>
          <LoginForm />
        </div>

        <div className="flex justify-between w-full">
          <div className="font-bold text-sm">
            Powered by: Lojik Solutions Inc
          </div>
          <div
            className="
          uppercase
          font-bold
          text-sm text-blue-600
          hover:text-blue-400
          cursor-pointer
        "
          >
            <a href="">Download App</a>
          </div>
        </div>
      </div>
    </div>
  );
}
