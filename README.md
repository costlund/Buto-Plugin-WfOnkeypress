# Buto-Plugin-WfOnkeypress


Javascript to handle onkeypress on an element and do stuff if certain keys are pressed.

```
PluginWfOnkeypress.set('element_id', {ctrlKey: true, which: 119}, function(){alert('Do something on ctrl+w!');});
```


Including javascript in html/head section.

```
type: widget
data:
  plugin: 'wf/onkeypress'
  method: include
```
