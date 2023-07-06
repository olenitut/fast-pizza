import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const user = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 sm:my-16 text-center px-4">
      <h1 className="font-semibold text-xl  mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {user ? <Button to="/menu">Menu</Button> : <CreateUser />}
    </div>
  );
}

export default Home;
