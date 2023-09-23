export default function page() {
  return (
    <main>
      <section className="bg-teal-50">
        <div className="flex md:flex-row flex-col max-w-[1200px] md:items-center pt-[150px] py-[30px] mx-auto">
          <div className="flex flex-col md:w-[60%] p-3">
            <p className="text-5xl md:text-6xl font-semibold leading-snug text-teal-800">
              Server platform for fingerprint recognition
            </p>
            <p className="leading-relaxed text-lg  py-9 text-teal-700">
              Neurodactyl Mobile SDK allows to capture fingerprints without a
              scanner — now you can make it simply and contactlessly in mobile
              app. The SDK is optimized for mobile phones, providing fast
              processing even on low-end devices with minimum HW requirements.
              Neurodactyl Mobile SDK can be used along with Neurodactyl Server
              fingerprint recognition platform for further verification or
              identification, but it also outputs captured fingerprints as a
              standard scan for using in legacy systems. The SDK opens very
              accurate and reliable fingerprint biometric for banks, eKYC and
              customer onboarding available in mobile app or in web — without
              installing any program. With an app a user can "capture" up to 4
              fingers in user-friendly manner. It ensures extremely accurate
              identification required for financial operations - much more
              accurate than, for example, using one facial image.
            </p>
          </div>
          <div className="md:w-[40%]">
            <video
              className="w-[300px] mx-auto"
              src="/finger_capture.mp4"
              autoPlay
              loop
            ></video>
          </div>
        </div>
      </section>
      <section className=" bg-teal-50 py-12">
        <div className="max-w-[1200px] mx-auto text-teal-800 p-3">
          <p className="font-semibold text-3xl ">Features:</p>
          <ul className="list-disc p-4 text-lg">
            <li className="p-1">
              Fingerprint detection and capturing in different modes: 1,2,4
              fingers; right or left hand
            </li>
            <li className="p-1">Smart camera adjustments</li>
            <li className="p-1">Quality assessment</li>
            <li className="p-1">
              Image conversion to a standard scan (2 outputs: a scan and an
              image)
            </li>
            <li className="p-1">
              Optional by request: biometric template extraction and matching on
              mobile device
            </li>
          </ul>
          <p >
            Available platforms: Android, iOS (coming soon), web. <br />
            HW requirements: mobile device with rear camera, focus control and
            torch.
          </p>
        </div>
      </section>
      <section className="bg-teal-800 py-14">
      <div className="max-w-[1200px] mx-auto py-[80px] px-[30px] bg-teal-800">
          <div className="text-white">
            <p className="font-semibold text-5xl text-center">Try without installation</p>
            <p className="text-center  text-xl mt-7">
            Send us a request for getting access to demo app in web
            </p>
          </div>
          <div className="flex justify-center mt-7">
            <form className="flex gap-4 items-center flex-col sm:flex-row sm:justify-center">              
              <input className="w-full p-3 rounded-md border placeholder:text-sm" placeholder="Your Email" type="email"></input>              
              <input className="w-full p-3 rounded-md border placeholder:text-sm" placeholder="Your Name" type="text"></input>             
              <input className="w-full p-3 rounded-md border placeholder:text-sm " placeholder="Your Company" type="text"></input>
              <button className="py-3 px-10 rounded-md w-full sm:w-fit bg-teal-950 text-white">Send</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
