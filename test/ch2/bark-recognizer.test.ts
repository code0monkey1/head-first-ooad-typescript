import { Bark } from "../../src/ch2/Bark"
import { BarkRecognizer } from "../../src/ch2/BarkRecognizer"
import { DogDoor } from "../../src/ch2/DogDoor"

describe('bark recognizer', () => {
  jest.useFakeTimers()

  beforeEach(()=>{
    jest.clearAllMocks()
  })

  describe('dog barks', () => {

    describe('when different dog', () => {
       
      describe('door is closed', () => {
        
         it('does not open',()=>{
      
             // arrange
              const dogBark = new Bark('woof')
              const dogDoor = new DogDoor(dogBark)
             const sut = new BarkRecognizer(dogDoor)
      
              // act
              sut.recognize(new Bark('wife'))
      
             // assert
             expect(dogDoor.isOpen()).toBe(false)
          })
        
      })

    })


    describe('when family dog', () => {
      
      describe('door is closed', () => {
  
        it('opens the door',()=>{
    
           // arrange
            const dogBark = new Bark('woof')
            const dogDoor = new DogDoor(dogBark)
           const sut = new BarkRecognizer(dogDoor)
    
            // act
            sut.recognize(new Bark('woof'))
    
           // assert
           expect(dogDoor.isOpen()).toBe(true)
        })
        
      })
  
       describe('door is open', () => {
        
        it('shuts down after 2 seconds',()=>{
    
           // arrange
            const dogBark = new Bark('woof')
            const dogDoor = new DogDoor(dogBark)
           const sut = new BarkRecognizer(dogDoor)
      
           // act
           sut.recognize(new Bark('woof'))
          
           // assert
           expect(dogDoor.isOpen()).toBe(true)
           
           jest.advanceTimersByTime(2000)
          
           expect(dogDoor.isOpen()).toBe(false)
        })
        
      })
    })
    
  })
  
  
})
