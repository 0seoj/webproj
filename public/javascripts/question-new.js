$(function($){
  $('.tab >ul >li >a').click(function(e){
    var $item= $(e.currentTarget).parent();
    var idx=$item.index()+1;
    var $tab=$item.closest(".tab");
    $tab.find(">ul>li").removeClass('active');
    $tab.find(".section").removeClass('selected');

    if($(this).attr('id')==="FREE"){
      $tab.find("#FREE").addClass("active");
      $tab.find("#PAID").removeClass("active");
      $tab.find(".section>ul>#payinput").attr("readonly",true).attr("disabled",false);
      $tab.find(".section>ul>#payinput").val('FREE');
    }else if($(this).attr('id')==="PAID"){
      $tab.find("#PAID").addClass("active");
      $tab.find("#FREE").removeClass("active");
      $tab.find(".section>ul>#payinput").val('').attr('placeholder', 'Input Ticket Price');
      $tab.find(".section>ul>#payinput").attr("readonly",false)attr("disabled",false);

    }
    $tab.find(".section").addClass("selected");
  });
});

function chanageTypeSelect(){
  $("#Event_type").val($("type option:selected").val());
}
function chanageTypeSelect(){
  $("#Event_topic").val($("type option:selected").val());
}

$(document).ready(function(){
  $("#Event_type").attr("readonly",true).attr("disabled",false);
  $("#Event_topic").attr("readonly",true).attr("disabled",false);
  $("#Event_type").hide();
  $("#Event_topic").hide();
});
