const About = () => {
  return (
    <div className="bg-black h-[400px] py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1">
          <div className="flex justify-center gap-6">
            <img
              src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
              className="h-[300px] w-[300px] rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center text-white">
              <section className="About">
                <h1 className="text-4xl text-bold py-3">About Me</h1>
                <h1 className="test-3xl text-bold py-3">Junior Web Development</h1>
                <p className="text-xs">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ipsa porro voluptate id a qui iusto recusandae assumenda ducimus excepturi eaque beatae hic totam, placeat explicabo et consequatur iure laborum sunt. Enim laudantium itaque rem eos, quod sed expedita nulla qui sequi rerum ipsa nihil non doloribus, excepturi ullam voluptate?
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
