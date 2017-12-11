import React from 'react';
import { Divider } from 'semantic-ui-react'
import Thumbnail from './Thumbnail.jsx';
import NavPagination from './NavPagination.jsx';

const SearchResults = (props) => {
  const {
    searchResults,
    nextSet,
    currentPage,
    resultsPerPage,
    handlePageNext,
    handlePagePrevious,
    handleThumbnailSelect
  } = props;

  const thumbnails = searchResults.map((gif, index) => {
    return (
      <Thumbnail
        index={index}
        handleThumbnailSelect={handleThumbnailSelect}
        key={gif.id}
        gifData={gif} />
    );
  });
  
  return (
    <div style={{ textAlign: 'center' }}>
      <Divider />
      <h1 style={{ fontWeight: 300 }}>
        Search Results
      </h1>
      <div>
        {thumbnails}
      </div>
      <div>
        <NavPagination
          handlePageNext={handlePageNext}
          handlePagePrevious={handlePagePrevious}
          nextSet={nextSet}
          currentPage={currentPage} />
      </div>
    </div>
  );
}

export default SearchResults;
