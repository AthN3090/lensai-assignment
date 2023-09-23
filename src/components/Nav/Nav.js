"use client";
import Image from "next/image";
import navlogo from "../../../public/nav-logo.png";
import Link from "next/link";
import { useState } from "react";
export default function Nav() {
  const [prodDropdwnVisible, setProdDropdwn] = useState(false);
  const [solDropdwnVisible, setSolDropdwn] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);


  return (
    <nav className="bg-teal-950 text-white flex justify-between fixed w-full">
      <div className="w-[250px] p-3">
        <Link href="/">
          <Image src={navlogo} alt="nav-logo" />
        </Link>
      </div>
      
      <div className={"absolute right-0 w-full h-fit bg-teal-950 mt-[65px] lg:block lg:static lg:mt-0 lg:w-auto lg:h-auto " + `${hamburgerActive ? "block" : "hidden"}`}>
        <ul className="flex flex-col lg:flex-row items-center h-full">
          <li
            className="relative flex flex-col lg:flex-row lg:items-center lg:h-full p-3"
            onMouseEnter={() => {
              setProdDropdwn(true);
            }}
            onMouseLeave={() => {
              setProdDropdwn(false);
            }}
          >
            <a href="#" className="text-center">
              Products
              <div className="inline-block h-0 w-0 align-middle border border-x-4 border-x-transparent border-b-transparent border-t-4 m-1"></div>
            </a>
            <div
              onClick={() => {
                setProdDropdwn(false);
              }}
              className={
                "lg:absolute lg:top-full " +
                `${prodDropdwnVisible ? "block" : "hidden"}`
              }
            >
              <ul className="bg-teal-950 lg:w-[250px]">
                <Link className href="/sdk">
                  <li className="p-3 hover:bg-teal-700">
                    Server SDK for fingerprint recognition
                  </li>
                </Link>
                <Link href="/restapi">
                  <li className="p-3 hover:bg-teal-700">
                    Server platform for fingerprint recognition
                  </li>
                </Link>
                <Link href="/mobileapp">
                  <li className="p-3 hover:bg-teal-700">
                    Mobile SDK for touchless fingerprint capture
                  </li>
                </Link>
              </ul>
            </div>
          </li>
          <li
            className="relative flex-col flex lg:flex-row lg:items-center lg:h-full p-3 hover:cursor-pointer "
            onMouseEnter={() => {
              setSolDropdwn(true);
            }}
            onMouseLeave={() => {
              setSolDropdwn(false);
            }}
          >
            <a href="#" className="text-center">
              Solutions
              <div className="inline-block h-0 w-0 align-middle border border-x-4 border-x-transparent border-b-transparent border-t-4 m-1"></div>
            </a>
            <div
              onClick={() => {
                setSolDropdwn(false);
              }}
              className={
                "lg:absolute lg:top-full " +
                `${solDropdwnVisible ? "block" : "hidden"}`
              }
            >
              <ul className="bg-teal-950 lg:w-[250px]">
                <Link href="/">
                  <li className="p-3 hover:bg-teal-700">
                    Biometric duplication
                  </li>
                </Link>
              </ul>
            </div>
          </li>
          <li className="p-3">
            <a href="/#advantages">Advantages</a>
          </li>
          <li className="p-3">
            <a href="/#market">Markets</a>
          </li>
          <li className="p-3">News</li>
          <li className="p-3">
            <a href="/#about">About us</a>
          </li>
          <li className="p-3">
            <a href="/#contact">Contacts</a>
          </li>
        </ul>
      </div>
      <div
        className="lg:hidden flex flex-col items-center p-5 gap-1 justify-center z-10"
        onClick={() => {
          setHamburgerActive(!hamburgerActive);
        }}
      >
        <div
          className={`border-white border-[1px] h-[2px] w-5 transition duration-75 ${
            hamburgerActive ? " translate-y-[3px] rotate-45" : ""
          }`}
        ></div>
        <div
          className={`border-white border-[1px] h-[2px] w-5 transition duration-75 ${
            hamburgerActive ? "hidden" : ""
          }`}
        ></div>
        <div
          className={`border-white border-[1px] h-[2px] w-5 transition duration-75 ${
            hamburgerActive ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        ></div>
      </div>
    </nav>
  );
}
