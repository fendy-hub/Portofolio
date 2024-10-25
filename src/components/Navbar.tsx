import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="bg-black">
        <div className="container ml-3 flex justify-between text-white items-center p-2">
          <h1>Logo</h1>
          <div className="flex justify-end gap-5 pe-0">
            <h1 className="hidden md:block">Home</h1>
            <h1 className="hidden md:block">About</h1>
            <h1 className="hidden md:block">Projects</h1>
            <h1 className="hidden md:block">Social Media</h1>
            <h1 className="hidden md:block">Contact</h1>
          </div>
          <div className="md:hidden">
            <HiMenu size="20px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
