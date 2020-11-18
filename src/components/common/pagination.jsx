import React from "react";
import _ from "lodash";

export const Paginate = (props) => {
  const { itemCount, pageSize, currentPage } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;
  return (
    <ul className="pagination">
      {pages.map((page) => {
        return (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a
              className="page-link cursor-pointer"
              onClick={() => {
                props.onClick(page);
              }}
            >
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
