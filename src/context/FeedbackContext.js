import {createContext,useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [isLoading,setIsLoading]=useState(true)
    
    const [feedback,setFeedback]= useState([])

     const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
     })

     useEffect(()=> {
        fetchFeedback()
     },[])

    //  FETCH FEEDBACK

     const fetchFeedback= async () => {
        const response = await  fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setIsLoading(false)

        // console.log(data)
        setFeedback(data)
    }



//     Update feedback item
     const updateFeedback= (id,updItem) => {
          // console.log(id,updItem)
          setFeedback(feedback.map((item)=> (
            item.id === id ? {...item,...updItem}:item
          ))
          )

     }

// Set item to be updated

     const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
     }
// Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure want to delete?'))
        {
            const narr = (feedback.filter((item => item.id !== id)))
            setFeedback(narr);
            console.log(narr);
        }    
        
     }

     const addFeedback = (newFeedback) => {
        newFeedback.id= uuidv4()
        setFeedback([newFeedback,...feedback])
        console.log(newFeedback)
     }
    


    return <FeedbackContext.Provider value={
        {
            feedback,
            feedbackEdit,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,

        }
    }>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext