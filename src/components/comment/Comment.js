import React from "react";
import Img from '../../images/about.jpg'
import './commentStyle.css'
import moment from 'moment';
import Like from './like'

export default function Comment(props) {

  if(props){
    const { createdAt , comment,fristName, imageId } = props.comment;
     
    { props.like && props.like.map((like)=>(
      <Like like={like} imageId={imageId} key={like.id}/>
   ))} 
  
    // console.log('likedProuductIbbbd',props.like)
    
  if(!imageId.localeCompare(props.imageId) ){ 
    // this.props.total=this.props.total+1;
    // console.log('likedProuductId',likedProuductId)
    return (
      <div className="media mb-4" >
        <img style={{borderRadius:50}}
          className=" bg-light "
          width="48"
          height="48"
          src={Img }
          alt={fristName}
        />
        <div className="media-body px-2 shadow-sm rounded bg-white  ">
          <div className="d-flex flex-row bd-highlight   p-1">
              <p className="   font-weight-bold pr-2">{fristName}</p>
               < p className=" font-weight-bold  textDays" > 
                {moment(createdAt.toDate()).fromNow()}
                </p>  
          </div>  
          <div className='  '>{comment}</div>    
        </div>
      </div>
    );
  }
  else{
     return(
     <div>{null}</div>
     );
  }
 
  }
}