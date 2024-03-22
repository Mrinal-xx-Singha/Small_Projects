
// LRU CACHE 


class LRU{
    constructor(max=5){
        this.max = max;
        this.cache = new Map()
    }
    get(key){
        let item=this.cache.get(key)

        if(item){
            this.cache.delete(key) 
            this.cache.set(key,item)
        
        }
        return item
    }


    set(key,value){
        if(this.cache.has(key))this.cache.delete(key);

        else if(this.cache.size === this.max){
            this.cache.delete(this.first())

        }
        this.cache.set(key,value)
    }
    first(){
        return this.cache.keys().next().value
    }
}



const LRUCache =new LRU(3)
LRUCache.set("name","Mrinal")
LRUCache.set("age","24")
LRUCache.set("profession","SDE")
LRUCache.set("location","malda")
console.log(LRUCache.cache);