import { useLocation } from "react-router-dom";

function Finalpage() {
  const location = useLocation();
  const user = location.state?.userData;
  console.log(user?.name);
  console.log(user?.itemid);
  return (
    <>
      <div>
        <p> name :{user?.name}</p>
        <p> Id :{user?.itemid}</p>
        <p>img : {user?.img}</p>
      </div>
    </>
  );
}

export default Finalpage;
