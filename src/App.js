import {useState} from 'react'
import {BrowserRouter as Router,Route, Routes,NavLink} from 'react-router-dom'

import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import FeedbackList  from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import Card from './components/shared/Card'
import FeedbackForm from './components/FeedbackForm'
//
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage' 
import Post from './components/Post'

import {FeedbackProvider} from './context/FeedbackContext'

function App(){
 const [feedback,setFeedbak]= useState(FeedbackData)

 const addFeedback = (newFeedback) => {
    newFeedback.id= uuidv4()
    setFeedbak([newFeedback,...feedback])
    console.log(newFeedback)
 }

 const deleteFeedback = (id) => {
    if(window.confirm('Are you sure want to delete?'))
    {
        const narr = (feedback.filter((item => item.id !== id)))
        setFeedbak(narr);
        console.log(narr);
    }    
    
 }
 
    return (
        <FeedbackProvider>
        <Router>
{/* Suppose we want to make header name dynamic 
in such case we will use prop. Note: We can name prop anything we want */}
        <Header  bgColor='red' textColor='blue' />
        <div className='container'>

    <Routes>
            <Route exact path='/' element={
                <>
                 <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats />
           <FeedbackList handleDelete={deleteFeedback} />
            {/* <Card>Hello</Card> */}
                </>
            }>

           

            </Route>

        <Route path='/about' element={<AboutPage />} />
        {/* <Route path='/post/:id/:name' element={<Post />} /> */}

        <Route path='/post/*' element={<Post />} />

    </Routes>
   

    {/* <Card>
        <NavLink to='/' activeClassName='active'>
            Home
        </NavLink>
        <NavLink to='/about' activeClassName='active'>
            About
        </NavLink>
    </Card> */}
    
        <AboutIconLink />

        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App