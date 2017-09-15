{% comment %}This is a placeholder for your new template! Include your template in another using {% include "./demand_progress.js" %} or {% extends "./demand_progress.js" %}.{% endcomment %}

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

function fixFormToTop(obj) {
  if ($(obj).length !== 0) {
        formWrapper = $(obj).children(".ak-field-box"),
        heightOfForm = formWrapper.outerHeight(),
        contentHeight = $('.ak-page-container').outerHeight(),
        lastScrollTop = 0,
        formDistanceFromTop = $(obj).offset().top; //ugh, this should be programmatic...
console.log(contentHeight);    
$(window).scroll(function() {
          var distanceToTravel = formDistanceFromTop + (contentHeight - heightOfForm);
          scrollTop = $(window).scrollTop();
      if (scrollTop >= formDistanceFromTop && scrollTop <= distanceToTravel)  {
          formWrapper.removeClass("relativeBABY").css("top","0px");
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
    var form = $('.ak-field-box-parent');
    fixFormToTop(form);
    });
 });