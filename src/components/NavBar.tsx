function NavBar() {
  return (
    <nav className="text-VeryDarkBlue flex flex-col gap-4 items-start ml-6 md:flex-row lg:gap-10 md:justify-end lg:w-full">
      <a href="#" className="text-xl">
        Home
      </a>
      <a
        href="#"
        className="text-xl hover:text-SoftOrange transition-all duration-200"
      >
        New
      </a>
      <a
        href="#"
        className="text-xl hover:text-SoftOrange transition-all duration-200"
      >
        Popular
      </a>
      <a
        href="#"
        className="text-xl hover:text-SoftOrange transition-all duration-200"
      >
        Trending
      </a>
      <a
        href="#"
        className="text-xl hover:text-SoftOrange transition-all duration-200"
      >
        Categories
      </a>
    </nav>
  );
}

export default NavBar;
