import React from 'react'
import {connect} from 'react-redux'
 function User({name,job,id,index,deleteUser,editUser}) {
    return (
        <tr>
        <th scope="row">{index+1}</th>
        <td>{name}</td>
        <td>{job}</td>
        <td><button onClick={()=>deleteUser()} className="btn btn-primary">Delete</button></td>
        <td><button onClick={()=>editUser()} className="btn btn-primary">Update</button></td>
        </tr>
    )
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    const {id}=ownProps
  
    return{
        deleteUser:()=>{dispatch({type:'DELETE_PERSON',payload:id})},
        editUser:()=>{dispatch({type:'EDIT_PERSON',payload:id})}
    }
}

export default connect(null,mapDispatchToProps)(User)