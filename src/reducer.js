import { v4 as uuid } from 'uuid';
export const defaultState={
users:[],
name:'',
job:'',
edit:false
}

export function reducer (state,action){
  
    switch(action.type){
        case 'INPUT_NAME':{
            
            return {...state,name:action.payload}
        }
        case 'INPUT_JOB':{

            return {...state,job:action.payload}
        }
        case 'ADD_PERSON':{
           if(!state.edit){
            const user={id:uuid(),name:state.name,job:state.job,update:false}
            state.name=''
            state.job=''
            return {...state,users:[...state.users,user],}
           }else{
            const tempUser=state.users.find(user=>user.update)
            const tempUsers=[...state.users]
            const index=state.users.indexOf(tempUser)
            tempUsers[index]={...tempUser,name:state.name,job:state.job,update:false}
            console.log(tempUsers)
            return {...state,users:tempUsers,edit:!state.edit,name:'',job:''}
           }
          
        }
        case 'DELETE_PERSON':{
        
            return {...state,users:state.users.filter(user=>user.id!==action.payload)}
        }
        case 'EDIT_PERSON':{
                const user=state.users.find(user=>user.id===action.payload)
                user.update=true
            return {...state,edit:!state.false,name:user.name,job:user.job}
        }
        default:{
            return state
        }
    }


}