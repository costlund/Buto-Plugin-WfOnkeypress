<?php
class PluginWfOnkeypress{
  public static function widget_include(){
    $element = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/wf/onkeypress/include.js'));
    wfDocument::renderElement(array($element));
  }
}
