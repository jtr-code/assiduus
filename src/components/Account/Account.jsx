import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./Account.css";
import LinePlot from "../Lineplot/Lineplot";

const Account = () => {
  const data = [10, 30, 25, 40, 20, 50, 15, 35];

  return (
    <div className="account">
      <div className="acc-top">
        <div className="title">
          <p>Checking account</p>
        </div>
        <div className="sort">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="manage">Manage</InputLabel>
            <Select labelId="manage" id="manage" label="manage">
              <MenuItem>Ten</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="months">January</InputLabel>
            <Select labelId="months" id="months" label="months">
              <MenuItem>February</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <hr />
      <div className="acc-bottom">
        <LinePlot data={data} />
      </div>
    </div>
  );
};

export default Account;
