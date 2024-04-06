import { useState } from "react";
import Character from "./components/Character";
import Header from "./components/Header";
import img from "./assets/img.webp";
function App() {
  const [show, setShow] = useState(false);
  const charHandler = () => {
    setShow(true);
  };
  return (
    <>
      <Header />
      {show ? (
        <Character />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img src={img} className="w-1/3 rounded-3xl  my-8 " />

          <button
            onClick={charHandler}
            className="text-white text-xl  border border-[#b91c1c] rounded-2xl px-4 py-2 hover:bg-[#c3073f] hover:text-white"
          >
            Explore The Characters of Star Wars
          </button>
        </div>
      )}
    </>
  );
}

export default App;
