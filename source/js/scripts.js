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
    
    if ($('.table-stat .search').size() > 0) {
        $('.table-stat .search input[type=text]').focus(function(){
            $(this).closest('.search').addClass('active');
        }).blur(function(){
                $(this).closest('.search').removeClass('active');
        });
    }
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
    $(".check-all-group input[type=checkbox]").change(function () {
    	$label = $(this).parent('.check-all-group');
        if($(this).is(":checked")){
            $label.removeClass('-multi');
            $label.parent('li').find('ul:first input[type=checkbox]').each(function(){
                $(this).prop('checked', 'checked');
                $label.removeClass('-multi');
            });
        }
        else{
            $label.removeClass("-multi");
            $label.parent('li').find('ul:first input[type=checkbox]').each(function(){
                $(this).prop('checked', '');
                $label.removeClass('-multi');
            });
        }
    });

    $('.checkbox-control input[type=checkbox]').change (function (){
        var idParentUl = $(this).parents("ul").attr("id");

        var countChecked = $("#"+idParentUl).find("li input[type=checkbox]:checked").length;
        var countNotChecked = $("#"+idParentUl).find("li input[type=checkbox]:not(:checked)").length;

        if (countChecked != 0 && countNotChecked == 0) {
            $("#"+idParentUl).parent('li').find('.check-all-group input[type=checkbox]').prop('checked', 'checked').parent("label").removeClass('-multi');
        }
        else if (countChecked != 0 && countNotChecked != 0) {
            $("#"+idParentUl).parent('li').find('.check-all-group input[type=checkbox]').prop('checked', '').parent("label").addClass('-multi');
        }
        else{
            $("#"+idParentUl).parent('li').find('.check-all-group input[type=checkbox]').prop('checked', '').parent("label").removeClass('-multi');
        }
	});
});

// click function for showing the searchbox in the Header
$('.poi-block--toggle').on('click', function(){
    $(this).toggleClass('-closed').blur();
    $(this).parent('li').find('.poi-block--points-group:first').slideToggle();
    return false;
});

// Filter by point of interests
// $(document).ready(function () {
//     /* highlight matches text */
//     var highlight = function (string) {
//         $("#search-poi-list .label-filter.match").each(function () {
//             var matchStart = $(this).text().toLowerCase().indexOf("" + string.toLowerCase() + "");
//             var matchEnd = matchStart + string.length - 1;
//             var beforeMatch = $(this).text().slice(0, matchStart);
//             var matchText = $(this).text().slice(matchStart, matchEnd + 1);
//             var afterMatch = $(this).text().slice(matchEnd + 1);
//             $(this).html(beforeMatch + "<span>" + matchText + "</span>" + afterMatch);
//         });
//     };
//
//     /* filter interests */
//     $("#search-poi-input").on("keyup", function () {
//         if (this.value.length > 0) {
//             $("#search-poi-list .label-filter").filter(function () {
//                 return $(this).text().toLowerCase().indexOf($("#search-poi-input").val().toLowerCase()) != -1;
//             }).addClass("match");
//
//             //$("#search-poi-list .label-filter:not('.match')").parent('li').hide();
//             highlight(this.value);
//         }
//         else {
//             //$("#search-poi-list .label-filter.match").removeClass("match").parent('li').show();
//         }
//     });
// });

/* change maps view*/
$('#toggle-maps').click(function () {
    var classes = ['map-widget--btn -map-black','map-widget--btn -map-satellite','map-widget--btn -map-road'];
    $(this).each(function(){
        this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
    });
});

$('#map-vert-menu-toggle').click(function () {
    $('#map-vert-menu').slideToggle('fast');
    $(this).toggleClass('-active');
    return false;
});

function mapMobileMenu() {
    $('#map-main-menu').slideToggle('fast');
    $('.map-widget--map-mask').fadeToggle('fast');
    $('#map-main-menu-toggle').toggleClass('-active');
    return false;
}
$('#map-main-menu-toggle').click(function () {
    mapMobileMenu();
});
/* just for demo. Close Mobile menu */
$('.map-widget--header-link').click(function () {
    mapMobileMenu();
});
