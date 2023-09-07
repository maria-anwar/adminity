import React from "react";
import "./css/addPosition.css";
import { Link } from "react-router-dom";
const TitleBar = (props) => {
  return (
    <>
      <section className="pt-3">
        <div className="titlebar-container">
          <div className="title">
            {props.title} <span>({props.count})</span>
          </div>
          <div>

          <form className="">
          <div className="search-container">
            <input
              class=""
              type="text"
              placeholder="Search.."
             className="form-control"
            />
            <i className="fa fa-search search-icon" />

          </div>
            <Link class="add-link bg-orange" to={props.url}>
              {props.addbtn}
            </Link>
          </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default TitleBar;
