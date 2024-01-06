sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.test11.controller.View1", {
            onInit: function () {
                let Data = {
                    ColumnChartData:[
                        {
                            "Class":"Six",
                            "Number of students":60
                        },
                        { 
                            "Class":"Seven",
                        "Number of students":65 
                        },
                        {
                            "Class":"Eight",
                        "Number of students":62
                        },
                        {
                             "Class":"Nine",
                        "Number of students":60
                    },
                    {
                        "Class":"Ten",
                        "Number of students":61
                    }
                    ]

            }
            let oChartModel = new sap.ui.model.json.JSONModel(Data);

            this.getView().setModel(oChartModel,"oChartModel")

            }
        });
    });
