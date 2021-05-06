import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Edit, ArrowForward } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function UserView({ handleOpen, id }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Button
        onClick={() => {
          history.replace(`/users/${id}`);
        }}
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<ArrowForward />}
      >
        View
      </Button>

      <Button
        variant="contained"
        size="small"
        color="secondary"
        className={classes.button}
        startIcon={<Edit />}
        onClick={handleOpen}
      >
        Edit
      </Button>
    </div>
  );
}

export default UserView;
