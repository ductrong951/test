const musicContainer = document.querySelector(".example-container");
const playBtn = document.getElementById("play");

// Play song
function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
}

// Pause song
function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");

    audio.pause();
}

// Lắng nghe sự kiện
playBtn.addEventListener("click", () => {
    // Kiểm tra xem musicContainer có chứa class "play" hay không?
    const isPlaying = musicContainer.classList.contains("play");

    // Nếu có thì thực hiện pause
    // Nếu không thì thực hiện play
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

// Time/song update
audio.addEventListener("timeupdate", updateProgress);

// Click on progress bar
progressContainer.addEventListener("click", setProgress);

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Lắng nghe sự kiện khi next và prev bài hát
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Lắng nghe sự kiện khi kết thúc bài hát
audio.addEventListener("ended", nextSong);

// Xử lý khi prev bài hát
function prevSong() {
    // Giảm index của songIndex đi 1
    songIndex--;

    // Nếu đang là bài hát đầu thì quay lại bài hát cuối
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    // Cập nhật thông tin của bài hát lên giao diện
    loadSong(songs[songIndex]);

    // Phát nhạc
    playSong();
}

// Xử lý khi next bài hát
function nextSong() {
    // Tăng index của songIndex lên 1
    songIndex++;

    // Nếu đang là bài hát cuối thì quay lại bài hát đầu
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    // Cập nhật thông tin của bài hát lên giao diện
    loadSong(songs[songIndex]);

    // Phát nhạc
    playSong();
}

  /*
    Shows the playlist
  */
  document.getElementsByClassName('show-playlist')[0].addEventListener('click', function(){
    document.getElementById('white-player-playlist-container').classList.remove('slide-out-top');
    document.getElementById('white-player-playlist-container').classList.add('slide-in-top');
    document.getElementById('white-player-playlist-container').style.display = "block";
  });
  
  /*
    Hides the playlist
  */
  document.getElementsByClassName('close-playlist')[0].addEventListener('click', function(){
    document.getElementById('white-player-playlist-container').classList.remove('slide-in-top');
    document.getElementById('white-player-playlist-container').classList.add('slide-out-top');
    document.getElementById('white-player-playlist-container').style.display = "none";
  });
  
  /*
    Gets all of the add to playlist buttons so we can
    add some event listeners to actually add to playlist.
  */
  var addToPlaylistButtons = document.getElementsByClassName('add-to-playlist-button');
  
  for( var i = 0; i < addToPlaylistButtons.length; i++ ){
    /*
      Add an event listener to the add to playlist button.
    */
    addToPlaylistButtons[i].addEventListener('click', function(){
      var songToAddIndex = this.getAttribute('song-to-add');
  
      /*
        Adds the song to Amplitude, appends the song to the display,
        then rebinds all of the AmplitudeJS elements.
      */
      var newIndex = Amplitude.addSong( songsToAdd[ songToAddIndex ] );
      appendToSongDisplay( songsToAdd[ songToAddIndex ], newIndex );
      Amplitude.bindNewElements();
  
      /*
        Removes the container that contained the add to playlist button.
      */
      var songToAddRemove = document.querySelector('.song-to-add[song-to-add="'+songToAddIndex+'"]');
      songToAddRemove.parentNode.removeChild( songToAddRemove );
    });
  }
  
  /*
    Appends the song to the display.
  */
  function appendToSongDisplay( song, index ){
    /*
      Grabs the playlist element we will be appending to.
    */
    var playlistElement = document.querySelector('.white-player-playlist');
  
    /*
      Creates the playlist song element
    */
    var playlistSong = document.createElement('div');
    playlistSong.setAttribute('class', 'white-player-playlist-song amplitude-song-container amplitude-play-pause');
    playlistSong.setAttribute('data-amplitude-song-index', index);
  
    /*
      Creates the playlist song image element
    */
    var playlistSongImg = document.createElement('img');
    playlistSongImg.setAttribute('src', song.cover_art_url);
  
    /*
      Creates the playlist song meta element
    */
    var playlistSongMeta = document.createElement('div');
    playlistSongMeta.setAttribute('class', 'playlist-song-meta');
  
    /*
      Creates the playlist song name element
    */
    var playlistSongName = document.createElement('span');
    playlistSongName.setAttribute('class', 'playlist-song-name');
    playlistSongName.innerHTML = song.name;
  
    /*
      Creates the playlist song artist album element
    */
    var playlistSongArtistAlbum = document.createElement('span');
    playlistSongArtistAlbum.setAttribute('class', 'playlist-song-artist');
    playlistSongArtistAlbum.innerHTML = song.artist+' &bull; '+song.album;
  
    /*
      Appends the name and artist album to the playlist song meta.
    */
    playlistSongMeta.appendChild( playlistSongName );
    playlistSongMeta.appendChild( playlistSongArtistAlbum );
  
    /*
      Appends the song image and meta to the song element
    */
    playlistSong.appendChild( playlistSongImg );
    playlistSong.appendChild( playlistSongMeta );
  
    /*
      Appends the song element to the playlist
    */
    playlistElement.appendChild( playlistSong );
  }