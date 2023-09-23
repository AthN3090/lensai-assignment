import logo from "../../../public/nav-logo.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-teal-950">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 items-center">
        <div className="flex lg:justify-normal justify-center">
          <Image className="w-[150px]" src={logo} alt="logo" />
        </div>
        <div className="flex-grow">
          <p className="text-white text-sm text-center">
            All Right Reserved, 2023. Neurodactyl, LLC.
            <br />
            Address: Georgia, Tbilisi, Nadzaladevi District, Kursebi Street,
            N15. <br />
            Identification Number: 400354488
            <br />
            E-mail us: <a href="mailto:info@neurodactyl.com">info@neurodactyl.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
