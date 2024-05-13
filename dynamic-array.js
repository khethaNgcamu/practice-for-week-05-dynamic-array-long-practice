class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize).fill(undefined);
  }

  read(index) {

    // Your code here
    if(index < 0 || index >= this.length){
      throw new Error("out of bound");
    }
    return this.data[index];
  }

  push(val) {

    // Your code here
    if(this.length === this.capacity){
      this.resize(this.capacity * 2);
    }

    this.data[this.length] = val;
    this.length++;
  }


  pop() {

    // Your code here
    if (this.length === 0) {
      throw new Error("Cannot pop from an empty array");
    }

    const poppedValue = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return poppedValue;
    
  }

  shift() {

    // Your code here
    if (this.length === 0) {
      throw new Error("Cannot shift from an empty array");
    }

    const shiftedValue = this.data[0];
    for(let i = 0; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1];
    }

    this.data[this.length - 1] = undefined;
    this.length--;
    return shiftedValue;
  }

  unshift(val) {

    // Your code here
    if (this.length === this.capacity) {
      this.resize(this.capacity * 2);
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {

    // Your code here
    for(let i = 0; i < this.length; i++){
      if(this.data[i] === val){
        return i;
      }
    }
    return -1;
  }

  resize(newCapacity) {
    const newData = new Array(newCapacity).fill(undefined);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
    this.capacity = newCapacity;
  }
  

}


module.exports = DynamicArray;