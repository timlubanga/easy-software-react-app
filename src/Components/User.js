import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "75%",
    marginBottom: "5px",
    backgroundColor: "lightblue",
  },
}));

export default function InsetUser() {
  const classes = useStyles();
  const [user, setuser] = React.useState(null);

  const params = useParams();
  const history = useHistory();
  React.useEffect(() => {
    const id = params["id"];

    axios
      .get(`https://607e868602a23c0017e8b79e.mockapi.io/api/v1/users/${id}`)
      .then((userData) => {
        const data = { ...userData.data };
        setuser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    user && (
      <>
        <h3>infomation details for {user.name}</h3>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Name" secondary={user.name} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Email" secondary={user.email} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Username" secondary={user.username} />
          </ListItem>
        </List>
        <Button variant="outlined" color="primary"
          onClick={() => {
            history.push("/");
          }}
        >
          Go back
        </Button>
      </>
    )
  );
}
