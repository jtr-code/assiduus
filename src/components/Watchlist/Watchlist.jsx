import "./Watchlist.css";

const Watchlist = () => {
  return (
    <div className="watchlist">
      <div className="watchlist-top">
        <p>Account Watchlist</p>
      </div>
      <hr />
      <div className="watchlist-bottom">
        <div className="one-div">
          <p>Account</p>
          <h5>Sales</h5>
          <h5>Advertising</h5>
          <h5>Inventory</h5>
          <h5>Entertainment</h5>
          <h5>Product</h5>
        </div>
        <div className="one-div">
          <p>This month</p>
          <h5>1,194,58</h5>
          <h5>6,72,628</h5>
          <h5>4,69,232</h5>
          <h5>0.00</h5>
          <h5>4,6752.10</h5>
        </div>

        <div className="one-div">
          <p>YTD</p>
          <h5>11,194,58</h5>
          <h5>9,72,628</h5>
          <h5>4,69,232</h5>
          <h5>0.00</h5>
          <h5>23,6752.10</h5>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
