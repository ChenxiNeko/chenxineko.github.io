const dt = document.documentElement.scrollTop || document.body.scrollTop;
if(dt != 0) {
    $(".topbar").addClass("bar-active");
}
else {
    $(".topbar").removeClass("bar-active");
}

