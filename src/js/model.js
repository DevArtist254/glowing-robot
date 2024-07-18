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

export const setActivityPhase = function(phase){
    state.phases.push(phase);
}