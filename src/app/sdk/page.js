"use client";
import { useState } from "react";
export default function Page() {
  const [activeTab, setActiveTabs] = useState(0);
  return (
    <main>
      <section className="bg-teal-50">
        <div className="min-h-[800px] max-w-[800px] m-auto flex flex-col justify-center items-center gap-9">
          <p className="text-6xl font-semibold text-center leading-snug mt-20 text-teal-900">
            Server SDK for fingerprint recognition
          </p>
          <div className="border w-[100px] border-black"></div>
          <p className="text-lg  text-center text-teal-800">
            Neurodactyl SDK helps system integrators and software providers to
            implement biometric fingerprint recognition - verification or
            identification - into their products, systems and services. The SDK
            is based on deep learning technologies and matches any types of
            fingerprints between each other: flats, rolls, latents and photo
            images, creating fixed-size and compatible template for any type of
            fingerprints. Recognition algorithm of Neurodactyl server SDK has
            archived world's top tier accuracy in NIST PFT III benchmarks.
          </p>
          <button className="bg-teal-700 py-4 px-10 rounded-md text-white">
            Try online
          </button>
        </div>
      </section>
      {/* Tabs Component */}
      <section className="bg-teal-50 text-teal-800">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-5 grid-cols-options gap-0 justify-between font-semibold overflow-x-auto">
            <button
              className={`px-7 py-4 border-b ${
                activeTab === 0 ? "border-b-teal-700" : ""
              }`}
              onClick={() => setActiveTabs(0)}
            >
              Features
            </button>
            <button
              className={`px-7 py-4 border-b ${
                activeTab === 1 ? "border-b-teal-700" : ""
              }`}
              onClick={() => setActiveTabs(1)}
            >
              Performance
            </button>
            <button
              className={`px-7 py-4 border-b ${
                activeTab === 2 ? "border-b-teal-700" : ""
              }`}
              onClick={() => setActiveTabs(2)}
            >
              Interfaces and Platforms
            </button>
            <button
              className={`px-7 py-4 border-b ${
                activeTab === 3 ? "border-b-teal-700" : ""
              }`}
              onClick={() => setActiveTabs(3)}
            >
              System Requirements
            </button>
            <button
              className={`px-7 py-4 border-b ${
                activeTab === 4 ? "border-b-teal-700" : ""
              }`}
              onClick={() => setActiveTabs(4)}
            >
              License and prising
            </button>
          </div>
          {/* Tabs content */}
          <div className="py-8 text-teal-900">
            {activeTab === 0 && (
              <div className="my-8 p-6">
                <div className="flex gap-9 py-6">
                  <div>
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-black">
                      1
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      Fingerprints detection
                    </p>
                    <p className=" font-sm mt-4">
                      The SDK detects fingerprints on photo images and scans
                      (250 dpi and higher). The detector returns 2 landmarks and
                      bounding boxes for each detected fingerprint. Number of
                      fingerprints/fingers on an image is not limited.
                      Left/right hand detection based on fingerprint analysis
                      (optional).
                    </p>
                  </div>
                </div>
                <div className="flex gap-9 py-6">
                  <div>
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-black">
                      2
                    </div>
                  </div>
                  <div >
                    <p className="font-semibold text-lg">
                      Biometric template extraction
                    </p>
                    <p className="font-sm mt-4">
                      The SDK converts an image into compact descriptor,
                      describing unique features of a fingerprint. All templates
                      extracted from photo images and scans are compatible and
                      have standard size - 512 bytes
                    </p>
                  </div>
                </div>
                <div className="flex gap-9 py-6">
                  <div>
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-black">
                      3
                    </div>
                  </div>
                  <div >
                    <p className="font-semibold text-lg">Matching</p>
                    <p className="font-sm mt-4">
                      The SDK compares templates against each other in different
                      modes: 1:1, 1:N, M:N (batch mode) and returns similarity
                      score (native values equal to -logFAR and %).
                    </p>
                  </div>
                </div>
                <div className="flex gap-9 py-6">
                  <div>
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-black">
                      4
                    </div>
                  </div>
                  <div >
                    <p className="font-semibold text-lg">
                      Images decompression
                    </p>
                    <p className="font-sm mt-4">
                      The SDK has decompression feature including WSQ format.
                    </p>
                  </div>
                </div>
                <div className="flex gap-9 py-6">
                  <div>
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-black">
                      5
                    </div>
                  </div>
                  <div >
                    <p className="font-semibold text-lg">Serialization</p>
                    <p className="font-sm mt-4"></p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="my-8 p-6">
                <p className=" my-8">
                  All processing can be performed on CPU or GPU. In terms of
                  cost-efficiency GPU processing outperforms CPU. Neurodactyl
                  SDK automatically utilizes all available resources of CPU or
                  GPU without running parallel threads. You can use batch mode
                  on GPU for detection and extraction, and batch on CPU - for
                  matching. Batch mode accelerates processing and provides
                  better throughput. Consult our specialists to choose optimum
                  batches for your hardware.
                </p>
                <div className="flex gap-9 py-6 ">
                  <div>
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-black">
                      1
                    </div>
                  </div>
                  <div >
                    <p className="font-semibold text-lg">Biometric template</p>
                    <p className=" font-sm mt-4">
                      Size of biometric template is constant: 512 bytes in
                      memory (serialized template is 546 bytes). All enrolled
                      templates are stored in RAM, so required size of RAM
                      depends on the size of your enrollment database.
                    </p>
                  </div>
                </div>
                <div className="flex gap-9 py-6 ">
                  <div>
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-black">
                      2
                    </div>
                  </div>
                  <div >
                    <p className="font-semibold text-lg">Detection speed</p>
                    <p className=" font-sm mt-4">
                      Detection can be performed on CPU or GPU. Average
                      detection speed: 10-20 ms per 1 image on GPU and 70-100 ms
                      - on CPU. Average detection speed in batch on GPU: 2-4 ms
                      per 1 image.
                    </p>
                  </div>
                </div>
                <div className="flex gap-9 py-6 ">
                  <div>
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-black">
                      3
                    </div>
                  </div>
                  <div >
                    <p className="font-semibold text-lg">
                      Template extraction speed
                    </p>
                    <p className=" font-sm mt-4">
                      Template extraction can be performed on CPU or GPU.
                      Average extraction speed: 50 ms per 1 image on GPU and
                      250-500 ms - on CPU. Average extraction speed in batch on
                      GPU: 5-10 ms per 1 image.
                    </p>
                  </div>
                </div>
                <div className="flex gap-9 py-6 ">
                  <div>
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-black">
                      4
                    </div>
                  </div>
                  <div >
                    <p className="font-semibold text-lg">Matching speed</p>
                    <p className=" font-sm mt-4">
                      100 million matching operation per 1 s on one modern CPU.
                      In batch mode: up to 1,5 billion matches per 1 s.
                      Benchmarks for CPU models:
                      <ul className="list-disc pl-7">
                        <li>
                          Intel Xeon Gold 6256 - 538 ms for 100 million matches;
                          1,7 s for 3,2 billion matches in batch.
                        </li>
                        <li>
                          Intel Core i9 10900X - 925 ms for 100 million matches;
                          3 s for 3 billion matches in batch.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="my-8 p-6">
                <p className="py-4">
                  <span className="font-semibold">Interfaces: &nbsp;</span>
                  C++, C# with code examples. Neurodactyl REST API platform is
                  available for Neurodactyl SDK.
                </p>
                <p className="py-4">
                  <span className="font-semibold">Platforms:&nbsp;</span>
                  Windows 7 or later (amd64), Linux (amd64)
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div className="my-8 p-6">
                <p className="py-4">
                  <span className="font-semibold">
                    Minimum HW requirements: &nbsp;
                  </span>
                  CPU Intel or AMD with AVX2 instructions, 8 GB RAM, 4 GB free
                  space on a drive.
                </p>
                <p className=" py-4">
                  <span className="font-semibold">HW requirements&nbsp;</span>
                  for a particular use case should be calculated for a project
                  and depend on: size of enrollment database, number of incoming
                  images per 1 s, types and resolutions of incoming images.
                </p>
                <p className=" py-4">
                  <span className="font-semibold">Supported GPU:&nbsp;</span>
                  NVidia GPUs starting from Pascal architecture or later, at
                  least 6 GB RAM.
                </p>
                <p className=" py-4">
                  <span className="font-semibold">
                    Image requirements:&nbsp;
                  </span>
                  <ul className="list-disc pl-7">
                    <li>
                      For scans - 250 dpi and higher, rolls, flats and latents
                      are supported.
                    </li>
                    <li>
                      For photo images - quality of images (resolution and
                      sharpness) must provide visible fingerprints patterns.
                      Size of a phalanx must be at least 200 pixels. We
                      recommend to use Neurodactyl Mobile capture SDK for image
                      acquisition with mobile phones.
                    </li>
                  </ul>
                </p>
                <p className=" py-4">
                  <span className="font-semibold">
                    Supported image formats:&nbsp;
                  </span>
                  png, jpeg, bmp, wsq and others.
                </p>
              </div>
            )}
            {activeTab === 4 && (
              <div className="my-8 p-6">
                <p className="py-4">
                  <span className="font-semibold">
                    Nuerodactyl SDK is licensed per:&nbsp;
                  </span>
                  <ul className="list-disc pl-7">
                    <li>
                      Number of enrolled images (size of N in the matching
                      gallery)
                    </li>
                    <li>Number of GPUs</li>
                    <li>Number of servers/machines</li>
                  </ul>
                </p>
                <p className=" py-4">
                  <span className="font-semibold">
                    Price calculation can be done based on following project
                    information:&nbsp;
                  </span>
                  <ul className="list-disc pl-7">
                    <li>Size of the enrollment database</li>
                    <li>
                      Workload: number of incoming images for detection and
                      template extraction per 1 s
                    </li>
                    <li>Types of incoming images: photo/scans, resolution</li>
                    <li>CPU or GPU is used for processing</li>
                  </ul>
                </p>
                <p>
                  If you want to know more about licensing and pricing, please
                  contact us{" "}
                  <span className="text-blue-800">info@neurodactyl.com</span>
                </p>
              </div>
            )}
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="h-screen flex flex-col grow items-center bg-teal-800 text-white" 
      >
        <div className="my-auto">
          <div>
            <p className="font-semibold text-5xl text-center">Contact us</p>
            <p className="text-center  text-xl mt-12">
              Any question about our products or technologies? Just text us!
            </p>
          </div>
          <div className="mx-auto mt-12 p-3">
            <form className="flex flex-col gap-1">
              <label className="py-3 font-medium">Email</label>
              <input
                className="p-3 rounded-md border placeholder:text-sm"
                placeholder="Your Email"
                type="email"
              ></input>
              <label className="py-3 font-medium">Name</label>
              <input
                className="p-3 rounded-md border placeholder:text-sm"
                placeholder="Your Name"
                type="text"
              ></input>
              <label className="py-3 font-medium">Phone</label>
              <input
                className="p-3 rounded-md border placeholder:text-sm"
                placeholder="Your Phone"
                type="tel"
              ></input>
              <label className="py-3 font-medium">Your question</label>
              <textarea className="p-3 rounded-md border"></textarea>
              <button className="py-3 px-10 rounded-md border-none w-fit mx-auto mt-9 bg-teal-950 text-white">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
