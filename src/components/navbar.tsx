import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="w-full py-5  sm:px-10  px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => {
            return (
              <ul key={nav}>
                <div className="px-5 text-sm cursor-pointer text-gray transition-all hover:text-white"> 
                  {nav}
                </div>
              </ul>
            );
          })}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 cursor-pointer">
          <img src={searchImg} alt="search" width={18} height={18}/>
          <img src={bagImg} alt="bag" width={18} height={18}/>          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
