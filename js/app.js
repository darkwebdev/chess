// Compiled templates

(function(){dust.register("jobsTpl",body_0);function body_0(chk,ctx){return chk.write("<div class=\"row\"><div class=\"columns\"><header><h1>").reference(ctx._get(false, ["Company"]),ctx,"h").write("</h1><h2>vacancies</h2></header>").section(ctx._get(false, ["Jobs"]),ctx,{"block":body_1},null).write("</div></div>");}function body_1(chk,ctx){return chk.write("<article class=\"panel\"><h3>").reference(ctx._get(false, ["Job offer"]),ctx,"h").exists(ctx._get(false, ["Location"]),ctx,{"block":body_2},null).write("</h3><p><em>").reference(ctx._get(false, ["Title"]),ctx,"h").write("</em></p><h4>What we expect</h4>").section(ctx._get(false, ["What we expect"]),ctx,{"block":body_3},null).write("<h4>What we offer</h4>").section(ctx._get(false, ["What we offer"]),ctx,{"block":body_4},null).write("<h4>How can I apply?</h4><p>").reference(ctx._get(false,["How can I apply?","0"]),ctx,"h").write("</p><p><a href=\"").reference(ctx._get(false,["How can I apply?","1"]),ctx,"h").write("\" class=\"button\">More</a></p></article>");}function body_2(chk,ctx){return chk.write("<small> in ").reference(ctx._get(false, ["Location"]),ctx,"h").write("</small>");}function body_3(chk,ctx){return chk.write("<ul><li>").reference(ctx._get(true,[]),ctx,"h").write("</li></ul>");}function body_4(chk,ctx){return chk.write("<ul><li>").reference(ctx._get(true,[]),ctx,"h").write("</li></ul>");}return body_0;})();

// Main app

(function($, d, window, undefined){
    var url = 'js/joboffers.json';

    $.get(url, function(data){
        d.render('jobsTpl', data, function(err, html) {
            $('body').append(html);
        });
    });

}(Zepto, dust, window));
