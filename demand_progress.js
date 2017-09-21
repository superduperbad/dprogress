/**
*   Demand Progress - Actionkit JS,
*   Author: @mvattuone
*/
/* ==================================================================
   Demand Progress - Actionkit Javascript
   Author: @mvattuone, Citizen Engagement Laboratory

   Javascript specifically for Demand Progress Actionkit templates.
   ================================================================== */

/**
* Takes object, looks for form-wrap child, and binds scroll event that fixes form
*   to the top of the page.  Checks to make sure form doesn't go over footer.
* TODO:  Test in other projects with fixed position sidebar form and refine to make it reusable across orgs.
*/


/* Modified by WAWD for DemandProgress ActionKit templates, 9/2017 */

function fixFormToTop(obj) {
  if ($(obj).length !== 0) {
        formWrapper = $(obj).children(".ak-sticky"),
        heightOfForm = $(".ak-sticky").outerHeight(),
        contentHeight = $('.ak-page-container').outerHeight() + $('.ak-page-header').outerHeight(),
        lastScrollTop = 0,
        formDistanceFromTop = $(obj).offset().top; //ugh, this should be programmatic...

$(window).scroll(function() {

          var distanceToTravel = contentHeight - heightOfForm;
          scrollTop = $(window).scrollTop();
      if (scrollTop >= formDistanceFromTop && scrollTop <= distanceToTravel)  {
          formWrapper.removeClass("relative").css("top","0px");
          formWrapper.addClass("fixed");
      } else if (scrollTop >= distanceToTravel) {
          formWrapper.removeClass("fixed");
          formWrapper.addClass("relative").css("top",distanceToTravel - formDistanceFromTop);
      } else {
        formWrapper.removeClass("fixed");
      }
    });
  }
}

//Init
$(document).ready(function() {
  //Don't use fixed positioning on sidebar in mobile view.
    $(window).load(function() {
    var form = $('.ak-sticky-parent');
    fixFormToTop(form);
    });
 });