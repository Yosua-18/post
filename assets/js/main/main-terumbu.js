require(["../common"], function (common) {
    require(["main-function", "../app/app-terumbu"], function (func, application) {
        App = $.extend(application, func);
        App.init();
    });
});