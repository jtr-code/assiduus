import "./Cashflow.css";
import VerticalPlot from "../VerticalPlot/VerticalPlot";
import StackedBarChart from "../StackedBarChart/StackedBarChart";

const Cashflow = () => {
  const data = [
    { name: "Older", value: 3 },
    { name: "Jan 01-08", value: 6 },
    { name: "Jan 09-16", value: 15 },
    { name: "Jan 17-24", value: 9 },
    { name: "Jan 25-31", value: 12 },
    { name: "Future", value: 9 }
  ];

  return (
    <div className="cashflow">
      <div className="cashflow-top">
        <p>Total cash flow</p>
        <div className="cash-btn">
          <button>
            <span></span>In
          </button>
          <button>
            <span></span>Out
          </button>
        </div>
      </div>
      <hr />
      <div className="cashflow-bottom">
        <StackedBarChart data={data} />
      </div>
    </div>
  );
};

export default Cashflow;
