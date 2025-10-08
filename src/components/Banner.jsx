import hero from '../assets/hero.png'

export default function Banner() {
  return (
    <section className="text-center pt-16 pb-0  px-4 flex flex-col items-center">
    <div>
        <h1 className="text-6xl font-bold mb-4">
        We Build <br />
        <span  className="bg-clip-text text-transparent"  style={{ background: "linear-gradient(125.07deg, #632EE3, #9F62F2 100%)", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent",}}>
          Productive
        </span>  Apps</h1>

      <p className="text-gray-600 mb-8">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br></br> Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
    </div>

      <div className="space-x-4">

        <a href="https://www.apple.com/app-store/" target="_blank" className="bg-white-600 text-black font-semibold py-4 px-6 border-1 rounded-md hover:bg-blue-100"> <i className="fa-brands fa-app-store text-2xl align-middle"></i> App Store</a>

        <a href="https://play.google.com/store" target="_blank" className="bg-white text-black font-semibold py-4 px-6 border-1 rounded-md hover:bg-blue-100 "> <i class="fa-brands fa-google-play text-2xl align-middle"></i> Play Store</a>
     </div>

      <div className='mt-10'>
        <img src={hero} alt="" />
      </div>

    </section>
  );
}

