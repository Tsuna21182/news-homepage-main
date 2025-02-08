function Hero() {
  return (
    <section className="md:flex md:flex-col md:items-center">
      <img
        src="images/image-web-3-mobile.jpg"
        alt="imagen hero"
        className="md:hidden"
      />
      <img
        src="images/image-web-3-desktop.jpg"
        alt="imagen hero"
        className="hidden md:block"
      />
      <div className="flex flex-col xl:flex-row xl:mt-10 xl:gap-50 gap-5">
        <h1 className="font-black text-5xl mt-5 xl:mb-10">
          The Bright Future of Web 3.0?
        </h1>
        <div>
          <p className="text-DarkGrayishBlue mb-5">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-SoftRed text-VeryDarkBlue uppercase font-bold py-2 px-8 hover:bg-VeryDarkBlue hover:text-OffWhite cursor-pointer transition-all duration-200">
            read more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
