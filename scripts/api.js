'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alexa';
  const getBookmarks = function(callback) {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };
  const createBookmark = function(title, callback) {
    let newBookmark = JSON.stringify({title: title});
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: newBookmark,
      success: callback
    });
  };
  const deleteBookmark = function(id, callback) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      dataType: 'json',
      success: callback
    });
  };
  return {
    getBookmarks,
    createBookmark,
    deleteBookmark
  };

}());