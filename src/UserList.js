import React from 'react'
import User from './User'
import {connect} from 'react-redux'
 function UserList({users}) {
    
    return (
        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Job</th>
            <th scope="col"></th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,index)=> <User key={index} index={index}  {...user}/> )}
        </tbody>
</table>
    )
}
const mapStateToProps=({users})=>{
    return {users}
}
export default connect(mapStateToProps)(UserList)