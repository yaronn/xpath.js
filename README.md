## xpath
DOM 3 Xpath implemention and helper for node.js.

Originally written by Cameron McCormack ([blog](http://mcc.id.au/xpathjs)). 

Thanks to Yaron Naveh ([blog](http://webservices20.blogspot.com/)).

## Install
Install with [npm](http://github.com/isaacs/npm):

    npm install xpath

xpath is xml engine agnostic but I recommend to use [xmldom](https://github.com/jindw/xmldom):

    npm install xmldom


## Your first xpath:
`````javascript
	var xpath = require('xpath')
	  , dom = require('xmldom').DOMParser

	var xml = "<book><title>Harry Potter</title></book>"
	var doc = new dom().parseFromString(xml)    
	var nodes = xpath.select("//title", doc)
	console.log(nodes[0].localName + ": " + nodes[0].firstChild.data)
	console.log("node: " + nodes[0].toString())
`````
-->

	title: Harry Potter
	Node: <title>Harry Potter</title>

## Get text values directly
`````javascript 
    var xml = "<book><title>Harry Potter</title></book>"
    var doc = new dom().parseFromString(xml)
    var title = xpath.select("//title/text()", doc).toString()
    console.log(title)
`````  
-->
    
    Harry Potter

## Namespaces
`````javascript  
	var xml = "<book><title xmlns='myns'>Harry Potter</title></book>"
    var doc = new dom().parseFromString(xml)    
    var node = xpath.select("//*[local-name(.)='title' and namespace-uri(.)='myns/']", doc)[0]
    console.log(node.namespaceURI)
`````
-->
    
    myns
	
## Attributes
`````javascript  
    var xml = "<book author='J. K. Rowling'><title>Harry Potter</title></book>"
    var doc = new dom().parseFromString(xml)
    var author = xpath.select1(doc, "/book/@author").value
    console.log(author)
`````
-->

    J. K. Rowling
