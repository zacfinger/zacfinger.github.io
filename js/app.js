$(document).ready(function(){
    
    var currentCarouselIndex = 0;
    
    var carouselImgs = document.getElementsByClassName("carousel-img");

    function hideAllPhotos(){
        for(var i = 0; i < carouselImgs.length; i++){
            $(carouselImgs[i]).hide();
        }
    }

    $(carouselImgs[currentCarouselIndex]).show();

    function leftArrowClick() {

        // get old index of image
        var oldIndex = currentCarouselIndex;

        // Get current height of carousel as computed by browser
        // Set height so that moving image does not move other elements
        var carouselHeight = $("#carousel-img-container").height();
        $("#carousel-img-container").height(carouselHeight);

        // Get current computed height of img
        // Set height so that img is not adjusted as it moves
        var currentImgHeight = $(carouselImgs[currentCarouselIndex]).height();
        $(carouselImgs[currentCarouselIndex]).height(currentImgHeight);

        // move current image left
        $(carouselImgs[currentCarouselIndex]).addClass('moveRight');

        // Decrement current index
        currentCarouselIndex -= 1;

        // roll back around to end if < 0
        if(currentCarouselIndex < 0){
            currentCarouselIndex = carouselImgs.length - 1;
        }

        setTimeout(function(){ 
            hideAllPhotos(); 
            $("#carousel-img-container").css("height", "");
            $(carouselImgs[currentCarouselIndex]).show();
            $(carouselImgs[oldIndex]).css("height", "");
            $(carouselImgs[oldIndex]).removeClass('moveRight');
        }, 400);


    }

    function rightArrowClick() {

        // Increment current index
        currentCarouselIndex += 1;

        // roll back around to end if < 0
        if(currentCarouselIndex == carouselImgs.length){
            currentCarouselIndex = 0;
        }

        hideAllPhotos();

        $(carouselImgs[currentCarouselIndex]).show();
        
    }
    
    var leftArrows = document.getElementsByClassName("left-arrow");

    $(leftArrows[0]).click(function() {
        leftArrowClick();
    });

    $(leftArrows[1]).click(function() {
        leftArrowClick();
    });

    $("#right-arrow").click(function() {
        rightArrowClick();
    });

});