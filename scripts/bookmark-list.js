'use strict';

/* global store */

// eslint-disable-next-line no-unused-vars
const bookmarkList = (function() {
//returns html element as a string
  function generateBookmarkElement(bookmark) {
    return `
    <li class="js-item-index-element">
        <h3>${bookmark.title}</h3>
        <span class="bookmark-item js-bookmark-item"></span>
    <div class="bookmark-item-controls">
      <button class="bookmark-item-toggle js-item-toggle">
          <span class="button-label">Details</span>
      </button>
      <button class="bookmark-item-delete js-item-delete">
          <span class="button-label">Delete</span>
      </button>
    </div>
   </li>`;
  }

  function generateBookmarkString(bookmarkList) {
    //will map over bookamrkList array and generateBookmarkElement on each item/index
    //return -- join
    const bookmarks = bookmarkList.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
  }

  function renderBookmarkList() {
    console.log('renderBookmarkList ran');
  }

  function handleAddButtonClicked() {
    //event listener - listener for add button to be clicked
    //target hidden class
    $('.js-add-checked').change(function() {
      if($('input[type=checkbox]').prop('checked')) {
        $('.js-add-toggle').removeClass('hidden');
      } else {
        $('.js-add-toggle').addClass('hidden');
      }
    });
  }

  // //function is for when user clicks add new bookmark
  // //.val...
  function handleNewBookmarkSubmit() {
    //event listener 1. 2. 3.render
    console.log('handleNewBookmarkSubmit ran');
  }

  function getBookmarkIndexFromElement() {

  }

  function handleRatingDropDownClicked() {
  //event listener - listen for click on rating drop down
  //will need function that...
    console.log('handleRatingDropDownClicked ran');
  }


  function handleBookmarkDetailsClicked() {
    console.log('handleBookmarkDetailsClicked ran');
  }

  function handleDeleteBookmarkClicked() {
    console.log('handleDeleteBookmarkClicked ran');

  }

  function bindEventListeners() {
    handleAddButtonClicked();
    handleNewBookmarkSubmit();
    handleRatingDropDownClicked();
    handleBookmarkDetailsClicked();
    handleDeleteBookmarkClicked();
  }
    
  return {
    //render: render,
    bindEventListeners: bindEventListeners,
  };
}());