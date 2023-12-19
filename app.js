function Stack() {
    this.count = 0;
      this.storage = {};
    
      this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
      }
    
      this.pop = function () {
        if (this.count === 0) {
          return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
      }
    
      this.peek = function () {
        return this.storage[this.count - 1];
      }
    
      this.size = function () {
        return this.count;
      }
    }///////////////////////////////////////////////////////stack
    function Queue() {
        var collection = [];
        this.print = function () {
          console.log(collection);
        }
        this.enqueue = function (element) {
          collection.push(element);
        }
        this.dequeue = function () {
          return collection.shift();
        }
        this.front = function () {
          return collection[0];
        }
      
        this.isEmpty = function () {
          return collection.length === 0;
        }
        this.size = function () {
          return collection.length;
        }
      }////////////////////////////////////////queue
      function PriorityQueue() {
      
        this.enqueue = function (element) {
          if (this.isEmpty()) {
            collection.push(element);
          } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
              if (element[1] < collection[i][1]) {
                collection.splice(i, 0, element);
                added = true;
                break;
              }
            }
            if (!added) {
              collection.push(element);
            }
          }
        }
      }///////////////////////////////priority queue
/** Node in the linked list **/
function Node(element) {  
    // Data in the node
    this.element = element;  
    // Pointer to the next node 
    this.next = null;
}
    function LinkedList() {  
        var length = 0;  
        var head = null;  
        this.size = function () {    
            return length;  
        }  
        this.head = function () {    
            return head;  
        }  
        this.add = function (element) {    
            var node = new Node(element);    
            if (head == null) {      
                head = node;    
            } else {      
                var currentNode = head;      
                while (currentNode.next) {        
                    currentNode = currentNode.next;      
                }      
                currentNode.next = node;    
            }    
            length++;  
        }  
        this.remove = function (element) {    
            var currentNode = head;    
            var previousNode;    
            if (currentNode.element === element) {      
                head = currentNode.next;    
            } else {      
                while (currentNode.element !== element) {        
                    previousNode = currentNode;        
                    currentNode = currentNode.next;      
                }      
                previousNode.next = currentNode.next;    
            }    
            length--;  
        }  
        this.isEmpty = function () {    
            return length === 0;  
        }  
        this.indexOf = function (element) {    
            var currentNode = head;    
            var index = -1;    
            while (currentNode) {      
                index++;      
                if (currentNode.element === element) {        
                    return index;      
                }      
                currentNode = currentNode.next;    
            }    
            return -1;  
        }  
        this.elementAt = function (index) {    
            var currentNode = head;    
            var count = 0;    
            while (count < index) {      
                count++;      
                currentNode = currentNode.next;    
            }    
            return currentNode.element;  
        }  
        this.addAt = function (index, element) {    
            var node = new Node(element);    
            var currentNode = head;    
            var previousNode;    
            var currentIndex = 0;    
            if (index > length) {      
                return false;    
            }    
            if (index === 0) {      
                node.next = currentNode;      
                head = node;    
            } else {      
                while (currentIndex < index) {        
                    currentIndex++;        
                    previousNode = currentNode;        
                    currentNode = currentNode.next;      
                }      
                node.next = currentNode;      
                previousNode.next = node;    
            }    
            length++;  
        }  
        this.removeAt = function (index) {    
            var currentNode = head;    
            var previousNode;    
            var currentIndex = 0;    
            if (index < 0 || index >= length) {      
                return null;    
            }    
            if (index === 0) {      
                head = currentIndex.next;    
            } else {      
                while (currentIndex < index) {        
                    currentIndex++;        
                    previousNode = currentNode;        
                    currentNode = currentNode.next;      
                }      
                previousNode.next = currentNode.next;    
            }    
            length--;    
            return currentNode.element;  
        }
    }////////////////////////linked list
    function MySet() {  
        var collection = [];  
        this.has = function (element) {    
            return (collection.indexOf(element) !== -1);  
        }  
        this.values = function () {    
            return collection;  
        }  
        this.size = function () {    
            return collection.length;  
        }  
        this.add = function (element) {    
            if (!this.has(element)) {      
                collection.push(element);      
                return true;    
            }    
            return false;  
        }  
        this.remove = function (element) {    
            if (this.has(element)) {      
                index = collection.indexOf(element);      
                collection.splice(index, 1);      
                return true;    
            }    
            return false;  
        }  
        this.union = function (otherSet) {    
            var unionSet = new MySet();    
            var firstSet = this.values();    
            var secondSet = otherSet.values();    
            firstSet.forEach(function (e) {      
                unionSet.add(e);    
            });    
            secondSet.forEach(function (e) {      
                unionSet.add(e);    
            });    
            return unionSet;  }  
            this.intersection = function (otherSet) {    
                var intersectionSet = new MySet();    
                var firstSet = this.values();    
                firstSet.forEach(function (e) {      
                    if (otherSet.has(e)) {        
                        intersectionSet.add(e);      
                    }    
                });    
                return intersectionSet;  
            }  
            this.difference = function (otherSet) {    
                var differenceSet = new MySet();    
                var firstSet = this.values();    
                firstSet.forEach(function (e) {      
                    if (!otherSet.has(e)) {        
                        differenceSet.add(e);      
                    }    
                });    
                return differenceSet;  
            }  
            this.subset = function (otherSet) {    
                var firstSet = this.values();    
                return firstSet.every(function (value) {      
                    return otherSet.has(value);    
                });  
            }
        } /////////////////////////set