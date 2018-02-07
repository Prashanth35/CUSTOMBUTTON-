sap.ui.define([
	"sap/ui/core/Control",
	
], function (Control) {
	"use strict";
	return Control.extend("control.custButton", {
		 metadata: {
		  properties : {           
              "text" : "string",   
              "size" : {type: "sap.ui.core.CSSSize"} 
                                  
          },
		 
		 
		 
          events: {
              
               "press" : {} 
          }
      },
      
     
      onclick : function(evt){
         this.firePress();
      },

      renderer:function(oRm, oControl) {
      oRm.write("<div");
      oRm.writeControlData(oControl); 
      oRm.addStyle("width", oControl.getSize());
	oRm.addStyle("height", oControl.getSize());
    oRm.writeStyles();
    oRm.addClass("mycustButton");
	oRm.writeClasses(); 
    oRm.write(">"); 
    oRm.writeEscaped(oControl.getText()); 
    oRm.write("</div>");      
      
      
      } 
                 
	});
});