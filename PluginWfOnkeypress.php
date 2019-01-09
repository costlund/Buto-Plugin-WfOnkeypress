<?php
/**
<p>
Javascript to handle onkeypress on an element and do stuff if certain keys are pressed.
</p>
#code-javascript#
PluginWfOnkeypress.set('element_id', {ctrlKey: true, which: 119}, function(){alert('Do something on ctrl+w!');});
#code#
 */
class PluginWfOnkeypress{
  /**
  <p>
  Including js in html/head section.
  </p>
  #code-yml#
  -
    type: widget
    data:
      plugin: 'wf/onkeypress'
      method: include
  #code#
  */
  public static function widget_include(){
    $element = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/wf/onkeypress/include.js'));
    wfDocument::renderElement(array($element));
  }
  
  
}