import "./Sidebar.css";
import {
  Dashboard,
  AccountBalanceWallet,
  AttachMoney,
  Description,
  Person,
  Contacts
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <span>
            <Dashboard />
            Dashboard
          </span>
        </li>
        <li>
          <span>
            <AccountBalanceWallet />
            Accounts
          </span>
        </li>
        <li>
          <span>
            <AttachMoney />
            Payroll
          </span>
        </li>
        <li>
          <span>
            <Description />
            Reports
          </span>
        </li>
        <li>
          <span>
            <Person />
            Advisor
          </span>
        </li>
        <li>
          <span>
            <Contacts />
            Contacts
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
