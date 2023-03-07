const chunk = (array, size) => {
  const chunked = [];
  //loop thorugh array
  for (let element of array) {
    //get last element
    const last = chunked[chunked.length - 1];
    //check if last and if last length is equal to chunk size
    if (!last || last.length === size) {
      //push new chunk into chunked with the current element
      chunked.push([element]);
    } else {
      //else add current element into chunk
      last.push(element);
    }
  }
  return chunked;
};

module.exports = chunk;
