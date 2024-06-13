function showVideo(videoUrl, side, circleId) {
    // Get the iframe elements
    const iframeLeft = document.getElementById('video-iframe-left');
    const iframeRight = document.getElementById('video-iframe-right');

    // Get the height of the clicked circle
    const circle = document.getElementById(circleId);
    const circleHeight = circle.getBoundingClientRect().height;

    // Determine the vertical position based on the circle height and apply an offset
    const offset = 147; // Adjust this value to move the video up or down
    const positionTop = circle.getBoundingClientRect().top + (circleHeight / 2) - offset;

    // Determine which video to show based on the side parameter
    if (side === 'left') {
        iframeLeft.src = videoUrl;
        document.getElementById('video-container-left').style.top = `${positionTop}px`;
        document.getElementById('video-container-left').style.display = 'flex';
        document.getElementById('video-container-right').style.display = 'none';
    } else if (side === 'right') {
        iframeRight.src = videoUrl;
        document.getElementById('video-container-right').style.top = `${positionTop}px`;
        document.getElementById('video-container-right').style.display = 'flex';
        document.getElementById('video-container-left').style.display = 'none';
    }
}
