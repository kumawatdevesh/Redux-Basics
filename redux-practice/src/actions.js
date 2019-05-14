export const ADD = 'add';
export const DOWN = 'down';
export const STORE = 'store';
export const ADDED_PERSON = 'added_person';

export const add = () => {
    return {
        type: ADD
    }
};

export const down = () => {
    return {
        type: DOWN
    }
}

export const saveResult = (res) => {
    return {
        type: STORE,
        result: res
    }
}

export const store = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 5000)
    }
}

export const addedPerson = () => {
    return {
        type: ADDED_PERSON
    }
}