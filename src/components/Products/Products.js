import api from "../../../public/api.png"
import sdk from "../../../public/sdk.png"
import mobile from "../../../public/mobile-phone.png"
import Image from "next/image";
export default function Products() {
  return (
    <section id="products" className="">
      <div className="p-14 pb-28">
        <div className="text-5xl font-semibold text-center text-teal-900">Products</div>
        <div className="max-w-6xl mx-auto mt-16 flex justify-center gap-10">
        <div className="flex flex-col gap-4 justify-between items-center w-[500px]">
          <div className=" w-16 p-3 bg-teal-700 rounded-full">
          <Image src={sdk} alt="api-logo" />
          </div>
          <p className="text-center text-xl font-semibold text-teal-800">Server SDK for fingerprint recognition</p>
          <p  className="text-center font-semibold underline text-3xl text-teal-900">SDK</p>
          <p className="text-md text-center text-teal-800">
            Detection, template extraction and matching (1:1, 1:N, M:N). Scans
            and photo images are supported.
          </p>
        </div>
        <div className="border border-teal-700"></div>
        <div className="flex flex-col gap-4 justify-between items-center w-[500px]">
          <div className="w-16 p-3 bg-teal-700 rounded-full">
          <Image src={api} alt="api-logo" />
          </div>
          <p className="text-center text-xl font-semibold text-teal-800">Server platform for fingerprint recognition</p>
          <p className="text-center font-semibold underline text-3xl text-teal-900">REST API</p>
          <p className="text-md text-center text-teal-800">
            Easy integration of biometric features, microservices architecture
            for system scaling and load balancing
          </p>
        </div>
        <div className="border border-teal-700"></div>
        
        <div className="flex flex-col gap-4 justify-between items-center w-[500px]">
        <div className="w-16 p-3 bg-teal-700 rounded-full">
          <Image src={mobile} alt="api-logo" />
          </div>
          <p className="text-center text-xl font-semibold text-teal-800">Fingers capture and recognition for mobile devices</p>
          <p className="text-center font-semibold underline text-3xl text-teal-900">Mobile SDK</p>
          <p className="text-md text-center text-teal-800">
            Touchless fingerprint acquisition and recognition with mobile phones
            (Android, iOS, web)
          </p>
        </div>

        </div>
      </div>
    </section>
  );
}
