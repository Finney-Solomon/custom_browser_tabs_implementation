import { Search } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchResults, searchValue } from "../redux/action";
import SearchIcon from '@mui/icons-material/Search';
export const SearchPage = () => {
  const tabData = useSelector((state) => state.tabs);
  const [query, setQuery] = useState("");
  const currentTabIndex = useSelector((state) => state.currentTabIndex);
  const dispatch = useDispatch();

  const handleQuery = (value) => {
    dispatch(searchValue(value, currentTabIndex));
  };

  const handleSearchResults = (value) => {
    dispatch(searchResults(value, currentTabIndex));
  };

  const handleSearch = async () => {
    try {
      const apiKey = "-";
      const cx = "";
      const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`;
      const response = await axios.get(apiUrl, { timeout: 5000 });
      handleSearchResults(response.data.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <>
      {
        <Card
          style={{
            backgroundColor: "#ffffff",
            padding: "10px",
            minHeight: "81.7vh",
          }}
        >
          <div
            style={{
              alignItems: "center",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
        
            <TextField sx={{width:"40vw"}}
              type="text"
              value={tabData[currentTabIndex]?.searchQuery}
              onChange={(e) => {
                setQuery(e.target.value);
                handleQuery(e.target.value);
              }}
              label="Search for..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                  
                    onClick={handleSearch}
                   
                    edge="end"
                  >
                  <SearchIcon/>
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>

          <List style={{ padding: "50px" }}>
            {tabData[currentTabIndex]?.results?.map((result) => (
              <Card
                key={result.link}
                style={{
                  backgroundColor: "#eceff3",
                  marginTop: "20px",
                  padding: "10px",
                  width: "50vw",
                }}
              >
                <ListItemButton key={result.link}>
                  <li>
                    <Typography
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "#0044ff" }}
                    >
                      {result.title}
                    </Typography>
                    <br />
                    <Typography>{result.snippet}</Typography>
                  </li>
                </ListItemButton>
              </Card>
            ))}
          </List>
        </Card>
      }
    </>
  );
};
