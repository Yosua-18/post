require(["../common"], function (common) {
    require(["main-function", "../app/app-checkout"], function (func, application) {
        App = $.extend(application, func);
        App.init();
    });
});
