'use strict';

/* global store, api, bookmarkList*/

//everytime render fxn runs (user does something) its looking at store to see if should add

$(document).ready(function() {
  bookmarkList.bindEventListeners();
  bookmarkList.renderBookmarkList();
});


 