import React from "react";
import './SortingBar.css'

export default function SortingBar() {
  return (
    <div className="sortingBar">

      <div className="clearSection"></div>
      <div className="sorting">
        <label htmlFor="sorting">Sort By</label>
        <select name="sorting" id="sorting">
          <option value="popularty">popularty</option>
        </select>
      </div>
    </div>
  );
}
