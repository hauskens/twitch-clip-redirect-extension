browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Match pattern: https://www.twitch.tv/{username}/clip/{slug}-{id}
    // or https://twitch.tv/{username}/clip/{slug}-{id}
    const match = details.url.match(/https:\/\/(?:www\.)?twitch\.tv\/([^\/]+)\/clip\/(.+)/);
    
    if (match) {
      const clipSlugAndId = match[2];
      const newUrl = `https://clips.twitch.tv/${clipSlugAndId}`;
      
      return { redirectUrl: newUrl };
    }
  },
  { urls: ["*://www.twitch.tv/*/clip/*", "*://twitch.tv/*/clip/*"] },
  ["blocking"]
);
