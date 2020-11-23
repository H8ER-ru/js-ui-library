import $ from '../core'

$.prototype.addAttr = function (attrNames, attrValue = ''){
    for (let i = 0; i < this.length; i++){
        this[i].setAttribute(attrNames, attrValue)
    }
    return this
}

$.prototype.delAttr = function (attrNames){
    for (let i = 0; i < this.length; i++){
        this[i].removeAttribute(attrNames)
    }
    return this
}