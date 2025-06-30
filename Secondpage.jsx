import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Secondpage() {
  const location = useLocation();
  const user = location.state?.userData;
  const navigate = useNavigate();
  const goToThirdpage = () => {
    navigate("/Thirdpage", { state: { userData: user } });
  };
  return (
    <>
      <div>Hello here is second page</div>
      <p>Name: {user?.name}</p>
      <p>Id: {user?.itemid}</p>
      <img src={user?.img}></img>
      <p onClick={() => goToThirdpage()}> gotoThirdpage</p>
    </>
  );
}
export default Secondpage;
