function showVideo(videoId) {
    // Hide all videos
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.style.display = 'none';
    });
  
    // Show the selected video
    const video = document.getElementById(videoId);
    if (video) {
      video.style.display = 'block';
      document.querySelector('.video-container').style.display = 'flex';
    }
  }
  