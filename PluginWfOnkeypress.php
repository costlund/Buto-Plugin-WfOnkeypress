<?php
class PluginWfOnkeypress{
  public static function widget_include(){
    wfPlugin::enable('include/js');
    $element = wfDocument::createWidget('include/js', 'include', array('src' => '/plugin/wf/onkeypress/include.js'));    
    wfDocument::renderElement(array($element));
  }
}
