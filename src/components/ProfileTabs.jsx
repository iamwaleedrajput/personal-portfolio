import classNames from "classnames";
import React from "react";
import { FiUser, FiPhone } from "react-icons/fi";
import { Button } from "reactstrap";
export default function ProfileTabs({ currentTab, setCurrentTab }) {
  const tabsList = [{ icon: FiUser }, { icon: FiPhone }];
  return (
    <div className="profile-tabs">
      {tabsList.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className={classNames("tab-item", { active: currentTab === index })}
            onClick={() => setCurrentTab(index)}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
}
