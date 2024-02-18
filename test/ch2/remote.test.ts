import { Bark, Sound } from "../../src/ch2/Bark";
import { DogDoor } from "../../src/ch2/DogDoor";
import { Remote } from "../../src/ch2/Remote";

describe('remote', () => {
  jest.useFakeTimers();

   beforeEach(()=>{
    jest.clearAllMocks()
  })

  describe('pressButton', () => {

    describe('when the door is closed', () => {

     
      it('opens the door',()=>{
  
           //arrange
           const dogBark = new Bark('woof')
           const dogDoor = new DogDoor(dogBark)
         
            const remote = createRemote(dogDoor)
           //act
           remote.pressButton()
  
           //assert
           expect(dogDoor.isOpen()).toBe(true)
      })

      it('closes the door , after opening for 2 seconds',()=>{
          
           //arrange
           const dogBark = new Bark('woof')
           const dogDoor = new DogDoor(dogBark)

           const remote = createRemote(dogDoor)

           //act
           remote.pressButton()
  
           //assert
           expect(dogDoor.isOpen()).toBe(true)

            // Fast-forward time by 2 seconds
            jest.advanceTimersByTime(2000);
      
              // Assert that the door is now open after 2 seconds
            expect(dogDoor.isOpen()).toBe(false);

      })

    })

    describe('when the door is open', () => {
      
        it('closes the door',()=>{
          
          //arrange
           const dogBark = new Bark('woof')
           const dogDoor = new DogDoor(dogBark)
  
          const remote = new Remote(dogDoor)
          
          dogDoor.open()

          //act
          remote.pressButton()
          
          //assert
          expect(dogDoor.isOpen()).toBe(false)
        
      })
    })
    
  })
  
  
})

const createRemote=(dogDoor:DogDoor)=>{
 
   return new Remote(dogDoor)
}
