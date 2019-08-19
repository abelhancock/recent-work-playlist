Amplitude.init({
  songs: [
    {
      name: "W & G Wedding",
      artist: "Abel Hancock",
      album: "Recent Work",
      url:
        "https://github.com/abelhancock/recent-work-playlist/raw/master/audio/w-g-wedding.mp3",
      cover_art_url:
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    },
    {
      name: "The Gun",
      artist: "Lorn",
      album: "Ask The Dust",
      url: "https://521dimensions.com/song/08 The Gun.mp3",
      cover_art_url:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    },
    {
      name: "The Gun 1",
      artist: "Lorn",
      album: "Ask The Dust",
      url: "https://521dimensions.com/song/08 The Gun.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg"
    },
    {
      name: "The Gun 2",
      artist: "Lorn",
      album: "Ask The Dust",
      url: "https://521dimensions.com/song/08 The Gun.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg"
    },
    {
      name: "The Gun 3",
      artist: "Lorn",
      album: "Ask The Dust",
      url: "https://521dimensions.com/song/08 The Gun.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg"
    },
  ],

  playlists: {
    recent_work: {
      songs: [0, 1, 2, 3, 4],
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
