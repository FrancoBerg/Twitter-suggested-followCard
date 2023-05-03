import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {   
   return (
    <section className='App'>

       <TwitterFollowCard 
         userName="lilcake" 
         name="Tortita" 
     />
       <TwitterFollowCard
         userName="idk_frn" 
         name="Franco Berg" 
     />
    </section>
   )

}