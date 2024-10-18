onload = () => {
var sound = new Howl({
  src: ['ei-ei-ei.mp3'],
  autoplay: true,
  loop: true,
  volume: 1,
  onend: function() {
//    console.log('Finished!');
  }
});

}
