


import { makeAutoObservable } from "mobx"


   export class GlobalCounter {

        mycounter = 18
        
            constructor() {
                makeAutoObservable(this)
            }
        
        arttir(){
          this.mycounter +=1
        }
        azalttir(){
          this.mycounter -=1
        }
        }
        

        
        let useGlobalCounter  = new GlobalCounter();

 
export default useGlobalCounter;

