$(document).ready(function () {
    setTimeout(function(){
        $(".loader-container").hide();
     }, 750);
    if (!$('#myCanvas').tagcanvas({
        reverse: false,
        depth: 0.8,
        maxSpeed: 0.05,
        wheelZoom: true,
        outlineMethod: 'none',
    }, 'tags')) {
        // something went wrong, hide the canvas container
        $('#myCanvasContainer').hide();
    }
     
});