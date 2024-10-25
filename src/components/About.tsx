const About = () => {
  return (
    <div className="bg-black h-[500px] py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
                className="h-[300px] w-[300px] rounded-2xl object-cover "
              />
          <div className="flex flex-col justify-center text-white">
              <section className="About">
                <h1 className="text-4xl text-bold">About Me</h1>
                <h1 className="test-2xl text-bold">Junior Web Development</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque officia porro eos eius, dolor magni amet aut a non
                  qui.
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
