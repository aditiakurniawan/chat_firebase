import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AvatarContext } from "../context/AvatarContextProvider";

export default function Login() {
  const { avatar, setAvatar } = useContext(AvatarContext);
  const navigate = useNavigate();

  //ganti avatar
  const handleAvatar = () => {
    setAvatar(`https://api.multiavatar.com/${Date.now()}.svg`);
  };

  //hendle form login
  const handleLogin = (e) => {
    e.preventDefault();
    let username = e.target.username.value;

    localStorage.setItem(
      "username",
      JSON.stringify({
        id: Date.now(),
        username: username,
        avatar: avatar,
      })
    );

    navigate("/chat");
  };

  return (
    <main className="h-screen w-screen p-8 bg-gradient-to-b from-indigo-600 to-indigo-900  flex flex-col">
      <form
        action=""
        className="z-50 w-full flex flex-col bg-white rounded-xl p-4 shadow-lg my-auto"
        onSubmit={handleLogin}
      >
        <div className="relative w-28 mx-auto">
          <img src={avatar} alt="avatar" className="w-28 h-28 mx-auto my-3 " />
          <button
            className="rounded-full absolute bottom-3 right-0 w-8 h-8 bg-gray-600 text-white "
            type="button"
            onClick={handleAvatar}
          >
            ?
          </button>
        </div>
        <div>
          <label htmlFor="username" className="font-sans font-medium ml-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            className="my-1 w-full rounded-xl px-3 border-[1px] border-gray-600 h-10"
          />
        </div>
        <button
          to="/login"
          className="z-50 mt-4 w-full bg-black rounded-xl text-white py-2 font-semibold font-sans text-center"
          type="submit"
        >
          Login
        </button>
      </form>

      <img
        src="https://wallpaper.dog/large/20476282.jpg"
        alt=""
        className="z-0 w-screen opacity-25 absolute top-0 left-0 object-cover h-screen"
      />
    </main>
  );
}
