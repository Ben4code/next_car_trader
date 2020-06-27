import { useContext } from 'react'
import {TestContext} from './_app'

const faq = ({data}) => {
  const contextData = useContext(TestContext)

  console.log(data, contextData)
  return (
    <div>

    </div>
  )
}


export const getStaticProps = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'});
   const data = await res.json();
   return {
     props: {
       data
     }
   }
}

export default faq;