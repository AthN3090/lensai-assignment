import Image from "next/image";
import rocket from "../../../public/rocket.png";
import fingerprint from "../../../public/fingerprint.png";
import template from "../../../public/database.png";
import flash from "../../../public/flash.png";
import dpi from "../../../public/density.png";
import accurate from "../../../public/target.png";
export default function Advantages() {
  return (
    <section id="advantages" className="bg-teal-900">
      <div className="p-14 pb-28">
        <div className="text-5xl font-semibold text-center text-white">
          Advantages
        </div>
        <div className="grid grid-cols-3 max-w-6xl mx-auto mt-16 text-white gap-11">
          <div className="flex flex-col gap-6 items-center p-2 text-center">
            <Image src={rocket} alt="rocket" />
            <p className="text-md font-semibold">Superior accuracy</p>
            <p className="text-sm font-light">
              Neural network based technology provides extremely high
              recognition accuracy for verification and identification
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center p-2 text-center">
            <Image src={fingerprint} alt="rocket" />
            <p className="text-md font-semibold">All types of fingerprints</p>
            <p className="text-sm font-light">
              Processing of photo images and standard scans (flats, rolls,
              latents) with one technology creating templates compatible between
              each other
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center p-2 text-center">
            <Image src={template} alt="rocket" />
            <p className="text-md font-semibold">
              Fixed size of biometric template
            </p>
            <p className="text-sm font-light">
              Fingerprint biometric templates always have standard size - 512
              bytes regardless of fingerprint or image type
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center p-2 text-center">
            <Image src={flash} alt="rocket" />
            <p className="text-md font-semibold">High matching speed</p>
            <p className="text-sm font-light">
              Matching performance is 100+ million matches per 1 s on one modern
              CPU and up to 1 billion matches per 1 s using batch mode or GPU
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center p-2 text-center">
            <Image src={dpi} alt="rocket" />
            <p className="text-md font-semibold">DPI tolerant technology</p>
            <p className="text-sm font-light">
              Algorithm works with images or scans from 250 dpi and higher and
              doesn't require exact DPI values (for example, exactly 500 dpi)
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center p-2 text-center">
            <Image src={accurate} alt="rocket" />
            <p className="text-md font-semibold">
              Identification with the highest confidence
            </p>
            <p className="text-sm font-light">
              By capturing of 4 fingers at once with our mobile SDK you can
              guarantee almost 100% reliable and user-friendly identification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
