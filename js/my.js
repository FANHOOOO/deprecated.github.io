var obj = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "ajax/data.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

$(document).ready(function() {

    var edutext = '<table class="table boardless">';
    var coursetext = '';
    for (var i = 0; i < obj.education.colleges.length; i++) {
        edutext += '<tr><td style="align:center"><img draggable="false" src="' +
            obj.education.colleges[i].logo +
            '" alt="" class="img-responsive center-block" style="width:50px" alt="Responsive image"></td><td>' +
            obj.education.colleges[i].degree +
            ' : ' +
            obj.education.colleges[i].gpa + ' / ' + obj.education.colleges[i].overall +
            '<br>' +
            obj.education.colleges[i].major +
            '<br><B>' +
            obj.education.colleges[i].name +
            '</B>, ' +
            obj.education.colleges[i].location +
            '</td><td class="td-right">' +
            obj.education.colleges[i].time +
            '</td></tr><tr>';

        coursetext += '<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><table class="table table-condensed" style="border-top: thick solid ' +
            obj.education.colleges[i].color +
            ';"><tr><th>' +
            obj.education.colleges[i].name +
            '</th></tr>';
        for (var j = 0; j < obj.education.colleges[i].courses.length; j++) {
            coursetext += '<tr><td>' +
                obj.education.colleges[i].courses[j] +
                '</td></tr>';
        }
        coursetext += '<tr><td>etc.</td></tr></table></div>';
    }
    edutext += '</table>';
    $('#edu').html(edutext);
    $('#coursetables').html(coursetext);

    var skilltext = '<table class="table boardless">';
    for (var i = 0; i < obj.skills.length; i++) {
        skilltext += '<tr><td><B>' +
            obj.skills[i].type +
            ':</B></td><td>';
        for (var j = 0; j < obj.skills[i].items.length; j++) {
            skilltext += obj.skills[i].items[j] + ', ';
        }
        skilltext += 'etc.</td></tr>';
    }
    skilltext += '</table>';
    $('#skilltable').html(skilltext);

    var projecttext = '';
    for (var i = 0; i < obj.projects.length; i++) {
        projecttext += '<div class="col-sm-9"><B>' +
            obj.projects[i].title + 
            '</B></div><div class="col-sm-3 text-right">' +
            obj.projects[i].time + 
            '</span></div><div class="col-sm-12 label-div"><a type="button" href="' +
            obj.projects[i].link +
            '"><span class="label label-github"><i class="' +
            obj.projects[i].logo +
            '"></i></span></a> ';

        for (var j = 0; j < obj.projects[i].tags.length; j++) {
            projecttext += '<span class="label label-default">' + obj.projects[i].tags[j] + '</span> ';
        }

        projecttext += '</div><div class="col-sm-12"><ul>';

        for (var j = 0; j < obj.projects[i].description.length; j++) {
            projecttext += '<li>' +
                obj.projects[i].description[j] +
                '</li>';
        }
        projecttext += '</ul></div>';
    }
    projecttext += '</tbody></table>';
    $('#projecttable').html(projecttext);

    // var text = atob(obj.basics.email);
    // $('#mail-toggled').attr('href', 'mailto:' + text);
    // $('#mail-sidebar').attr('href', 'mailto:' + text);

    // $('#resumeframe').attr('height', window.innerHeight - 150);

    $('.scrollspy').scrollSpy();

    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });

    if ($(window).width() < 768) {
        setTimeout(function() {
            $("#sidebar-toggled").collapse('show');
        }, 500);
    }
});

// $('#wechat').popover({
//     placement: 'bottom',
//     content: '<a target="_blank" href="' + obj.basics.links[3].link + '"><img draggable="false" class="img-responsive img-thumbnail qr" src="'+ obj.basics.others.wechatqr +'" style="width: 180px;background-color:transparent;border: none;"></a>',
//     html: true
// });

// $('.sidebar-link').click(function(e) {
//     e.preventDefault();
//     var goto = $(this).attr('href');
//     $('html, body').animate({
//         scrollTop: $(goto).offset().top
//     }, 1000);
// });

// $('#myModal').on('show.bs.modal', function(event) {
//     var button = $(event.relatedTarget),
//         src = button.data('src'),
//         modal = $(this);
//     modal.find('.modal-img').attr('src', src);
// });

// $(function() {
//     var ink, d, x, y, cx, cy;
//     $(".ripplelink").click(function(e) {
//         if ($(this).find(".ink").length === 0) {
//             $(this).prepend("<span class='ink'></span>");
//         }

//         ink = $(this).find(".ink");
//         ink.removeClass("animate");

//         if (!ink.height() && !ink.width()) {
//             d = Math.max($(this).outerWidth(), $(this).outerHeight());
//             ink.css({
//                 height: d,
//                 width: d
//             });
//         }

//         x = e.pageX - $(this).offset().left - ink.width() / 2;
//         y = e.pageY - $(this).offset().top - ink.height() / 2;

//         ink.css({
//             top: y + 'px',
//             left: x + 'px'
//         }).addClass("animate");
//     });
// });

$(window).resize(function() {
    if ($(this).width() < 768) {
        $("#sidebar-toggled").collapse('show');
    } else {
        $("#sidebar-toggled").collapse('hide');
    }
    $('#resumeframe').attr('height', window.innerHeight - 150);
});

// if (($(window).height() + 100) < $(document).height()) {
//     $('#top-link-block').removeClass('hidden').affix({
//         offset: {
//             top: 100
//         }
//     });
// }

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-81117102-1', 'auto');
ga('send', 'pageview');