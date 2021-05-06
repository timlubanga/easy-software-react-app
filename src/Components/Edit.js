import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Actions from "./Actions";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ id, setupdate }) {
  const classes = useStyles();

  const [user, setuser] = React.useState({
    email: "",
    phoneNumber: "",
    name: "",
  });
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnchange = (e, name) => {
    const data = { ...user, [name]: e.target.value };
    setuser(data);
  };

  const handleSubmit = () => {
    const values = Object.values(user);
    for (let value of values) {
      if (!value) {
        alert("a field cannot be empty");

        return;
      }
    }
    axios
      .put(`https://607e868602a23c0017e8b79e.mockapi.io/api/v1/users/${id}`, {
        ...user,
      })
      .then((userData) => {
        const data = { ...userData };
        setupdate(data);
        handleClose();
      })
      .then((data) => {
        setupdate(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Actions handleOpen={handleOpen} id={id} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h4> editing user {id} </h4>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="email"
                required
                variant="outlined"
                onChange={(e) => handleOnchange(e, "email")}
              />
              <TextField
                id="outlined-basic"
                label="name"
                variant="outlined"
                required
                onChange={(e) => handleOnchange(e, "name")}
              />
              <TextField
                onChange={(e) => handleOnchange(e, "phoneNumber")}
                id="outlined-basic"
                label="phonumber"
                variant="outlined"
                required
              />
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleSubmit}
              >
                Update
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
