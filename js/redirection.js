$(function() {
    var animationHelper = AniJS.getHelper();
    animationHelper.offRedirection = function(e, animationContext){
        console.log('BEFOOOOORE');
        e.preventDefault();
        animationContext.run(); }
    animationHelper.doRedirection = function(e, animationContext){
        console.log('AFTERRR');
        console.log(animationContext);
        var target = animationContext.eventTarget;
        var lien = $(target).attr('href');
        console.log(lien);
        window.location.href=lien; }});