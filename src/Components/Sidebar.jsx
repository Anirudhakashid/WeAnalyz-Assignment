import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faTicketAlt,
  faClipboardList,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "dashboard",
      name: "Dashboard",
      icon: faThLarge,
    },
    {
      key: "newTicket",
      name: "New Ticket",
      icon: faTicketAlt,
    },
    {
      key: "myTickets",
      name: "My Tickets",
      icon: faClipboardList,
    },
  ];

  return (
    <>
      <aside className="bg-[#D3D2D2] w-[250px] h-full p-4">
        <nav className="flex flex-col gap-6 mt-4 text-lg">
          {menuItems.map((item) => (
            <div
              key={item.key}
              className={`flex items-center justify-between cursor-pointer ${
                activeItem === item.key
                  ? "font-semibold text-black"
                  : "text-gray-600"
              }`}
              onClick={() => {
                setActiveItem(item.key);
                navigate(`/${item.key}`);
              }}
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.name}</span>
              </div>

              {activeItem === item.key && (
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-700"
                />
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
