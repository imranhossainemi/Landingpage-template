$(document).ready(function() {
    $('section#screenshots a').on('click',function(){
        $('div#modal img').attr('src',$(this).attr('data-image-url') );
    });
    
    var nav = $('.navbar-fixed-top');
    var distance = $('.navbar-fixed-top').offset();
    
    if(distance.top>=300){
        nav.addClass('effect');
    }
    
    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=300){
            nav.addClass('effect');
        }
        else{
            nav.removeClass('effect');
        }
    });

    $('#about .blue-cricle').waypoint(function(){
        $('#about .blue-cricle').addClass('animated fadeInUp')
    },{
        offset:'50%'
    });
    
    $('#features .blue-cricle').waypoint(function(){
        $(this.element).addClass('animated fadeInUp')
    },{
        offset:'50%'
    });
    
    
    $('.features-image img').waypoint(function(){
        $('.features-image img').addClass('animated rubberBand')
    },{
        offset:'50%'
    });
    
    $('#screenshots .col-xs-4').waypoint(function(){
        $(this.element).addClass('animated zoomIn');
        $(this.element).css({'opacity' : 1});
    },{
        offset:'50%'
    });
    
    $('#download div.phone img').waypoint(function(){
        $(this.element).addClass('animated fadeInRight');
        $(this.element).css({'opacity' : 1});
    },{
        offset:'50%'
    });
    
    $('#download .platforms > div').waypoint(function(){
        $(this.element).addClass('animated fadeInUp')
    },{
        offset:'50%'
    });
    
    $('#form').bootstrapValidator({
        message: 'the value is no valid',
        feedbackIcons:{
            valid:'glyphicon glyhicon-ok',
            invalid:'glyphicon glyhicon-remove',
            validating:'glyphicon glyhicon-refresh'
        },
        fields:{
            name:{
                validators:{
                    notEmpty:{
                        message:'The field requried and can not empty'
                    }
                }
            },
            email:{
                validators:{
                    notEmpty:{
                        message:'The field requried and can not empty'
                    },
                    
                    emailAddress:{
                        message:'The email address is not valid'
                    }
                    
                }
            },
            
            message:{
                validators:{
                    notEmpty:{
                        message:'The field requried and can not empty'
                    }
                }
            }
            
        }
    }).on('success.form.bv',function(e){
        e.preventDefault();
        var $form =$(e.target);
        var bv=$form.data('bootstrapValidator');
        $.post($form.attr('action'),$form.serialize(),function(result){
            console.log(result);
        },'json');
    });
    
    
});

smoothScroll.init({
    speed:100,
    easing: 'easeInOutQuad',
    updateURL: false,
    offset: '20%'
});