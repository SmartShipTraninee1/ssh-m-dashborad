import  {React , useState }from 'react'
import ControlIcon from "./assets/control.png";
import Dashboard from "./assets/Chart_fill.png";
function Sidebar() {
   const [open, setOpen] = useState(false);
    const Menus = [
      { title: "Dashboard", src: "Chart_fill" },
      { title: "Inbox", src: "Chat" },
      { title: "Accounts", src: "User", gap: true },
      { title: "Schedule ", src: "Calendar" },
      { title: "Search", src: "Search" },
      { title: "Analytics", src: "Chart" },
      { title: "Files ", src: "Folder", gap: true },
      { title: "Setting", src: "Setting" },
    ];
     
  return (
    <>
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-primary h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src={ControlIcon}
            className={`absolute cursor-pointer -right-3 top-9 w-8 border-primary
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            {/* <img
              src="./src/assets/logo.png"  
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            /> */}
            <h3
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              SmartShip
            </h3>
          </div>

          <ul className="pt-6">
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-secondary-dark text-gray-300 text-sm items-center gap-x-4 mt-2 bg-secondary-light ">
              <img src={Dashboard} />
              <span
                className={`${
                  !open && "hidden"
                }  hover: origin-left duration-200 text-gray-400`}
              >
                Dashboard
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar
