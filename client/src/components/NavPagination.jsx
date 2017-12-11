import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const NavPagination = (props) => {
  const {
    handlePageNext,
    handlePagePrevious,
    nextSet,
    currentPage
  } = props;

  return (
    <div>
      {currentPage > 1 ? (
        <Button
          circular
          icon='arrow left'
          onClick={handlePagePrevious} />) :
          null}
      {nextSet.length ? (
        <Button
          circular
          icon='arrow right'
          onClick={handlePageNext} />):
          null}
    </div>
  );
};

export default NavPagination;
