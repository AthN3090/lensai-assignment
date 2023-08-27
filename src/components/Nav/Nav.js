"use client";
import Image from "next/image";
import navlogo from "../../../public/nav-logo.png";
import Link from "next/link";
import { useState } from "react";
export default function Nav() {
  const [prodDropdwnVisible, setProdDropdwn] = useState(false);
  const [solDropdwnVisible, setSolDropdwn] = useState(false);

  return (
    <nav className="bg-teal-950 text-white flex justify-between fixed w-full">
      <div className="w-[250px] p-3">
        <Link href="/">
          <Image src={navlogo} alt="nav-logo" />
        </Link>
      </div>
      <div className="">
        <ul className="flex  items-center h-full">
          <li
            className="relative flex items-center h-full p-3"
            onMouseEnter={() => {
              setProdDropdwn(true);
            }}
            onMouseLeave={() => {
              setProdDropdwn(false);
            }}
          >
            <a href="#advantages">
              Products
              <div className="inline-block h-0 w-0 align-middle border border-x-4 border-x-transparent border-b-transparent border-t-4 m-1"></div>
            </a>
            <div
              onClick={() => {
                setProdDropdwn(false);
              }}
              className={
                "absolute top-full -translate-x-1/2 " +
                `${prodDropdwnVisible ? "block" : "hidden"}`
              }
            >
              <ul className="bg-teal-950 w-[250px]">
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
          <li className="group relative  flex items-center h-full p-3 hover:cursor-pointer ">
            Solutions
            <div className="inline-block h-0 w-0 align-middle border border-x-4 border-x-transparent border-b-transparent border-t-4 m-1"></div>
            <div className="absolute left-0 top-full hidden group-hover:block">
              <ul className="bg-teal-950 w-[250px]">
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
    </nav>
  );
}
