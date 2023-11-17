import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Account from "./components/Account/Account";
import Watchlist from "./components/Watchlist/Watchlist";
import Invoices from "./components/Invoices/Invoices";
import Cashflow from "./components/Cashflow/Cashflow";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="Charts">
          <Account />
          <Invoices />
          <Cashflow />
          <Watchlist />
        </div>
      </div>
    </>
  );
};

export default App;
