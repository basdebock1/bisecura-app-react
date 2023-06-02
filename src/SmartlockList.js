import Smartlock from "./Smartlock";

const SmartlockList = ({ smartlocks, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {smartlocks &&
        smartlocks.map((lock) => <Smartlock key={lock.id} smartlock={lock} />)}
    </div>
  );
};

export default SmartlockList;
