Amplitude.init({
  songs: [
    {
      name: "Risin' High (feat Raashan Ahmad)",
      artist: "Ancient Astronauts",
      album: "We Are to Answer",
      url:
        "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
    },
    {
      name: "The Gun",
      artist: "Lorn",
      album: "Ask The Dust",
      url: "https://521dimensions.com/song/08 The Gun.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg"
    }
  ],

  playlists: {
    recent_work: {
      songs: [0, 1],
      title: "Best of Ancient Astronauts"
    }
  },

  callbacks: {
    timeupdate: function check(x) {
      var songPlayedPercentage = Amplitude.getSongPlayedPercentage();
      elements = document.querySelectorAll(".amplitude-active-song-container .amplitude-current-time");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.left = songPlayedPercentage + "%";
      }
    }
  }
});
