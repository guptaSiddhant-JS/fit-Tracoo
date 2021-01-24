import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
// Module Styling from Materal UI
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  //classes from the Material Ui for the Modal
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  // use State // part of a HOOK look it sid
  const [posts, setPosts] = useState([]);
  //for the to modal state wheather it is open or close
  const [open, setOpen] = useState(false);
  // const [username, setUsername] = useState(false);
  // const [email, setEmail] = useState(false);
  // const [password, setPassword] = useState(false);

  // useEffect --> it runs a piece of code based on a specific condition
  useEffect(() => {
    // this is where the cose runs
    db.collection("posts").onSnapshot((snapshot) => {
      //onSnapshot --> when ever a data is added to firebase it will update the code
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []); //[] whatever is in the functions runs it once

  return (
    <div className="app">
      {/* Modal Functon From Materaial UI */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              className="app__headerImage"
              src="https://www.pngitem.com/pimgs/m/461-4618525_ig-small-instagram-logo-2019-hd-png-download.png"
              alt=""
            />
            {/* <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> */}
          </center>
        </div>
      </Modal>
      <div className="app__header">
        {/* //app_header is {bem} best way to add a class name  componet__element*/}
        <img
          className="app__headerImage"
          src="https://www.pngitem.com/pimgs/m/461-4618525_ig-small-instagram-logo-2019-hd-png-download.png"
          alt=""
        />
      </div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Sign Up
      </Button>
      <h1> Working</h1>
      {/* looping the post array to get the element  */}
      {/* key={id} --> what this will do is that will do not render the old post*/}
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
    </div>
  );
}

export default App;

// how our app looks like
// Headers
// post

// ZSx6eCf3MQdYkTzEf4mW document Id
