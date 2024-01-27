import Menu from "../components/Menu";
import ChartFrame from "../components/ChartFrame";
import "./Uploading.css";

const Uploading = () => {
  return (
    <div className="uploading">
      <div className="menu-frame">
        <Menu />
      </div>
      <ChartFrame />
    </div>
  );
};

export default Uploading;
