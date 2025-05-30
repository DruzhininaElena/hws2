type LoadingState = {
    isLoading: boolean
}

const initState: LoadingState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingState => {
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
