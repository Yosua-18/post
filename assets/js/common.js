var App;
if(!window.console) {
        var console = {
            log : function(){},
            warn : function(){},
            error : function(){},
            time : function(){},
            timeEnd : function(){}
        }
    }
var log = function() {};

require.config({
    paths: {
        "jQuery": "../../plugins/jquery/jquery.min", 
        "bootstrap" : "../../plugins/bootstrap/js/bootstrap.min",
        "bootstrap4" : "../../plugins/bootstrap4/js/bootstrap.bundle.min",
        "datatables" : "../../plugins/datatables/js/jquery.dataTables.min",
        "datatablesBootstrap" : "../../plugins/datatables.net-bs/js/dataTables.bootstrap",
        "jqvalidate" : "../../plugins/jquery-validate/jquery.validate.min",
        "jQueryUI" : "../../plugins/jquery-ui/jquery-ui.min",
        "moment" : "../../plugins/moment/moment.min",
        "bootstrapDatepicker" : "../../plugins/bootstrap-datepicker/bootstrap-datepicker.min",
        "highstock" : "../../plugins/highchart/stock/highstock",
        "exporting" : "../../plugins/highchart/stock/exporting",
        "treeview" : "../../plugins/treeview",
        "uiForm" : "../../plugins/ui-form",
        "sidebar" : "../../plugins/sidebar",
        "jqueryStep" : "../../plugins/jquery-step/jquery.steps",
        "bootstrapWizard" : "../../plugins/twitter-bootstrap-wizard/jquery.bootstrap.wizard",
        "bootstrapTimepicker" : "../../plugins/bootstrap-timepicker/bootstrap-timepicker",
        "highchart" : "../../plugins/highchart/highcharts.src",
        "select2" : "../../plugins/select2/select2.min",
        "tinymce" : "../../plugins/tinymce/js/tinymce/tinymce.min",
        "bootstrapDatetimepicker" : "../../plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min",
        "superslides" : "../../plugins/jquery.superslides.min",
        "bootsnav" : "../../plugins/bootsnav",
        "leaflet" : "../../plugins/leaflet/leaflet",
    },
    waitSeconds: 0,
    urlArgs: "bust=" + (new Date()).getTime(),
    shim: {
        "jQuery": {
            exports: "jQuery",
            init: function(){
                console.log('JQuery inited..');
            }
        }, 
        "bootstrap": {
            deps: ["jQuery"],
            exports: "bootstrap",
            init: function(){
                console.log('bootstrap inited..');
            }
        },
        "bootstrap4": {
            deps: ["jQuery"],
            exports: "bootstrap4",
            init: function(){
                console.log('bootstrap4 inited..');
            }
        },
        "datatables": {
            deps: ["jQuery"],
            exports: "datatables",
            init: function(){
                console.log('datatables inited..');
            }
        },
         "datatablesBootstrap": {
            deps: ["jQuery","datatables"],
            exports: "datatablesBootstrap",
            init: function(){
                console.log('datatablesBootstrap inited..');
            }
        },
        "jqvalidate": {
            deps: ["jQuery"],
            exports: "jqvalidate",
            init: function(){
                console.log('jqvalidate inited..');
            }
        },
        "jQueryUI": {
            deps: ["jQuery"],
            exports: "jQueryUI",
            init: function(){
                console.log('jQueryUI inited..');
            }
        },
        "treeview": {
            deps: ["jQuery"],
            exports: "treeview",
            init: function(){
                console.log('treeview inited..');
            }
        },
        "uiForm": {
            deps: ["jQuery"],
            exports: "uiForm",
            init: function(){
                console.log('uiForm inited..');
            }
        },
        "moment": {
            deps: ["jQuery"],
            exports: "moment",
            init: function(){
                console.log('moment inited..');
            }
        },
        "bootstrapDatepicker": {
            deps: ["jQuery","bootstrap"],
            exports: "bootstrapDatepicker",
            init: function(){
                console.log('bootstrapDatepicker inited..');
            }
        },
        "bootstrapTimepicker": {
            deps: ["jQuery","bootstrap"],
            exports: "bootstrapTimepicker",
            init: function(){
                console.log('bootstrapTimepicker inited..');
            }
        },
        "sidebar": {
            deps: ["jQuery"],
            exports: "sidebar",
            init: function(){
                console.log('sidebar inited..');
            }
        },
        "bootstrapWizard": {
            deps: ["jQuery"],
            exports: "bootstrapWizard",
            init: function(){
                console.log('bootstrapWizard inited..');
            }
        },
         "jqueryStep": {
            deps: ["jQuery"],
            exports: "jqueryStep",
            init: function(){
                console.log('jqueryStep inited..');
            }
        },
        "highchart": {
            deps: ["jQuery"],
            exports: "highchart",
            init: function(){
                console.log('highchart inited..');
            }
        },
        "select2": {
            deps: ["jQuery"],
            exports: "select2",
            init: function(){
                console.log('select2 inited..');
            }
        },
        "highstock": {
            deps: ["jQuery"],
            exports: "highstock",
            init: function(){
                console.log('highstock inited..');
            }
        },
        "exporting": {
            deps: ["jQuery","highstock"],
            exports: "exporting",
            init: function(){

            }
        },
        "tinymce": {
            exports: "tinymce",
            init: function(){
            }
        },
        "bootstrapDatetimepicker": {
            deps: ["jQuery"],
            exports: "bootstrapDatetimepicker",
            init: function(){
                
            }
        },
        "superslides": {
            deps: ["jQuery"],
            exports: "superslides",
            init: function(){
                
            }
        },
        "bootsnav": {
            deps: ["jQuery"],
            exports: "bootsnav",
            init: function(){
                
            }
        },
        "leaflet": {
            deps: ["jQuery"],
            exports: "leaflet",
            init: function(){
                
            }
        },
    }
});
