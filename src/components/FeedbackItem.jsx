import { FaTimes,FaEdit} from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
// import {useState} from 'react'

function FeedbackItem({item}) {
    // const [rating,setRating]= useState(7)
    // const [text,setText]=useState('This is an example of a feedback item.')
  
    const {deleteFeedback,editFeedback} = useContext(FeedbackContext)

    return (
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
              <FaTimes color='purple'/>
        </button>
        <button onClick={()=> editFeedback(item)} className="edit">
          <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem  