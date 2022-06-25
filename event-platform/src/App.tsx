import {gql, useQuery} from '@apollo/client'
import { useEffect } from 'react'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface lessons {
  id: string;
  title: string;
}

export const App = () =>{
  const {data} = useQuery<{lessons: lessons[]}>(GET_LESSONS_QUERY)
  
  return (
    <>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </>
  )
}