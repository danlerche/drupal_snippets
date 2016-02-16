function dosearch() {
var sf=document.searchform;
for (i=sf.sengines.length-1; i > -1; i--) {
if (sf.sengines[i].checked) {
var submitto = sf.sengines[i].value + escape(sf.searchterms.value);
}
}
window.location.href = submitto;
return false;
}

(function ($) {

  Drupal.behaviors.elephant_search = {
    attach: function (context, settings) {
      var basePath = Drupal.settings.basePath;

      // Animation of hiding the drop-down
      $('input[name="sort"]').change(function(){
        //$('#globalSearch').attr('action',$(this).val());
        if ($(this).attr('id') == 'searchsource_website'){
          $('#globalSearch h4').animate({'paddingLeft':'+=104px'}, 'normal');
          $('#globalSearch .select2-container').fadeOut();
        } else {
          $('#globalSearch h4').animate({'paddingLeft':'0px'}, 'normal');
          $('#globalSearch .select2-container').fadeIn();
        }
      });

      // website search redirect
      $("#searchSubmit").click(function() {
        if ( $('#searchsource_website').is(':checked') ) {
          var searchText = $("#searchBox").val();
          window.location = basePath + "search/node/" + searchText;
          return false;
        }
         else if ( $('#searchsource_ourstories').is(':checked') ) {
          var searchText = $("#searchBox").val();
          window.location = "http://www.ourstoriesinnisfil.ca/islandora/search/" + searchText + "?type=dismax";
          return false;
        }
      });
    }
  }
  
})(jQuery);






