import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    let username = JSON.parse(localStorage.getItem("username"));
    navigate(username ? "/chat" : "/login");
  });

  return (
    <main className="h-screen w-screen p-8 bg-gradient-to-b from-indigo-600 to-indigo-900  flex flex-col">
      <h1 className="text-5xl font-bold font-sans text-white">Chat Firebase</h1>
      <p className="text-[18px] text-white font-semibold">By Aditia</p>
      <Link
        to="/chat"
        className="z-50 mt-auto w-full bg-black rounded-2xl text-white py-2 font-semibold font-sans text-center"
      >
        Login Now
      </Link>

      <img
        src="https://wallpaper.dog/large/20476282.jpg"
        alt=""
        className="w-screen opacity-25 absolute top-0 left-0 object-cover h-screen z-0"
      />
    </main>
  );
}
