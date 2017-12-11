import React from 'react';
import searchForGIF from '../apiHelper';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import GifModal from './GifModal.jsx';
import { paginationHelper } from '../utils';

class GifBrowser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      searchResults: [],
      currentPage: 1,
      resultsPerPage: 20,
      modalOpenState: false,
      selectedGifUrl: '',
      selectedGifIndex: undefined,
      currentSet: []
    }

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSearchOnEnter = this.handleSearchOnEnter.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handlePageNext = this.handlePageNext.bind(this);
    this.handlePagePrevious = this.handlePagePrevious.bind(this);
    this.handleThumbnailSelect = this.handleThumbnailSelect.bind(this);
    this.handleGifModalClose = this.handleGifModalClose.bind(this);
    this.handleSlideshowNext = this.handleSlideshowNext.bind(this);
    this.handleSlideshowPrevious = this.handleSlideshowPrevious.bind(this);
  }

  handleSearchInputChange(event, data) {
    const { value } = data;
    this.setState({ keyword: value });
  }

  handleSearchOnEnter(event) {
    if (event.key === 'Enter') {
      this.handleSearchSubmit();
    }
  }

  handleSearchSubmit() {
    const { keyword } = this.state;
    searchForGIF(keyword)
      .then(gifData => this.setState({ searchResults: gifData }));
  }

  handlePageNext() {
    const { currentPage } = this.state;
    this.setState({currentPage: currentPage + 1});
  }

  handlePagePrevious() {
    const { currentPage } = this.state;
    this.setState({currentPage: currentPage -1 });
  }

  handleThumbnailSelect(gifData, index) {
    const {
      currentPage,
      resultsPerPage,
      searchResults
    } = this.state;
    
    const resultsToRender = paginationHelper(currentPage, resultsPerPage, searchResults);
    const { currentSet } = resultsToRender;
    const { embed_url } = gifData

    this.setState({ 
      modalOpenState: true,
      selectedGifUrl: embed_url,
      selectedGifIndex: index,
      currentSet
     });
  }

  handleGifModalClose() {
    this.setState({ modalOpenState: false })
  }

  handleSlideshowNext() {
    const {
      selectedGifIndex,
      currentSet
    } = this.state;

    if (currentSet[selectedGifIndex + 1]) {
      const nextGif = currentSet[selectedGifIndex + 1];
      const { embed_url = '' } = nextGif;
      
      this.setState({
        selectedGifIndex: selectedGifIndex + 1,
        selectedGifUrl: embed_url
      });
    } else {
      const firstGif = currentSet[0];
      const { embed_url = '' } = firstGif;
      
      this.setState({
        selectedGifIndex: 0,
        selectedGifUrl: embed_url
      });
    }
  }

  handleSlideshowPrevious() {
    const {
      selectedGifIndex,
      currentSet
    } = this.state;

    if (currentSet[selectedGifIndex - 1]) {
      const nextGif = currentSet[selectedGifIndex - 1];
      const { embed_url = '' } = nextGif;
      
      this.setState({
        selectedGifIndex: selectedGifIndex - 1,
        selectedGifUrl: embed_url
      });
    } else {
      const firstGif = currentSet[currentSet.length - 1];
      const { embed_url = '' } = firstGif;
      
      this.setState({
        selectedGifIndex: currentSet.length -1,
        selectedGifUrl: embed_url
      });
    }
  }

  render() {
    const {
      keyword,
      searchResults,
      currentPage,
      resultsPerPage,
      modalOpenState,
      selectedGifUrl
    } = this.state;

    const resultsToRender = paginationHelper(currentPage, resultsPerPage, searchResults);

    const { 
      currentSet = [],
      nextSet = []
    } = resultsToRender;

    return (
      <div>
        <div style={{
          textAlign: 'center',
          marginTop: 24
          }}>
          <SearchBar 
            onSearchSubmit={this.handleSearchSubmit}
            onSearchInputChange={this.handleSearchInputChange}
            onSearchInputEnter={this.handleSearchOnEnter}
            keyword={keyword} />
        </div>
        <div>
          {currentSet.length ? (
            <SearchResults 
              searchResults={currentSet}
              nextSet={nextSet}
              currentPage={currentPage}
              resultsPerPage={resultsPerPage}
              handlePageNext={this.handlePageNext}
              handlePagePrevious={this.handlePagePrevious}
              handleThumbnailSelect={this.handleThumbnailSelect} />) :
            null}
        </div>
        <GifModal
          handleSlideshowNext={this.handleSlideshowNext}
          handleSlideshowPrevious={this.handleSlideshowPrevious}
          open={modalOpenState}
          handleModalClose={this.handleGifModalClose}
          gifUrl={selectedGifUrl}/>
      </div>
    );
  }
}

export default GifBrowser;
