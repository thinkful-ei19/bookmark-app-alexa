'use strict'

//initial page - loads
//once user addds- adding:true
//rating: null ??
// id ??
const store = {
  bookmarks: [
    { id: 1, title: 'Facebook', condensed: true, rating: null}
    { id: 2, title: 'YouTube', condensed: true, rating: null}
    { id: 3, title: 'Instagram', condensed: true, rating: null}
  ],
  adding: false
};

//everytime render fxn runs (user does something) its looking at store to see if should add


 