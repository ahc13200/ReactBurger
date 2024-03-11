export const storageReducer = (state, action) => {
	switch (action.type) {
		case 'SET_ITEM':
			return { ...state, [action.key]: action.value };
			default:
			return { ...state, [action.key]: action.value };
	}
};
