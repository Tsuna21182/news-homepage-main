function Abside() {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite p-4 mt-10 xl:mt-[10px] xl:h-[34rem] 3xl:h-[42rem]">
      <h2 className="text-SoftOrange text-3xl">New</h2>
      <div className="mt-5">
        <div>
          <h3 className="font-bold text-xl hover:text-SoftOrange cursor-pointer transition-all duration-200">
            Hydrogen VS Electric Cars
          </h3>
          <p className="text-DarkGrayishBlue mt-3">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="border border-DarkGrayishBlue w-72 my-5"></div>
        <div>
          <h3 className="font-bold text-xl hover:text-SoftOrange cursor-pointer transition-all duration-200">
            The Downsides of AI Artistry
          </h3>
          <p className="text-DarkGrayishBlue mt-3">
            What are the possible adverse effects of on demand AI image
            generation?
          </p>
        </div>
        <div className="border border-DarkGrayishBlue w-72 my-5"></div>
        <div className="xl:mb-10">
          <h3 className="font-bold text-xl hover:text-SoftOrange cursor-pointer transition-all duration-200">
            Is VC Funding Drying Up?
          </h3>
          <p className="text-DarkGrayishBlue mt-3">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Abside;
