import React from "react";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
function SidebarItem({ menu }) {
  return (
    <div className="sidebar-item">
      <Badge badgeContent={1} color="primary">
        <Button variant="contained" color="secondary">{menu.name}</Button>
      </Badge>
    </div>
  );
}

export default SidebarItem;