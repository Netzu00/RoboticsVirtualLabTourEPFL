function showVideo(videoUrl) {
    // Hide the central image
    document.getElementById('center-image').style.display = 'none';
  
    // Set the iframe src to the selected video URL
    const iframe = document.getElementById('video-iframe');
    iframe.src = videoUrl;
  
    // Show the video container
    document.getElementById('video-container').style.display = 'flex';
  }
  