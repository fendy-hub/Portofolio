const Jumbotron = () => {
  return (
    <header>
    <div className="relative h-[500px] overflow-hidden bg-[url('https://tecdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-[50%] bg-no-repeat">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-screenl w-screen overflow-hidden bg-black/60 bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mb-6 text-5xl font-bold">Hi, I'm Fendy</h1>
            <h3 className="mb-8 text-3xl font-bold">
                <img src="C:\Users\win10 64bit\Documents\JCWD\front-end\exercise\portofolio2\Portofolio2\src\image\image1.png" 
                className="h-[200px] w-[200px] rounded-full shadow-black object-cover place-self-center"/>
            </h3>
            <button
              type="button"
              className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              PROJECTS
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
);
};

export default Jumbotron