import LeftSide from "./page/LeftSide";
import RightSide from "./page/RightSide";

function App() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 justify-around items-center gap-8 h-full  p-10 w-full ">
        <LeftSide />
        <RightSide />
    </div>
  );
}

export default App;
