var initialScrollLeft = 0;
// document.querySelectorAll('.upcoming_events__holder')[0].scrollLeft = 30
// var clickedLeft = ()=>{

// }

var upcomingEventsTab = document.querySelectorAll('.upcoming_events__holder')[0];
var upcomingEventsLeftBtn = document.querySelectorAll('#upcomingEventsLeftBtn')[0]
var upcomingEventsRightBtn = document.querySelectorAll('#upcomingEventsRightBtn')[0]
upcomingEventsLeftBtn.addEventListener('click',(e)=>{
    initialScrollLeft=initialScrollLeft-300;
    
    upcomingEventsTab.scrollLeft = initialScrollLeft;
    
})

upcomingEventsRightBtn.addEventListener('click',(e)=>{
    initialScrollLeft=initialScrollLeft+300;
    upcomingEventsTab.scrollLeft = initialScrollLeft;
    
})