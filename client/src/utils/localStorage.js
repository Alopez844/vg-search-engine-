export const getSavedVideoGameIds = () => {
    const savedVideoGameIds = localStorage.getItem('saved_VideoGames')
      ? JSON.parse(localStorage.getItem('saved_VideoGames'))
      : [];
  
    return savedVideoGameIds;
  };
  
  export const saveVideoGamesIds = (videoGameIdArr) => {
    if (videoGameIdArr.length) {
      localStorage.setItem('saved_VideoGames', JSON.stringify(bookIdArr));
    } else {
      localStorage.removeItem('saved_VideoGames');
    }
  };
  
  export const removeVideoGameId = (videoGameId) => {
    const savedVideoGameIds = localStorage.getItem('saved_VideoGames')
      ? JSON.parse(localStorage.getItem('saved_VideoGames'))
      : null;
  
    if (!savedVideoGameIds) {
      return false;
    }
  
    const updatedSavedVideoGameIds = savedVideoGameIds?.filter((savedVideoGameId) => savedVideoGameId !== videoGameId);
    localStorage.setItem('saved_videoGames', JSON.stringify(updatedSavedVideoGameIds));
  
    return true;
  };
  