'use strict';

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addBookmark = function(bookmark) {
    this.bookmarks.push(bookmark);
  };
  const deleteBookmark = function(bookmark) {

  };

  return {
    bookmarks: [],
    adding: false,
    condensed: false,
    rating: null,
    
    addBookmark,
    deleteBookmark
  };

}());

//initial page - loads
//once user addds- adding:true
//rating: null ??
// id ??
// const store = {
//     bookmarks: [
//       { id: 1, title: 'Facebook', link: '', description: '',condensed: true, rating: null},
//       { id: 2, title: 'YouTube', condensed: true, rating: null},
//       { id: 3, title: 'Instagram', condensed: true, rating: null}
//     ],
//     adding: false,
//     condensed: false,
//     rating: null
//   };