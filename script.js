var myLayout;

$(document).ready(function() {

  myLayout = $('body').layout({
    west__minSize: 0,
    north__maxSize: 40,
    north__minSize: 40,
    north__Size: 40,
    east__minSize: 200,
    initClosed: true,
    north__initClosed: false,
    west__initClosed: false,
    spacing_open: 15 // space between pane and adjacent panes - when pane is 'open'
      ,
    spacing_closed: 15
  });

  $('.dropdown').on('show.bs.dropdown', function() {
    var cBtn = $(this).find("a[data-toggle='dropdown']")
    var _cBtnid = $(cBtn).attr('id');
    var _myPanel = $('ul[aria-labelledby="' + _cBtnid + '"]');
    //var _newPanel=$('#_myPanel').html();

    $('body').append($(_myPanel).css({
      position: 'absolute',
      left: $(this).offset().left,
      top: $(this).offset().top + $(this).height(),
      display: 'block',
      id: _myPanel + '_ddl'
    }));
  });

  $('.dropdown').on('hidden.bs.dropdown', function() {

    var cBtn = $(this).find("a[data-toggle='dropdown']")
    var _cBtnid = $(cBtn).attr('id');
    //debugger;
    $('body').find('ul[aria-labelledby="' + _cBtnid + '"]').css('display', 'none')
      //$('body').find('#'+_cBtnid +_ddl).remove();
  });

  $('.modal-content').resizable({
    //alsoResize: ".modal-dialog",
    minHeight: 300,
    minWidth: 300
  });
  $('.modal-dialog').draggable();


});


function zoomOut()
{
  var zzm=parseFloat($('html').css('zoom'));
  zzm=zzm- 0.1;
  $('html').css('zoom',zzm);
}

function zoomIn()
{
  var zzm=parseFloat($('html').css('zoom'));
  zzm=zzm+ 0.1;
  $('html').css('zoom',zzm);
}

function b_confirm() {
  bootbox.confirm({
    message: "This is a confirm with custom button text and color! Do you like it?",
    buttons: {
      confirm: {
        label: 'Yes',
        className: 'btn-success'
      },
      cancel: {
        label: 'No',
        className: 'btn-danger'
      }
    },
    callback: function(result) {
      console.log('This was logged in the callback: ' + result);
    }
  });
}

function b_prompt() {
  bootbox.prompt("This is the default prompt!", function(result) {
    console.log(result);
  });
}
