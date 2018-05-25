import React, { Component } from 'react';


export default class ElfDebugEnzyme {

    constructor(showData=false, callerName = '') {
        this.showData = showData;
        this.callerName = callerName + ':\n';
    }

    display(value) {
        console.log(this.callerName + value);
    }

    getAll(wrapper, showMe) {
        if (this.showData || showMe) {
            const paragraphData = wrapper.debug();
            this.display(paragraphData);
        }
    }

    getElement(wrapper, element, showMe) {
        if (this.showData || showMe) {
            const paragraphData = wrapper.find(element).debug();
            this.display(paragraphData);
        }
    }

    getFirst(wrapper, element, showMe) {
        if (this.showData || showMe) {
            const paragraphData = wrapper.find(element).first().debug();
            this.display(paragraphData);
        }
    }

    getIndex(wrapper, element, index, showMe) {
        if (this.showData || showMe) {
            var paragraphData = wrapper.find(element).childAt(index).debug();
            this.display(paragraphData);
        }
    }

    getLast(wrapper, element, showMe) {
        if (this.showData || showMe) {
            const paragraphData = wrapper.find(element).last().debug();
            this.display(this.callerName + paragraphData);
        }

    }
}

