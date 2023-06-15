'use client';

import React from "react";
import Box from "@mui/material/Box";
import { useFilterContext } from "../conetext/FilterContext";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Slider from "@mui/material/Slider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import { makeStyles } from "@mui/styles";
import FormatPrice from "../helper";

const useStyles = makeStyles((theme) => ({
  button: {
    '.MuiButton-contained': {
      padding: '0px !important'
     }
  },
  '.MuiButton-contained': {
    padding: '0px !important'
   }
}));
export const FilterSection = () => {
  const classes = useStyles();

  const {
    filterObj: { color, text, company, range,maxPrice,minPrice },

    changeSearchValue,
    setCategoryFilter,
    selectedIndex,
    setRangeChange,
    clearFilter,
    products=[],
  } = useFilterContext();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getUniqueData = (data, attr) => {
    let newVal =  data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };
  const colorsData = getUniqueData(products, "colors");
  const categoryData = getUniqueData(products, "category");
  const companyData = getUniqueData(products, "company");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="space-between"
    >
      <TextField
        id="outlined-controlled"
        label="search here"
        size="small"
        name="text"
        sx={{
          width: 200,
          height: 10,
          marginBottom: 8,
        }}
        value={text}
        margin="dense"
        onChange={changeSearchValue}
      />
      <Box>
        <Typography variant="h6">Category</Typography>
        {categoryData.map((each, index) => {
          return (
            <>
              <List key={index}>
                <ListItem component={"p"} disablePadding>
                  <ListItemButton
                    selected={selectedIndex == index}
                    component="button"
                    onClick={(event) => setCategoryFilter(event, each, index)}
                    sx={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <ListItemText primary={capitalizeFirstLetter(each)} />
                  </ListItemButton>
                </ListItem>
              </List>
            </>
          );
        })}
      </Box>
      <Box my={2}>
        <Typography gutterBottom variant="h6">
          Company
        </Typography>
        <TextField
          id="outlined-select-currency-native"
          select
          // defaultValue="EUR"
          name="company"
          SelectProps={{
            native: true,
          }}
          size="small"
          value={company}
          onChange={changeSearchValue}
        >
          {companyData.map((option, index) => (
            <option key={index} value={option}>
              {capitalizeFirstLetter(option)}
            </option>
          ))}
        </TextField>
      </Box>
      <Box>
        <Box mb={2} display="flex" alignItems="start" flexDirection="column">
          <Typography gutterBottom variant="h6">
            Colors
          </Typography>
          <Box display="flex" alignItems="start">
            {colorsData.length &&
              colorsData.map((currColor, index) => {
                if (currColor === "all") {
                  return (
                    <Button
                      key={index}
                      // type="Button"
                      value={currColor}
                      name="color"
                      // className="color-all--style"
                      onClick={changeSearchValue}
                    sx={{minWidth:0 }}

                      size="small"
                    >
                      all
                    </Button>
                  );
                }
                return (
                  <Button
                    key={index}
                    sx={{ color: `${color}`,minWidth:0 }}
                    value={currColor}
                    name="color"
                    onClick={changeSearchValue}
                    size="small"
                    disableRipple
                    className={classes.button}
                  >
                    {color === currColor ? (
                      <CheckCircleIcon fontSize="medium" />
                    ) : (
                      <CircleIcon
                        sx={{ color: `${currColor}` }}
                        fontSize="medium"
                      />
                    )}
                  </Button>
                );
              })}
          </Box>
        </Box>
      </Box>
      <Box mb={2}>
        <Typography variant="h6">Price</Typography>
        <Typography variant="h6"><FormatPrice price={range}/></Typography>
        <Slider
          aria-labelledby="discrete-slider-always"
          step={100}
          min={minPrice}
          max={maxPrice}
          valueLabelDisplay={"Price"}
          // className={classes.slider}
          size="small"
          value={range}
          // defaultValue={1000000}
          onChange={setRangeChange}
          sx={{
            height: 5,
            width: 180,
          }}
          // onMouseOver={handleLabelShow}
          // onMouseOut={handleLabelHide}
        />
      </Box>

      <Button
        color="secondary"
        variant="contained"
        onClick={clearFilter}
        size="medium"
      >
        Clear Filter
      </Button>
    </Box>
  );
};
