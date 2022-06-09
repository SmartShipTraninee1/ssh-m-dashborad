import  {React , useState }from 'react'
import ControlIcon from "./assets/control.png";
import Dashboard from "./assets/Chart_fill.png";
import logo from "./assets/logo.png"
import Inbox from "./assets/Chat.png";
import Account from "./assets/User.png"
import Schedule from "./assets/Calendar.png"
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
      <div className="flex ">
        <div
          className={` ${
            open ? "w-72" : "w-20"
          } bg-primary h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src={ControlIcon}
            className={`absolute cursor-pointer -right-3 top-9 w-6 border-primary
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-8 items-center">
            <img
              src={logo}
              className={`cursor-pointer duration-500 w-8 ${
                open && "rotate-[360deg] w-8 "
              }`}
            />
            <h3
              className={`text-white origin-left  font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              SmartShipHub
            </h3>
          </div>

          <ul className="pt-6">
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 bg-light-white ">
              <img src={Dashboard} />
              <span
                className={`${
                  !open && "hidden"
                }  hover: origin-left duration-200`}
              >
                Dashboard
              </span>
            </li>

            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 ">
              <img src={Inbox} />
              <span
                className={`${
                  !open && "hidden"
                }  hover: origin-left duration-200`}
              >
                Inbox
              </span>
            </li>

            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 ">
              <img src={Account} />
              <span
                className={`${
                  !open && "hidden"
                }  hover: origin-left duration-200`}
              >
                Account
              </span>
            </li>

            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 ">
              <img src={Schedule} />
              <span
                className={`${
                  !open && "hidden"
                }  hover: origin-left duration-200`}
              >
                Schedule
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar
