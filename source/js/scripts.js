jQuery(document).ready(function($) {
	$(".cd-tour-nav li:nth-child(2) a.inactive").text('Finish');
	$(".cd-tour-nav li:nth-child(2) a.inactive").addClass('cd-close-2');
	
	$('svg.icon').hover(function(e){
		!$('.cd-tour-wrapper').hasClass('active') ? 
		$($('.cd-tour-wrapper li.cd-single-step')[parseInt($(e.currentTarget).parent().attr('data-helper'))]).addClass('is-selected') : null;		
	}, function(){
		!$('.cd-tour-wrapper').hasClass('active') ? 
		$('.cd-tour-wrapper li.cd-single-step').removeClass('is-selected') : null;
	});
	
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
  	"html":"true"
  })
})
// slider
$('#ex1').slider({
	formatter: function(value) {
		return '' + value;
	}
});
$('#ex2').slider({
	formatter: function(value) {
		return '' + value;
	}
});
$('#ex3').slider({
	formatter: function(value) {
		return '' + value;
	}
});
$('#ex4').slider({
	formatter: function(value) {
		return '' + value;
	}
});



$('#searchPanel').multiselect({
    columns: 1,
    placeholder: 'Search...',
    search: true,
    selectAll: true
});

$('.tooltipup').tooltip({
	html:true,
	width:1000
})

$('#modal-welcome-1').modal("show");
	$('.btn-modal-2').click(function() {
	$('#modal-welcome-2').modal("show");
});

// $('.sidebar-toggle-btn').click(function() {
//   $( ".sidebar-toggle-body" ).slideToggle( "slow" );
// });
// $('.slider-head-text-1').click(function() {
//   $( ".collapse-1" ).slideToggle( "slow" );
//   $( ".slider-head-1" ).toggleClass('active');
// });


// add-tag
$( ".slider-item-1 .add-tag" ).click(function() {
  $(this).parent(".col-md-3").parent(".row").parent(".slider-item").toggleClass( "highlight" );
  $( ".collapse-1" ).slideToggle( "slow" );
  $( ".slider-head-1" ).toggleClass('active');
});
$( ".slider-item-2 .add-tag" ).click(function() {
  $(this).parent(".col-md-3").parent(".row").parent(".slider-item").toggleClass( "highlight" );
  $( ".collapse-2" ).slideToggle( "slow" );
  $( ".slider-head-2" ).toggleClass('active');
});
$( ".slider-item-3 .add-tag" ).click(function() {
  $(this).parent(".col-md-3").parent(".row").parent(".slider-item").toggleClass( "highlight" );
  $( ".collapse-3" ).slideToggle( "slow" );
  $( ".slider-head-3" ).toggleClass('active');
});
$( ".slider-item-4 .add-tag" ).click(function() {
  $(this).parent(".col-md-3").parent(".row").parent(".slider-item").toggleClass( "highlight" );
  $( ".collapse-4" ).slideToggle( "slow" );
  $( ".slider-head-4" ).toggleClass('active');
});
// $('.slider-head-text-1').click(function() {
//   $( ".collapse-1" ).slideToggle( "slow" );
//   $( ".slider-head-1" ).toggleClass('active');
// });

// $('.slider-head-text-2').click(function() {
//   $( ".collapse-2" ).slideToggle( "slow" );
//   $( ".slider-head-2" ).toggleClass('active');
// });
// $('.slider-head-text-3').click(function() {
//   $( ".collapse-3" ).slideToggle( "slow" );
//   $( ".slider-head-3" ).toggleClass('active');
// });
// $('.slider-head-text-4').click(function() {
//   $( ".collapse-4" ).slideToggle( "slow" );
//   $( ".slider-head-4" ).toggleClass('active');
// });

$(".ms-options-wrap > .ms-options > ul label").css({
	'padding-left': '26px'
});

$( ".add-template" ).click(function() {
  $( ".add-tag-body" ).slideToggle( "slow" );
  $(this).toggleClass('active');
});

// Multy checkboxes
$(function () {
    var liSet_Id;
    $("#filter-points li").each( function (i){
        var liSet_Id = i+1;
        $("ul", this).attr("id", "categorySubItem_"+liSet_Id);
        $(".check-all-group input[type='checkbox']", this).attr("id", "checkedAllBox_"+liSet_Id);
    });

    $(".check-all-group input[type=checkbox]").change(function () {
        var checkedAllId = $(this).attr("id");
        var numbIdsElem = checkedAllId.split('_').pop();

        if($(this).is(":checked")){
            $(this).parent("label").removeClass('-multi');
            $("#categorySubItem_"+numbIdsElem+" .checkbox-control input[type=checkbox]").each(function(){
                $(this).prop('checked', 'checked');
                $(this).parent("label").removeClass('-multi');
            });
        }
        else{
            $(this).parent("label").removeClass("-multi");
            $("#categorySubItem_"+numbIdsElem+" .checkbox-control input[type=checkbox]").each(function(){
                $(this).prop('checked', '');
                $(this).parent("label").removeClass('-multi');
            });
        }
    });


    $('.checkbox-control input[type=checkbox]').change (function (){
    	if ($(this).hasClass("check-all-group")) {
            return false;
        }
        var idParentUl = $(this).closest("ul").attr("id");
        var numbIdsElem = idParentUl.split('_').pop();

        var countChBoxChec = $("#"+idParentUl+" > li .checkbox-control input[type=checkbox]:checked").length;
        var countChBoxNotChec = $("#"+idParentUl+" > li .checkbox-control input[type=checkbox]:not(:checked)").length;

        // if($(this).is(":checked")){
        //     $(this).prop('checked', 'checked');
        // }
        // else{
        //     $(this).prop('checked', '');
        // }
        if (countChBoxChec != 0 && countChBoxNotChec == 0) {
            $("#checkedAllBox_"+numbIdsElem).prop('checked', 'checked').parent("label").removeClass('-multi');
        }
        else if (countChBoxChec != 0 && countChBoxNotChec != 0) {
            $("#checkedAllBox_"+numbIdsElem).prop('checked', '').parent("label").addClass("-multi");
        }
        else{
            $("#checkedAllBox_"+numbIdsElem).prop('checked', '').parent("label").removeClass('-multi');
        }
    });
});