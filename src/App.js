import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bookmarks from './components/ReactPhotoSearch/Bookmarks';
import SearchPhotos from './components/ReactPhotoSearch/SearchPhotos';

function App() {

  const [bookmarked, setBookmarked] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <SearchPhotos setBookmarked={setBookmarked} />} />
        <Route path='/bookmarks' element={
          <Bookmarks bookmarked={bookmarked} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
