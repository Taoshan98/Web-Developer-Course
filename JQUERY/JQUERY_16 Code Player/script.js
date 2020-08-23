function updateOutput() {
    $("iframe")
        .contents()
        .find("html")
        .html(
            "<html>" +
                    "<head>" +
                        "<style type='text/css'>" + $("#cssPanel").val() + "</style>" +
                    "<title></title></head>" +
                    "<body>" + $("#htmlPanel").val() + "</body>" +
                "</html>"
        );

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}

let toggleButton = $(".toggleButton");

toggleButton.hover(function () {
    $(this).addClass("highlightedButton");
}, function () {
    $(this).removeClass("highlightedButton");
});

toggleButton.click(function () {
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");

    let panelId = $(this).attr("id") + "Panel";
    $("#" + panelId).toggleClass("hidden");
    let numberOfActivePanels = 5 - $('.hidden').length;
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
})

let panel = $(".panel");

panel.width(($(window).width() / 2) - 5);

updateOutput();

$("textarea").on('change keyup paste', function (e) {
    updateOutput();
});