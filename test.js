var select = require('./xpath.js')
  , dom = require('xmldom').DOMParser
  , assert = require('assert')
 
module.exports = {

  "get simple xpath": function (test) {   
    var xml = "<book><title>Harry Potter</title></book>"
    var doc = new dom().parseFromString(xml)    
    var nodes = select(doc, "//title")
    assert.equal("title", nodes[0].localName)
    assert.equal("Harry Potter", nodes[0].firstChild.data) //first child is the text() node
    assert.equal("<title>Harry Potter</title>", nodes[0].toString())
    test.done()
	},

  "get text node": function (test) {   
    var xml = "<book><title>Harry Potter</title></book>"
    var doc = new dom().parseFromString(xml)    
    var title = select(doc, "//title/text()")[0].data    
    assert.equal("Harry Potter", title)
    test.done()
  },

  "get xpath with namespaces": function (test) {   
    var xml = "<book><title xmlns='myns'>Harry Potter</title></book>"
    var doc = new dom().parseFromString(xml)    
    var nodes = select(doc, "//*[local-name(.)='title' and namespace-uri(.)='myns']")
    assert.equal("title", nodes[0].localName)
    assert.equal("myns", nodes[0].namespaceURI)    
    test.done()
  },

  "get attribute": function (test) {   
    var xml = "<book author='J. K. Rowling'><title>Harry Potter</title></book>"
    var doc = new dom().parseFromString(xml)    
    var author = select(doc, "/book/@author")[0].value
    assert.equal("J. K. Rowling", author) 
    test.done()
  },
}
