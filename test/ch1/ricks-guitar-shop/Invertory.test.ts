import { Guitar, GuitarSpecs, TGuitarProps, TGuitarSpecs } from "../../../src/ch1/ricks-guitar-shop/guitar"
import { FilterGuitars, Inventory } from "../../../src/ch1/ricks-guitar-shop/inventory"
import { Builder, Type, Wood } from "../../../src/ch1/ricks-guitar-shop/types"

describe('FilterGuitars', () => {


  describe('execute', () => {

    describe('all odd guitars match', () => {

      it('shows 5 guitars ',()=>{

           //arrange
           const guitars = createGuitars(10)

           const guitarFilter:Partial<TGuitarSpecs> = {
             type:Type.ACOUSTIC
            }
        
           //act
           const result = new FilterGuitars(guitarFilter).execute(guitars)

           //assert
           expect(result).toHaveLength(5)

           
      })
      
    })
    
    
  })
  
  
})


const createGuitars =(count:number)=>{

  const guitars =[]
   
  for(let i=1;i<=count;i++){
         
          const guitarSpecs = new GuitarSpecs({backWood:Wood.ALDER,
                                              model:i+'',builder:Builder.ANY,                   
                                              topWood:Wood.ADIRONDACK,
                                              type:i&1?Type.ACOUSTIC:Type.ELECTRIC})
         

          guitars.push(new Guitar({guitarSpecs,serialNumber:i+'',price:i}))
    }

  return guitars;
}