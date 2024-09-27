import { reducer, StateType, TOOGLE_COLLAPSED } from "./reducer";

test('collapsed should be true', () => {
    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, { type: TOOGLE_COLLAPSED });

    expect(newState.collapsed).toBe(true);
})

test('collapsed should be false', () => {
    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, { type: TOOGLE_COLLAPSED });

    expect(newState.collapsed).toBe(false);
})

test('reducer should be throw', () => {
    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, { type: "FAKE_TYPE" })
    }).toThrowError();
})