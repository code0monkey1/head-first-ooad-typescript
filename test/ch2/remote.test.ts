import { DogDoor } from "../../src/ch2/DogDoor";
import { IBarkSensor, Remote } from "../../src/ch2/Remote";
jest.useFakeTimers();
describe('remote', () => {


  describe('pressButton', () => {

    describe('when the door is closed', () => {

     
      it('opens the door',()=>{
  
           //arrange
           const dogDoor = new DogDoor()
            const isBarkingMock = jest.fn()

            const barkSensor:IBarkSensor ={
              isBarking:isBarkingMock
            }
    
            const remote = createRemote(dogDoor,barkSensor)
           //act
           remote.pressButton()
  
           //assert
           expect(dogDoor.isOpen()).toBe(true)
      })

      it('closes the door , after opening for 2 seconds',()=>{
          

           //arrange
           const dogDoor = new DogDoor()
           const isBarkingMock = jest.fn()

            const barkSensor:IBarkSensor ={
              isBarking:isBarkingMock
            }

            const remote = createRemote(dogDoor,barkSensor)

  
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
          const dogDoor = new DogDoor()
          const isBarkingMock = jest.fn()

          const barkSensor:IBarkSensor ={
            isBarking:isBarkingMock
          }

          isBarkingMock.mockReturnValueOnce(true)
          
          const remote = new Remote(dogDoor,barkSensor)
          
          dogDoor.open()

          //act
          remote.pressButton()
          
          //assert
          expect(dogDoor.isOpen()).toBe(false)
        
      })
    })

    
    


    
  })


  describe('dog barks', () => {


    describe('the door is closed', () => {


      it('opens the door',()=>{

        
        //arrange
         const dogDoor = new DogDoor()
         const isBarkingMock = jest.fn()

         const barkSensor:IBarkSensor ={
             isBarking:isBarkingMock
           }

         const sut = createRemote(dogDoor,barkSensor)

         isBarkingMock.mockReturnValueOnce(true)

          //act
          jest.advanceTimersByTime(1000);
          
          //assert
         expect(dogDoor.isOpen()).toBe(true)

      })
    })
    
    
  })
  

  
  
  
})

const createRemote=(dogDoor:DogDoor, barkSensor:IBarkSensor)=>{
 
   return new Remote(dogDoor,barkSensor)
}
