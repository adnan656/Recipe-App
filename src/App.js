import React, { useState } from "react";
import Card from "./Components/Card";
import "./App.css";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure({
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});

const useStyles = makeStyles((theme) => ({
  h1: {
    width: "300px",
    height: "40px",
    marginLeft: "100px",
    color: "white",
    size: "250px",
  },
  textField: {
    width: "400px",
    height: "30px",
  },
  button: {
    width: "300px",
    height: "40px",
    marginTop: "50px",
    marginLeft: "50px",
  },
}));

const App = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [recipes, setRecipe] = useState([]);

  const APP_ID = "df84dd83";
  const APP_KEY = "d42f4e5f21fd597890c5def20930adaf";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getFood = async () => {
    if (query !== "") {
      const response = await axios.get(url); //this will return the food u searched

      if (!response.data.more) {
        toast.error("No Recipe Found");
      }
      setRecipe(response.data.hits); // recipie will hold 10 objects of the searched item
      setQuery("");
      console.log("log:", recipes);
    } else {
      toast.error("Form is Empty!");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getFood();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Grid
        style={{ paddingLeft: "60px", paddingRight: "60px" }}
        container
        spacing={8}
        justify="center"
      >
        <Grid item>
          <h1 className={classes.h1}> Recipe App</h1>

          <TextField
            className={classes.textField}
            value={query}
            onChange={onChange}
            variant="filled"
            color="primary"
            placeholder="SEARCH RECIPE"
          ></TextField>
          <div>
            {" "}
            <Button
              className={classes.button}
              onClick={onSubmit}
              variant="contained"
            >
              Submit{" "}
            </Button>{" "}
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          {" "}
        </Grid>
        {recipes !== [] &&
          recipes.map((recipe) => (
            <Grid item xs={12} md={6} lg={4}>
              {" "}
              <Card key={uuidv4()} recipe={recipe} />{" "}
            </Grid>
          ))}{" "}
      </Grid>
    </div>
  );
};

export default App;
