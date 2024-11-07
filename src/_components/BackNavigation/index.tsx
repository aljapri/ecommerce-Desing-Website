
import Logo from "../Logo";
// import { IoMenu } from "react-icons/io5";

const BackNavigation: React.FC = () => {

  return (
    <header className="shadow-md font-sans tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-center gap-4 px-10 py-4 bg-white min-h-[70px]">
       <Logo/>

      </div>
    </header>
  );
};

export default BackNavigation;
