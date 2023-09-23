export default function Contact(){
    return (
      <section id="contact" className="bg-teal-800 h-screen flex flex-col grow items-center">
        <div className="my-auto text-white">
          <div>
            <p className="font-semibold text-5xl text-center">Contact us</p>
            <p className="text-center font-light text-xl mt-12">
              Any question about our products or technologies? Just text us!
            </p>
          </div>
          <div className="mx-auto mt-12 p-3">
            <form className="flex flex-col gap-1">
              <label className="py-3 font-medium">Email</label>
              <input className="p-3 rounded-md border placeholder:text-sm" placeholder="Your Email" type="email"></input>
              <label className="py-3 font-medium">Name</label>
              <input className="p-3 rounded-md border placeholder:text-sm" placeholder="Your Name" type="text"></input>
              <label className="py-3 font-medium">Phone</label>
              <input className="p-3 rounded-md border placeholder:text-sm" placeholder="Your Phone" type="tel"></input>
              <label className="py-3 font-medium">Your question</label>
              <textarea className="p-3 rounded-md border"></textarea>
              <button className="py-3 px-10 rounded-md border w-fit mx-auto mt-9 bg-teal-950 text-white border-none">Send</button>
            </form>
          </div>
        </div>
      </section>
    );
}