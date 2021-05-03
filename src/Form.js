import React from 'react'
import {connect} from 'react-redux'
function Form({inputName,inputJob,addPerson,name,job,edit}) {
 
    return (
        <React.Fragment>
            <div className='form-inline'>
                <div className='mr-3' >
                    <div  >
                        <label className='m-0' htmlFor="name">Name</label>
                    </div>
                    <input onChange={(e)=>{inputName(e.target.value)}} value={name} type="text" />
                   
                </div>
                <div>
                    <div>
                        <label className='m-0' htmlFor="name">Job</label>
                    </div>
                    <input onChange={(e)=>inputJob(e.target.value)} value={job} type="text" />
                
                </div>
              
            </div>
            <div>
            <button onClick={addPerson} className="btn btn-primary mx-auto">{edit?'edit':'Add'} </button>
                </div>
          {(name||job)&& <p><span>entered name is <b>{name}</b>  </span><span>entered job is <b>{job}</b></span> </p> }
        </React.Fragment>

    )
}

const mapStateToProps=({name,job,edit})=>{

    return {name,job,edit}
}

const mapDispatchToProps=(dispatch)=>{

    return {
inputName:(e)=>{dispatch({type:'INPUT_NAME',payload:e})},
inputJob:(e)=>{dispatch({type:'INPUT_JOB',payload:e})},
addPerson:()=>{dispatch({type:'ADD_PERSON'})}
}

}
export default connect(mapStateToProps,mapDispatchToProps)(Form)
