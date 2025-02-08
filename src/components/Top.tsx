import Db from "../Db/Db";

function Top() {
  return (
    <section className="xl:flex xl:gap-10 xl:items-center">
      {Db.map(({ id, image, title, description }) => (
        <div key={id} className="flex gap-5 my-15">
          <img src={image} alt="imagen lista" className="w-35" />
          <div className="flex flex-col gap-2 justify-center">
            <h2 className="text-SoftOrange font-black text-4xl">{id}</h2>
            <h3 className="text-VeryDarkBlue font-black hover:text-SoftOrange transition-all duration-200">
              {title}
            </h3>
            <p className="text-DarkGrayishBlue">{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Top;
