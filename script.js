function showVideo(videoUrl, side) {
    // Get the iframe elements
    const iframeLeft = document.getElementById('video-iframe-left');
    const iframeRight = document.getElementById('video-iframe-right');

    // Determine which video to show based on the side parameter
    if (side === 'left') {
        iframeLeft.src = videoUrl;
        document.getElementById('video-container-left').style.display = 'flex';
        document.getElementById('video-container-right').style.display = 'none';
    } else if (side === 'right') {
        iframeRight.src = videoUrl;
        document.getElementById('video-container-right').style.display = 'flex';
        document.getElementById('video-container-left').style.display = 'none';
    }
}
