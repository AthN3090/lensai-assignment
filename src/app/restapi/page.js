"use client";
import { useState } from "react";
export default function Page() {
  const [activeTab, setActiveTabs] = useState(0);
  return (
    <main>
      <section className="bg-teal-50">
        <div className="min-h-[800px] max-w-[800px] m-auto flex flex-col justify-center items-center gap-9">
          <p className="text-6xl font-semibold text-center text-teal-800 leading-snug mt-20">
            Server platform for fingerprint recognition
          </p>
          <div className="border w-[100px] border-black"></div>
          <p className="text-lg  text-center text-teal-700">
            Neurodactyl server platform provides easy implementation of
            fingerprint recognition features using simple RESTful web-API. The
            platform is based on microservices architecture, which allows
            flexible system scaling and load balancing. Neurodactyl server
            platform can be deployed as cloud fingerprint recognition system
            with a sandbox for each user. The platform utilizes Neurodactyl
            fingerprint recognition SDK.
          </p>
          <button className="bg-teal-700 py-4 px-10 rounded-md text-white">
            Try online
          </button>
        </div>
      </section>
      {/* Tabs Component */}
      <section className="text-teal-800 bg-teal-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-5 grid-cols-options gap-0 overflow-x-auto justify-between font-semibold">
            <button
              className={`px-7 py-5 border-b ${
                activeTab === 0 ? "border-b-black " : ""
              }`}
              onClick={() => setActiveTabs(0)}
            >
              Features
            </button>
            <button
              className={`px-7 py-5 border-b ${
                activeTab === 1 ? "border-b-black " : ""
              }`}
              onClick={() => setActiveTabs(1)}
            >
              Architecture
            </button>
            <button
              className={`px-7 py-5 border-b ${
                activeTab === 2 ? "border-b-black " : ""
              }`}
              onClick={() => setActiveTabs(2)}
            >
              Technology stack
            </button>
            <button
              className={`px-7 py-5 border-b ${
                activeTab === 3 ? "border-b-black " : ""
              }`}
              onClick={() => setActiveTabs(3)}
            >
              System requirements
            </button>
            <button
              className={`px-7 py-5 border-b ${
                activeTab === 4 ? "border-b-black " : ""
              }`}
              onClick={() => setActiveTabs(4)}
            >
              License and pricing
            </button>
          </div>
          {/* Tabs content */}
          <div className="py-8">
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
                      The platform detects fingerprints on photo images and
                      scans (250 dpi and higher). The detector returns 2
                      landmarks and bounding boxes for each detected
                      fingerprint. Number of fingerprints/fingers on an image is
                      not limited. Left/right hand detection based on
                      fingerprint analysis (optional).
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
                    <p className=" font-sm mt-4">
                      The platform converts an image into compact descriptor,
                      describing unique features of a fingerprint. All templates
                      extracted from photo images and scans are compatible and
                      have standard size - 512 bytes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-9 py-6">
                  <div>
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-black">
                      3
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Matching</p>
                    <p className=" font-sm mt-4">
                      The platform compares templates against each other in
                      different modes: 1:1, 1:N, M:N (batch mode) and returns
                      similarity score (native values equal to -logFAR and %).
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
                    <p className="font-semibold text-lg">User authorization</p>
                    <p className=" font-sm mt-4">
                      Users are authorized with JWT (json web token) and can
                      have fully separated sandboxes for their enrolled data
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="my-8 p-6">
                <div className="flex gap-9 py-6 ">
                  <div>
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-black">
                      1
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      Microservices architecture
                    </p>
                    <p className=" font-sm mt-4">
                      All features of Neurodactyl server platform operate as
                      microservices, which helps to build resilient and scalable
                      fingerprint recognition system. All microservices are
                      containerized and can be deployed with container
                      orchestration system like Kubernetes, etc.
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
                    <p className="font-semibold text-lg">Easy scale up</p>
                    <p className=" font-sm mt-4">
                      Detection and extraction features are separated as
                      microservices, which you can flexibly increase, when total
                      load of the system - number of incoming requests - is
                      increasing. The load will be automatically distributed and
                      balanced between all services of detection and template
                      extraction.
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
                      Automatic batch collection
                    </p>
                    <p className=" font-sm mt-4">
                      Neurodactyl fingerprint recognition SDK allows to use
                      batches to increase throughput on GPU. Neurodactyl server
                      platform automatically collects batches of optimum size in
                      order to provide faster processing of incoming images and
                      best utilization of available hardware.
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
                    <p className="font-semibold text-lg">Sandboxes</p>
                    <p className=" font-sm mt-4">
                      The platform allows to create fully isolated sandboxes.
                      Sandboxes can be assigned to users, so they can have fully
                      isolated enrollment databases for identification without
                      interaction or having access to other user's data.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="my-8 p-6">
                <p className=" py-4">
                  <span className="font-semibold">Interface: &nbsp;</span>
                  RESTful web-API
                </p>
                <p className=" py-4">
                  <span className="font-semibold">Database:&nbsp;</span>
                  MongoDB
                </p>
                <p className=" py-4">
                  <span className="font-semibold">Service discovering:&nbsp;</span>
                  Zookeeper
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div className="my-8 p-6">
                <p className=" py-4">
                  <span className="font-semibold">
                    OS: &nbsp;
                  </span>
                  Linux (amd64)
                </p>
                <p className=" py-4">
                  <span className="font-semibold">Minimum HW requirements&nbsp;</span>
                  for a particular use case should be calculated for a project and depend on: size of enrollment database, number of incoming images per 1 s, types and resolutions of incoming images.
                </p>
                <p className=" py-4">
                  <span className="font-semibold">Supported GPU:&nbsp;</span>
                  NVidia GPUs starting from Pascal architecture or later, at least 6 GB RAM.
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
                <p className=" py-4">
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
              <label className="py-3 ">Email</label>
              <input
                className="p-3 rounded-md border placeholder:text-sm"
                placeholder="Your Email"
                type="email"
              ></input>
              <label className="py-3 ">Name</label>
              <input
                className="p-3 rounded-md border placeholder:text-sm"
                placeholder="Your Name"
                type="text"
              ></input>
              <label className="py-3 ">Phone</label>
              <input
                className="p-3 rounded-md border placeholder:text-sm"
                placeholder="Your Phone"
                type="tel"
              ></input>
              <label className="py-3 ">Your question</label>
              <textarea className="p-3 rounded-md border"></textarea>
              <button className="py-3 px-10 rounded-md w-fit mx-auto mt-9 bg-teal-900">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
