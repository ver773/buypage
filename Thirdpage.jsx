import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Thirdpage() {
  const location = useLocation();
  const user = location.state?.userData;
  const navigate = useNavigate();
  const goToFinalpage = () => {
    navigate("/Finalpage", { state: { userData: user } });
  };

  return (
    <>
      <div>
        <div>Hello here is Third page</div>
        <p>Name: {user?.name}</p>
        <p>Id: {user?.itemid}</p>
        <p> img :{user?.img}</p>
        <p onClick={() => goToFinalpage()}>goToFinalpage</p>
      </div>
    </>
  );
}

export default Thirdpage;
