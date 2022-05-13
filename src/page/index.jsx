
import Cards from "./card";
import Navbars from "./navbar";

export default function Page() {
  return (
    <div>
      <Navbars />
      <div className="m-5 mt-3">
          <Cards/>
      </div>
    </div>
  );
}
