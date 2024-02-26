import {  Box, IconButton, Tabs } from "@mui/material";
import React from "react";
import { CustomTab } from "./Tab";
import { useDispatch, useSelector } from "react-redux";
import {
  addTab,
  closeTab,
  loadContent,
  switchTab,
  updateUrl,
} from "../redux/action";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
export const NavigationBar = () => {
  const tabData = useSelector((state) => state.tabs);
  const currentTabIndex = useSelector((state) => state.currentTabIndex);
  const dispatch = useDispatch();
  const handleAddTab = () => {
    dispatch(addTab());
  };

  const handleCloseTab = (index) => {
    console.log(index, "check");
    dispatch(closeTab(index));
  };

  const handleSwitchTab = (tabIndex) => {
    dispatch(switchTab(tabIndex));
  };

  const handleUrlInputChange = (tab, newUrl) => {
    console.log(newUrl);

    dispatch(updateUrl(tab, newUrl));
  };

  const handleUrlInputKeyPress = (tab, key) => {
    if (key === "Enter") {
      dispatch(loadContent(currentTabIndex, tab?.url));
    }
  };
  return (
    <>
    <Box sx={{ flexGrow: 2 }}>
      <>
        <>
          <Tabs
            value={currentTabIndex}
            //   onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            {tabData &&
              tabData.map((tab, index) => (
                <CustomTab
                  key={index}
                  tab={tab}
                  title={ `${tab.title + `${index+1}`}`}
                  isActive={index === currentTabIndex}
                  onClick={() => handleSwitchTab(index)}
                  onClose={() => handleCloseTab(index)}
                  onUrlChange={handleUrlInputChange}
                  onUrlKeyPress={handleUrlInputKeyPress}
                />
              ))}
            <IconButton onClick={handleAddTab}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Tabs>
        </>
      </>
    </Box>

    </>
  );
};
