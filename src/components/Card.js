import React, { useEffect, useState } from "react";
import Films from "./Films";
import Homeworld from "./Homeworld";

function Card(props) {
  const [movie, setMovie] = useState([]);
  const [homeworld, setHomeworld] = useState([]);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  // useEffect(() => {
  //   const movieFetch = async () => {
  //     const res = await Promise.all(props.info.films.map((links) => links));
  //     const data = await res.json();
  //     setMovie((prevMovie) => [...prevMovie, data]);
  //   };
  //   movieFetch();
  // }, []);

  const seriesNo = (props.page - 1) * 10 + props.ind + 1;

  const cj = props.info.name;
  const imageUrl = `https://picsum.photos/200/300?random=${cj}`;

  const movieFetch = async () => {
    try {
      if (movie.length) {
        return;
      }
      const fetchRequests = props.info.films.map((link) =>
        fetch(link).then((response) => response.json())
      );
      const responseData = await Promise.all(fetchRequests);
      setMovie((prevMovie) => [...prevMovie, ...responseData]);
      console.log(movie);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError1(true);
    }
  };

  const homeworldFetch = async () => {
    try {
      const res = await fetch(props.info.homeworld);
      const data = await res.json();
      setHomeworld(data);
    } catch (err) {
      console.log(err);
      setError2(true);
    }
  };

  const [more, setMore] = useState(false);
  const cardHandler = () => {
    movieFetch();
    homeworldFetch();
    setMore((data) => !data);
  };

  return (
    <button
      onClick={cardHandler}
      className={`flex justify-evenly items-center border-2 rounded-xl border-[#940750] p-8 w-3/4 m-auto my-5 transform transition duration-300 ease-in-out hover:scale-110 ${
        props.ind % 2 ? "flex-row-reverse" : ""
      } ${more ? "flex-col" : ""}`}
    >
      {" "}
      <div className="text-xl">
        {seriesNo + ". " + props.info.name.toUpperCase()}
      </div>
      <div>
        <img className="rounded-xl" src={imageUrl} />
      </div>
      {more && (
        <div className=" flex flex-col items-center w-2/3  ">
          <div className="flex text-red-700">
            <div className="flex flex-col justify-start items-start p-2">
              <p className="text-[#4e4e50]">
                Birth Year :{" "}
                <span className="text-red-700"> {props.info.birth_year}</span>
              </p>
              <p className="text-[#4e4e50]">
                Created :{" "}
                <span className="text-red-700">
                  {" "}
                  {props.info.created.split("T")[0]}
                </span>
              </p>
              <p className="text-[#4e4e50]">
                Height :{" "}
                <span className="text-red-700"> {props.info.height}</span>
              </p>
            </div>
            <div className="flex flex-col  items-start p-2">
              <p className="text-[#4e4e50]">
                Mass : <span className="text-red-700"> {props.info.mass}</span>
              </p>
              <p className="text-[#4e4e50]">
                Skin color :{" "}
                <span className="text-red-700"> {props.info.skin_color}</span>
              </p>
              <p className="text-[#4e4e50]">
                Gender :{" "}
                <span className="text-red-700"> {props.info.gender}</span>
              </p>
            </div>
          </div>
          {!error1 ? (
            <div className="p-2">
              <p className="text-lg">Films</p>
              {movie.map((items, index) => (
                <Films data={items} key={index} />
              ))}{" "}
            </div>
          ) : (
            <div>Somthing Went Wrong </div>
          )}
          {!error2 ? (
            <div className="p-2">
              <p className="text-lg">Homeworld</p>
              <Homeworld data={homeworld} />
            </div>
          ) : (
            <div>Somthing Went Wrong</div>
          )}
          {/* <div>{props.info.films.map((items) => items)}</div> */}
        </div>
      )}
    </button>
  );
}

export default Card;
