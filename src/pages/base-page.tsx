import { FC, useEffect } from "react";
import Logo from "../components/logo";
import Header from "../containers/header";
import Footer from "../containers/footer";
import SideBar from "../containers/side-bar/side-bar";

const BasePage: FC = ({ children }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row max-h-full min-h-screen font-metropolis">
        <div className="w-12/12 lg:w-2/12 flex flex-col bg-white p-5 text-blue-50">
          {/* <LoadSpinner v-if="showHideSpinner" /> */}
          <Logo />
          <SideBar />
        </div>
        <div className="w-12/12 lg:w-10/12 flex flex-col bg-gray-100">
          <div className="header border-b-3 border-blue-50 py-5 px-10">
            <Header />
          </div>
          <div className="content flex-grow px-5">{children}</div>
          <div className="footer border-t-2 border-gray-200 py-5 px-10">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default BasePage;
