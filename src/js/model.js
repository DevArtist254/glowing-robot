export const state = {
    user: {},
    phases: []
}

export const setUserModel = function(newUser){
    const {user, date, activity} = newUser;
    
    state.user = {
        user,
        date,
        activity
    }
}

export const setActivityPhase = function(newPhase){
    const {date, activity} = newPhase;

    const phase = {
        date,
        activity,
        percentageDone : 0,
        order : 1
    } 

    state.phases.push(phase);
}