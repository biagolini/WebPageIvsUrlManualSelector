// Setup the video player with the stream URL provided
function setupPlayer() {
  // Retrieve the stream URL from the input element
  var streamURL = document.getElementById('stream-url').value;
  if (!streamURL) {
    alert('Please enter a valid stream URL.'); // Alert if no URL is provided
    return;
  }

  // Register Amazon IVS as playback technology for Video.js
  registerIVSTech(videojs);

  // Initialize player with the Amazon IVS tech
  var player = videojs(
    'amazon-ivs-videojs',
    {
      techOrder: ['AmazonIVS']
    },
    function() {
      console.log('Player is ready to use!'); // Confirmation when player is ready
      this.src(streamURL); // Set the source URL of the player
    }
  );

  // Register and enable the IVS Quality Plugin to enhance streaming quality
  registerIVSQualityPlugin(videojs);
  player.enableIVSQualityPlugin();
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed'); // Log when DOM is fully loaded
});

// Define and initialize the player
var player;
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed'); // Log when DOM is fully loaded
  registerIVSTech(videojs); // Register IVS technology
  registerIVSQualityPlugin(videojs); // Register IVS Quality Plugin
  player = videojs('amazon-ivs-videojs', { techOrder: ['AmazonIVS'] }, function() {
    console.log('Player is ready to use!'); // Confirmation when player is ready
  });
  player.enableIVSQualityPlugin(); // Enable the IVS Quality Plugin
});

// Function to load the stream based on the provided index
function loadStream(index) {
  var urls = document.querySelectorAll('.stream-url'); // Collect all stream URL inputs
  if (urls[index].value) {
    player.src({ src: urls[index].value, type: 'application/x-mpegURL' }); // Load and play the stream
    player.play();
  } else {
    alert('Please enter a valid streaming URL.'); // Alert if URL is invalid or empty
  }
}
