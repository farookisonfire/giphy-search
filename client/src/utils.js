export const paginationHelper = (currentPage, resultsPerPage, dataSet) => {
  let lastIdx = currentPage * resultsPerPage;
  let firstIdx = lastIdx - resultsPerPage;
  const currentSet = dataSet.slice(firstIdx, lastIdx);

  lastIdx = (currentPage + 1) * resultsPerPage;
  firstIdx = lastIdx - resultsPerPage;
  const nextSet = dataSet.slice(firstIdx, lastIdx)
  
  return {
    currentSet,
    nextSet
  }
}
