class Scroller {
    constructor(context, child, parent) {
        this.position = 0;
        this.context = context;
        this.leftElement = child
        this.parentNode = parent
    }

    handleEvent(event) {
        let method = 'on' + event.type;
        this[method](event);
    }

    onwheel(e) {
        let vm = this
        let nextElement;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);

        if(e.deltaY > 0) {
            nextElement = vm.leftElement.nextElementSibling
            let maxPoint = nextElement.offsetLeft + vm.parentNode.offsetWidth

            if(maxPoint >= vm.parentNode.scrollWidth) {
                let y = nextElement.offsetLeft + vm.parentNode.offsetWidth - vm.parentNode.scrollWidth
                vm.position = -(nextElement.offsetLeft - y)
            } else {
                vm.position = -nextElement.offsetLeft + 10
                vm.leftElement = nextElement
            }
            vm.parentNode.style.transform = `translateX(${vm.position + 'px'})`
        } else {
            nextElement = vm.leftElement.previousElementSibling
            if(!nextElement) {
                return
            } else {
                vm.position = -nextElement.offsetLeft + 10
                vm.leftElement = nextElement
                vm.parentNode.style.transform = `translateX(${vm.position + 'px'})`
            }
        }
    }
}

export default Scroller