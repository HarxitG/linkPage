import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you can clear any authentication data (like tokens) if you have them
    navigate("/login");
  };

 const links = [
  {
    color: "bg-red-300",
    text: "Buy me coffee ☕️",
    link: "https://www.buymeacoffee.com",
  },
  {
    color: "bg-sky-300",
    text: "Join My Newsletter 🗞",
    link: "https://newsletter.google.com/",
  },
  {
    color: "bg-pink-400",
    text: "Learn Code 💻",
    link: "https://www.freecodecamp.org/",
  },
];


  return (
    <div className="w-full h-screen bg-yellow-300 flex flex-col justify-center items-center">
      <div className="max-w-2xl mx-auto flex flex-col gap-5">
        <div className="h-48 w-48 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            className="rounded-full object-cover object-center w-full h-full"
            alt="Profile"
          />
        </div>
        <div className="text-center p-3">
          <h1 className="text-4xl font-bold">knoxtop</h1>
          <p className="text-lg mt-3">
            Every step you take brings you closer to mastering your craft and sharing it with the world.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {links.map(({ text, color, link }, index) => (
            <a href={link} key={index} target="_blank" rel="noopener noreferrer">
              <div
                className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}
              >
                {text}
              </div>
            </a>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="mt-10 w-40 mx-auto text-center text-xl font-bold py-3 border-2 border-black bg-blue-500 text-white shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserPage;
