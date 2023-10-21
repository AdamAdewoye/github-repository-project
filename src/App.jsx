import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Loader from './components/loader/loader'

const AllRepo= lazy(()=> import('./pages/allRepo/AllRepo'))
const PageNotFound= lazy(()=> import('./pages/pageNotFound/PageNotFound'))
const RepoDetails= lazy(()=> import('./pages/repoDetails/RepoDetails'))

function App() {

  return (
    <>
    <Suspense fallback={<Loader />}>

      <Routes>
        <Route exact path ="/" element={<AllRepo/>} />
        <Route path="/adamadewoye/:id" element ={<RepoDetails/>} />
        <Route path="*" element={< PageNotFound/>}/>
      </Routes>
    </Suspense>

    </>
  )
}

export default App

