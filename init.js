Amplitude.init({
  songs: [
    {
      name: "JFTP",
      artist: "Abel Hancock",
      album: "Short Film",
      url:
        "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/audio/short-film/jftp.mp3",
      cover_art_url:
        "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/images/jftp-artwork.jpg"
    },
    {
      name: "Old Leviathan",
      artist: "Abel Hancock",
      album: "Short Film",
      url: "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/audio/short-film/jftp-2.mp3",
      cover_art_url:
        "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/images/old-leviathan.jpg"
    },
    {
      name: "Show Opener 1",
      artist: "Abel Hancock",
      album: "Show Opener",
      url: "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/audio/show-opener/compel-opener-2016.mp3",
      cover_art_url:
        "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/images/compel-opener-2016.jpg"
    },
    {
      name: "Show Opener 2",
      artist: "Abel Hancock",
      album: "Show Opener",
      url: "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/audio/show-opener/compel-opener-2017.mp3",
      cover_art_url:
        "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/images/compel-opener-2017.jpg"
    },
    {
      name: "Now. I. See.",
      artist: "Abel Hancock",
      album: "Short Film",
      url: "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/audio/short-film/now-i-see.mp3",
      cover_art_url:
        "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/images/now-i-see.jpg"
    },
    {
      name: "War & Pain Teaser",
      artist: "Abel Hancock",
      album: "Trailers",
      url: "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/audio/trailers/war-and-pain-teaser.mp3",
      cover_art_url:
        "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/images/war-and-pain-teaser.jpg"
    },
    {
      name: "War & Pain Trailer",
      artist: "Abel Hancock",
      album: "Trailers",
      url: "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/audio/trailers/war-and-pain.mp3",
      cover_art_url:
        "https://raw.githubusercontent.com/abelhancock/recent-work-playlist/master/images/war-and-pain.jpg"
    },
  ],

  playlists: {
    short_film: {
      songs: [0, 1, 2, 3, 4],
      title: "Recent Work"
    },
    trailers: {
      songs: [5,6],
      title: "Recent Work"
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
