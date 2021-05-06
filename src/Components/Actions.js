import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Edit, ArrowForward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ActionButtons({handleOpen}) {
  const classes = useStyles();

  return (
    <div>
      <Button
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
