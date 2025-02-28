const music = {
    currentTrack: 'Just Ken',
    trackIdx: 0,
    volume: 70,

    mute() {
      music.volume = 0;
    },
    next() {
      music.trackIdx += 1;
    },
  }
  music.currentPlaylist = [
    {
      title: 'Just Ken',
      artist: 'Ryan Gosling',
      album: 'Barbie The Album',
      length: '3:43',
    }, {
      title: 'Hey Blondie',
      artist: 'Dominic Fike',
      album: 'Barbie The Album',
      length: '2:21',
    }, {
      title: 'What Was I Made For',
      artist: 'Billie Eilish',
      album: 'Barbie The Album',
      length: '3:42',
    }, {
      title: 'Dance The Night',
      artist: 'Dua Lipa',
      album: 'Barbie The Album',
      length: '2:56',
    }
  ]
 

  music.next()
  music.next()

// console.log(music.currentPlaylist[music.trackIdx]);
// console.log(music.trackIdx)
music.currentPlaylist[2].length = "3:54"
console.log(music.currentPlaylist[2].length)
