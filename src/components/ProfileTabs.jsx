import classNames from "classnames";
import React, { Fragment } from "react";
import { FiUser, FiPhone, FiGrid } from "react-icons/fi";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Tooltip, Zoom } from "@mui/material";

export default function ProfileTabs({ currentTab, setCurrentTab }) {
  const tabsList = [
    { icon: FiUser, id: "about-tab", title: "About" },
    { icon: FiGrid, id: "project-tab", title: "Projects" },
    { icon: FiPhone, id: "contact-tab", title: "Contact" },
  ];
  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <Tabs value={currentTab} onChange={handleChange} centered>
      {tabsList.map((item, index) => {
        const Icon = item.icon;
        return (
          <Tooltip title={item.title} arrow TransitionComponent={Zoom}>
            <Tab size="small" icon={<Icon size={20} />} />
          </Tooltip>
        );
      })}
    </Tabs>
  );
}
