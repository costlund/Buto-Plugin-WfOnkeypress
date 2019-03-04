function plugin_wf_onkeypress(){
  this.set = function (id, settings, my_function){
    $(document.getElementById(id)).bind('keydown', 'ctrl+s', function (event) {
      var def = {ctrlKey: false, which: 119};
      if(settings.ctrlKey){
        def.ctrlKey = settings.ctrlKey;
      }
      if(settings.which){
        def.which = settings.which;
      }
      if(event.ctrlKey===def.ctrlKey && event.which===def.which){
        my_function();
        event.preventDefault();
      }
    });
  }
  this.log = function(id){
    document.getElementById(id).addEventListener("keypress", function(event){
      console.log(event.ctrlKey, event.which);  
    });
  }
}
var PluginWfOnkeypress = new plugin_wf_onkeypress();
