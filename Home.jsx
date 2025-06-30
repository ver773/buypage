import data from "./data.json";
import Secondpage from "./Secondpage.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  let goToSecondpage = (result) => {
    console.log("$$$$$$$", result);
    navigate("/Secondpage", { replace: true, state: { userData: result } });
  };
  useEffect(() => {});

  return (
    <>
      {data.map((result, itemid) => {
        return (
          <div
            key={itemid}
            className="main-div"
            onClick={() => goToSecondpage(result)}
          >
            <div className="main-inner-div">
              <img className="main-div-img" src={result.img} alt="hello"></img>
            </div>

            <p className="container">Name : {result.name}</p>
            <p className="container">Item-id : {result.itemid}</p>
          </div>
        );
      })}
    </>
  );
}

export default Home;
