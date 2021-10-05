function createSortedList() {
    const objectSolution={
        array: [],
        add(el) {
            this.array.push(el);
            this.array.sort((a,b) => a-b);
            this.size=this.array.length;
        },
        remove(index) {
            if(index>=0&&index<this.size&&this.size>0) {
                this.array.splice(index,1);
                this.size=this.array.length;
            };
        },
        get(index) {
            if(index>=0&&index<this.size&&this.size>0) {
                return this.array[index];
            }
        },
        size: 0
    }
    return objectSolution
}
// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));