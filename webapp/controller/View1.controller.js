sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
        },

        onClearPress() {
            const view = this.getView();

            ["inName", "inStreet", "inNo", "inZipcode", "inCity"].forEach(id => {
                const input = view.byId(id);
                if (input) {
                    input.setValue("");
                }
            });

            const select = view.byId("countrySelect");
            if (select) {
                select.setSelectedKey(null);
            }
        }
    });
});