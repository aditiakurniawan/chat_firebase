import {
  IoSendSharp,
  IoSettingsOutline,
  IoLogOutOutline,
  IoMenu,
} from "react-icons/io5";
import { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function ChatMenu() {
  const navigate = useNavigate();

  //logout
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="w-1/4 flex flex-col fixed top-20 right-2 bg-white shadow-lg rounded-xl border">
      <div className="w-full flex justify-between h-10 px-3 items-center">
        <IoSettingsOutline />
        <p>Settings</p>
      </div>
      <div
        className="w-full flex justify-between h-10 px-3 items-center"
        onClick={logout}
      >
        <IoLogOutOutline />
        <p>Logout</p>
      </div>
    </div>
  );
}

export default function Chat() {
  //state
  const [showMenu, setShowMenu] = useState(false);
  const [message, setMessage] = useState([]);
  const [signedUser, setSignedUser] = useState(
    JSON.parse(localStorage.getItem("username"))
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!signedUser) {
      navigate("/");
    }
  });

  //toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //scroll to bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleMessage = (e) => {
    e.preventDefault();
    let msg = e.target.message.value;

    let user = JSON.parse(localStorage.getItem("username"));
    e.target.message.value = "";

    setMessage([
      ...message,
      {
        id: Date.now(),
        message: msg,
        createAt: new Date(),
        user: user,
      },
    ]);
  };

  return (
    <main className="h-screen w-screen flex flex-col">
      <header className="flex items-center justify-between py-4 px-5 bg-gradient-to-r from-indigo-600 to-indigo-900 w-full fixed z-50">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-full border-2 border-white"
            src={signedUser?.avatar}
            alt="avatar"
          />
          <h1 className="text-white font-medium">{signedUser?.username}</h1>
        </div>

        <IoMenu onClick={toggleMenu} className="text-white text-2xl " />
      </header>
      {showMenu && <ChatMenu />}

      <div className="w-full mt-auto flex flex-col  py-24 px-3  gap-5">
        {message.map((e) => (
          <div
            key={e.id}
            className="w-auto max-w-screen-md px-4 py-2 ml-auto bg-white flex flex-col rounded-lg shadow-md"
          >
            <div className="flex items-center gap-2 relative">
              <img
                src={e.user.avatar}
                alt=""
                className="w-10 h-10 absolute top-[-20px] left-[-30px] rounded-full"
              />
              <p className="ml-auto mt-4">{e.message}</p>
            </div>
            <div>
              <div className="flex flex-col items-start mt-4 ">
                <small>{e.user.username}</small>
                <small className="text-xs text-gray-400">
                  {moment(e.createAt).format("dddd DD/MM/YYYY HH:mm")}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form
        className="bg-gradient-to-r from-indigo-600 to-indigo-900 fixed bottom-0 left-0 w-full h-16 flex items-center gap-2 px-4"
        onSubmit={handleMessage}
      >
        <input
          type="text"
          className="rounded-full px-3 bg-white h-8  w-full"
          name="message"
          id="message"
          required
        />
        <button className="rounded-full  bg-white w-9 h-8 shadow-2xl">
          <IoSendSharp className="mx-auto" />
        </button>
      </form>
    </main>
  );
}
