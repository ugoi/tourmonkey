import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Grid, Paper, Typography } from "@mui/material";
import cities from "./data.json";
import TourCard from "./components/TourCard/TourCard";
import SearchAppBar from "./components/AppBar/AppBar";

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <>
        <Container maxWidth="lg">
          {cities.map((city) => (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginBottom={3}
                marginTop={5}
              >
                Top {city.name} Tours
              </Typography>
              <Grid container spacing={5}>
                {city.tours.map((tour) => (
                  <TourCard tour={tour} />
                ))}
              </Grid>
            </>
          ))}
        </Container>
      </>
    </div>
  );
}

export default App;
