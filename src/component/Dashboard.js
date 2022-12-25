import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateSharpIcon from "@mui/icons-material/UpdateSharp";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// import  from "react";

export default function BasicTable() {
  const [rows, setRows] = useState([
    // {
    //   Name: "",
    //   Hob: "",
    //   Phone: 0,
    //   Email: "",
    // },
  ]);
  const [id, setid] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = (idd) => {
    setid(idd);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState(0);
  const [Email, setEmail] = useState("");
  const [Hob, setHob] = useState("");

  useEffect(() => {
    try {
      const getapi = async () => {
        const res = await axios.get("/api/form");
        const arr = res.data.data;
        // console.log(arr);
        arr.map((ele) => {
          setRows((olditems) => [...olditems, ele]);
        });
      };
      getapi();
      console.log(rows);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/delete/${id}`);
      if (response.data.success === true) {
        alert("Deleted successfully!");
        // setloading(!loading);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      console.log("yes entered", id);
      const response = await axios.put("/api/update", {
        Name,
        Phone,
        Email,
        Hob,
        id,
      });

      if (response.data.success === true) {
        alert("Content successfully saved");
      }
      setOpen(false);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  if (rows.length === 0 || rows === null) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Hobbies</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, INDEX) => (
            <>
              <TableRow
                key={row.Name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell align="right">{row.Phone}</TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="right">{row.Hob}</TableCell>
                <TableCell
                  align="right"
                  onClick={() => {
                    console.log(row._id);
                    handleDelete(row._id);
                  }}
                >
                  <DeleteIcon />{" "}
                </TableCell>

                {/* update */}
                <TableCell align="right">
                  <Button onClick={() => handleOpen(row._id)}>
                    <UpdateSharpIcon />
                  </Button>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            UPDATE
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Phone"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Hobbies</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  type="text"
                  placeholder="Enter HOBBY"
                  value={Hob}
                  onChange={(e) => setHob(e.target.value)}
                />
              </div>
              <br />
              <div className="col-12">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={() => {
                    handleUpdate();
                  }}
                >
                  Submit form
                </button>
              </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </TableContainer>
  );
}
