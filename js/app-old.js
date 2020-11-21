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

        // Decrement current index
        currentCarouselIndex -= 1;

        // roll back around to end if < 0
        if(currentCarouselIndex < 0){
            currentCarouselIndex = carouselImgs.length - 1;
        }

        hideAllPhotos();

        $(carouselImgs[currentCarouselIndex]).show();
        
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