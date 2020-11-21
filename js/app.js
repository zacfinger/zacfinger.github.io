$(document).ready(function(){
    
    var currentCarouselIndex = 0;
    
    var carouselImgs = document.getElementsByClassName("carousel-img");

    // Hides all photoes, except the image at 
    // the index specified by the optional parameter
    function hideAllPhotos(excludeImg = -1){
        for(var i = 0; i < carouselImgs.length; i++){
            if(i != excludeImg){
                $(carouselImgs[i]).hide();
            }
        }
    }

    $(carouselImgs[currentCarouselIndex]).show();

    function leftArrowClick() {

        // Get index of image currently in view
        // The right-most of the two images to move
        var rightIndex = currentCarouselIndex;

        // Get index of image to the left
        var leftIndex = currentCarouselIndex - 1;

        // roll back around to end if < 0
        if(leftIndex < 0){
            leftIndex = carouselImgs.length - 1;
        }

        // Get current height of carousel as computed by browser
        // Set height so that moving images does not move other elements on page
        var carouselHeight = $("#carousel-img-container").height();
        $("#carousel-img-container").height(carouselHeight);

        // Put left-most image in staging area behind stage left
        // "Show" image to remove display:none style
        // Image is still at opacity 0 because of class stageLeft
        // until class is removed.
        $(carouselImgs[leftIndex]).addClass("stageLeft");
        $(carouselImgs[leftIndex]).show();

        // Get current computed height of img
        // Set height so that img is not adjusted as it moves
        var currentImgHeight = $(carouselImgs[rightIndex]).height();
        $(carouselImgs[rightIndex]).height(currentImgHeight);

        // move current image right
        $(carouselImgs[rightIndex]).addClass('moveRight');

        // move left-most image right
        $(carouselImgs[leftIndex]).removeClass('stageLeft');

        setTimeout(function(){ 
            hideAllPhotos(leftIndex); 
            $("#carousel-img-container").css("height", "");
            $(carouselImgs[rightIndex]).css("height", "");
            $(carouselImgs[rightIndex]).removeClass('moveRight');

        }, 1500);

        // Decrement current index
        currentCarouselIndex = leftIndex;

    }

    function rightArrowClick() {

        // Get index of image currently in view
        // The left-most of the two images to move
        var leftIndex = currentCarouselIndex;

        // Get index of image to the right
        var rightIndex = currentCarouselIndex + 1;

        // roll back around to beginning if > length
        if(rightIndex == carouselImgs.length){
            rightIndex = 0;
        }

        // Get current height of carousel as computed by browser
        // Set height so that moving images does not move other elements on page
        var carouselHeight = $("#carousel-img-container").height();
        $("#carousel-img-container").height(carouselHeight);

        // Get current computed height of img
        // Set height so that img is not adjusted as it moves
        var currentImgHeight = $(carouselImgs[leftIndex]).height();
        $(carouselImgs[leftIndex]).height(currentImgHeight);

        // move current image right
        $(carouselImgs[leftIndex]).addClass('moveLeft');

        // Put right-most image in staging area behind stage right
        // "Show" image to remove display:none style
        // Image is still at opacity 0 because of class stageRight
        // until class is removed.
        $(carouselImgs[rightIndex]).addClass("stageRight");
        $(carouselImgs[rightIndex]).show();

        // move left-most image right
        $(carouselImgs[rightIndex]).removeClass('stageRight');

        setTimeout(function(){ 
            hideAllPhotos(rightIndex); 
            $("#carousel-img-container").css("height", "");
            $(carouselImgs[leftIndex]).css("height", "");
            $(carouselImgs[leftIndex]).removeClass('moveLeft');

        }, 700);

        // Decrement current index
        currentCarouselIndex = rightIndex;
        
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