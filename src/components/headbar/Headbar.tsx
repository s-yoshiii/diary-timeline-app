import "./Headbar.scss";
import HeadbarInput from "./HeadbarInput";
import HeadbarTitle from "./HeadbarTitle";
const Headbar = () => {
  return (
    <div className="headbar">
      <HeadbarTitle />
      <HeadbarInput />
    </div>
  );
};

export default Headbar;
