function plugin_wf_onkeypress(){
  this.set = function (id, settings, my_function){
    document.getElementById(id).addEventListener("keypress", function(event){
      //Default values.
      var def = {ctrlKey: false, which: 119};
      //Override defaults.
      if(settings.ctrlKey){
        def.ctrlKey = settings.ctrlKey;
      }
      if(settings.which){
        def.which = settings.which;
      }
      //Check if there is a match.
      if(event.ctrlKey===def.ctrlKey && event.which===def.which){
        my_function();
        event.preventDefault();
      }
      return false;
    });
  }
}
PluginWfOnkeypress = new plugin_wf_onkeypress();
