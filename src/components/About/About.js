export default function About() {
  return (
    <section id="about" className="flex items-center min-h-screen bg-fixed bg-no-repeat bg-cover bg-[url('/about_bg.jpg')]">
      <div className="max-w-[800px] m-auto border py-14 px-5 md:p-16 bg-gray-200">
        <p className="text-center text-5xl font-semibold text-teal-900">About us</p>
        <p className="md:text-xl leading-9 mt-5 md:mt-12 font-light text-teal-800">
          Neurodactyl is a technology start-up founded in 2023 by specialists in
          machine vision and deep learning technologies. We have vast experience
          on biometric markets and have been working with different biometric
          technologies starting from 2014, when neural network based facial
          recognition technologies have completely changed the market. Today we
          are focused on creating cutting edge algorithms in fingerprint
          recognition, striving to bring a new life and power of new mobile
          technologies to the market of old-school biometrics. We aim to make
          identification powered by biometrics convenient, easy and reliable and
          help to protect personal and financial data in new digital reality.
          Besides fingerprint recognition our R&D team also doing research in
          other biometrics like face, voice and iris.
        </p>
      </div>
    </section>
  );
}
