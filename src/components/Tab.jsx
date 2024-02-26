import { Card, IconButton, Tab } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export const CustomTab = ({ tab, isActive, onClose, onClick, title }) => {
  return (
    <>
      <Card
        sx={{
          width: "120px",
          height: "44px",
          alignItems: "center",
          margin: "2px",
          display: "flex",
          justifyContent: "center",
        }}
        className={`tab ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        <div className="tab-header">
          <span>{title}</span>
          {onClose && (
            <IconButton
              onClick={(e) => {
                onClose();
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
        </div>
      </Card>
    </>
  );
};
