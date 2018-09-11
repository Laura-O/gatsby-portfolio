import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types';

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext;

  if (tags) {
    return (
      <div>
        <ul>
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

export default AllTags;

AllTags.propTypes = {
  pathContext: PropTypes.shape({
    tages: PropTypes.arrayOf(PropTypes.string),
  }),
};
