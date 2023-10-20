import { Link } from "react-router-dom";
import IcArrowLeft from "../../../assets/icons/arrow-left.svg";
import IcArrowRight from "../../../assets/icons/arrow-right.svg";
import { useState } from "react";

export default function SidebarSection(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        type="button"
        className="group w-full py-[18px] font-bold text-2xl leading-9 flex items-center justify-between pl-[72px] pr-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex">
          <img src={props.icon} alt="Sidebar Icon" className="mr-6" />
          {props.title}
        </div>

        <img src={IcArrowRight} alt="Right Arrow Icon" />
      </button>
      {isOpen && (
        <div className="bg-primary absolute w-full h-screen right-0 top-0 z-10">
          <button
            className="font-bold text-2xl leading-9 flex items-center px-9 py-[18px] mb-4 w-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={IcArrowLeft}
              alt="Arrow Icon"
              className="mr-4 fill-black"
            />

            {props.title}
          </button>
          <ul>{props.children}</ul>
        </div>
      )}
    </li>
  );
}

const Item = (props) => {
  return (
    <li className="w-full py-[18px] font-bold text-2xl leading-9 flex items-center justify-between pl-[72px] pr-6 cursor-pointer active:text-mango active:fill-mango">
      <Link to={props.link} className="flex">
        <img src={props.icon} alt="Menu Icon" className="mr-6" />
        {props.children}
      </Link>
    </li>
  );
};

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        type="button"
        className={`group w-full py-[18px] font-bold text-2xl leading-9 flex items-center justify-between pl-[72px] pr-6 cursor-pointer ${
          isOpen ? "text-mango" : null
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex">
          <img src={props.icon} alt="Icon" className="mr-6" />
          {props.title}
        </div>

        <img
          src={IcArrowRight}
          alt="Right Arrow Icon"
          className={isOpen ? "rotate-90" : null}
        />
      </button>
      {isOpen && <ul>{props.children}</ul>}
    </li>
  );
};

const DropdownItem = (props) => {
  return (
    <li className="w-full py-[18px] text-body-2 flex items-center justify-between pl-[72px] pr-6 cursor-pointer active:text-mango">
      <a href="#" className="flex w-full ml-[60px]">
        {props.children}
      </a>
    </li>
  );
};

SidebarSection.Item = Item;
SidebarSection.Dropdown = Dropdown;
SidebarSection.DropdownItem = DropdownItem;
