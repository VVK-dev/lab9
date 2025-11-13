import './App.css'
import { Route, Routes } from 'react-router'
import CommonLayout from './components/CommonLayout/CommonLayout'
import Contact from './components/ContactsPage/Contact'
import BlogPostsPage from './components/blogpostspage/BlogPostPage'
import HomePage from './components/HomePage/HomePage'
import BlogPost from './components/blogpost/BlogPost'

function App() {

  return (
    
    <Routes>

      <Route element= {<CommonLayout/>}>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/BlogPostPage' element={<BlogPostsPage/>}/>
        <Route path='/BlogPostPage/:post_id' element={<BlogPost/>}/>
    
      </Route>
    
    </Routes>

  )
}

export default App
