import "./Invoices.css";
import VerticalPlot from "../VerticalPlot/VerticalPlot";

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";

const Invoices = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = [
    { name: "Older", value: 3 },
    { name: "Jan 01-08", value: 6 },
    { name: "Jan 09-16", value: 15 },
    { name: "Jan 17-24", value: 9 },
    { name: "Jan 25-31", value: 12 },
    { name: "Future", value: 9 }
  ];

  return (
    <div className="invoice">
      <div className="invoice-top">
        <p>Invoices owed to you</p>
        <button onClick={handleOpen}>New Sales Invoice</button>
      </div>
      <hr />
      <div className="invoice-bottom">
        <VerticalPlot data={data} />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload Sales Invoice</DialogTitle>
        <DialogContent>
          <input type="file" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button>Upload</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Invoices;
