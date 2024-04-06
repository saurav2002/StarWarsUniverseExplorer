import React, { useEffect, useState } from "react";
import Card from "./Card";
import { ColorRing } from "react-loader-spinner";

function Character() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  var url = "https://swapi.dev/api/people/?page=" + page;

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setCharacter(data.results);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(true);
      }
      setLoading(false);
    };

    fetchCharacter();
  }, [url]);

  const pageHandler = (no) => {
    if (no === 0 || no < 0 || no > 9 || no === page) {
      return;
    }
    setPage(no);
    url = "https://swapi.dev/api/people/?page=" + no;
  };

  return !error ? (
    !loading ? (
      <>
        <div className="text-white text-xl text-center mt-4">
          Characters of Star War
        </div>
        <div className="text-white">
          {character.map((item, index) => (
            <div key={index}>
              {<Card info={item} ind={index} page={page} />}
            </div>
          ))}
        </div>
        <div className="text-white flex justify-center items-center w-1/3 m-auto py-2">
          <button
            onClick={() => pageHandler(page - 1)}
            className="border border-[#b91c1c] rounded-md px-4 py-2 hover:bg-[#c3073f] hover:text-white"
          >
            Previous
          </button>
          <button
            onClick={() => pageHandler(page)}
            className=" text-[#4e4e50] border border-[#b91c1c] rounded-2xl px-4 py-2 hover:bg-[#c3073f] hover:text-white"
          >
            {page}
          </button>
          <button
            onClick={() => pageHandler(page + 1)}
            className="border border-[#b91c1c] rounded-2xl px-4 py-2 hover:bg-[#c3073f] hover:text-white"
          >
            {page + 1}
          </button>
          <button
            onClick={() => pageHandler(page + 2)}
            className="border border-[#b91c1c] rounded-2xl px-4 py-2 hover:bg-[#c3073f] hover:text-white"
          >
            {page + 2}
          </button>
          <button
            onClick={() => pageHandler(page + 3)}
            className="border border-[#b91c1c] rounded-2xl px-4 py-2 hover:bg-[#c3073f] hover:text-white"
          >
            {page + 3}
          </button>
          <button
            onClick={() => pageHandler(page + 1)}
            className="border border-[#b91c1c] rounded-2xl px-4 py-2 hover:bg-[#c3073f] hover:text-white"
          >
            Next
          </button>
        </div>
      </>
    ) : (
      <div className="flex justify-center items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#b91c1c", "#b91c1c", "#b91c1c", "#b91c1c", "#b91c1c"]}
        />
      </div>
    )
  ) : (
    <div className="text-white">Error Occured </div>
  );
}

export default Character;
