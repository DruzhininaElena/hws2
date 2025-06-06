import {AppStoreType} from '../../hw10/bll/store';

const initState = {
    themeId: 1,
}

type ThemeState = typeof initState

type SetThemeIdAction = {
    type: 'SET_THEME_ID'
    payload: number
}

export const themeReducer = (state = initState, action: ActionType): ThemeState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                themeId: action.payload
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): SetThemeIdAction => ({ type: 'SET_THEME_ID', payload: id }) // fix any

type ActionType = ReturnType<typeof changeThemeId>

