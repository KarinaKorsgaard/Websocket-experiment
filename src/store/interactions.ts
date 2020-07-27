import { Point } from '@/types';

export interface InteractionState {
    scrollSpeed: number,
    scrollPosition: number,
    point: Point,
    
}

const getDefaultState = () => {
    return {
        scrollSpeed: 0,
        scrollPosition: 0,
        point: {x: 0, y: 0, dx: 0, dy: 0}
    };
};

export default {
    namespaced: true as true,
    state: getDefaultState() as InteractionState,

    getters: {
        scrollSpeed: (state: InteractionState) => state.scrollSpeed,
        scrollPosition: (state: InteractionState) => state.scrollPosition,
        point: (state: InteractionState) => state.point
    },
    mutations: {
        UPDATE_SCROLL(state: InteractionState, pos: number) {
            state.scrollSpeed = pos - state.scrollPosition
            state.scrollPosition = pos;
        },
        SET_CURSORS(state: InteractionState, point: Point) {
            
            /* console.log(cursors) */
            state.point = point;
        },
        RESET_STATE(state: InteractionState) {
            state = getDefaultState() as InteractionState;
        }
    },
    actions: {
        /* async loadName({ commit }, payload: { id: string }) {
            const name = `Name-${payload.id}` // load it from somewhere
            commit("SET_NAME", name)
            return { name }
        }, */
    }
};
