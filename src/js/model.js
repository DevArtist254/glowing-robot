export const state = {
    user: {},
}

export const setUserModel = function(newUser){
    const {user, date, activity} = newUser;
    
    state.user = {
        user,
        date,
        activity
    }
}