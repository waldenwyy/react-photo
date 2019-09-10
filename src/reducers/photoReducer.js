import {
	FETCH_DATA_BEGIN,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
	REFINE_DATA
} from "../actions/photoActions";

const initialState = {
	result: [],
	loading: false,
	error: null
};

const photoReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};

		case FETCH_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				result: action.payload.result
			};

		case FETCH_DATA_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
				result: []
			};

		case REFINE_DATA:
			return {
				...state,
				refine: action.payload
			};
		default:
			return state;
	}
};

export default photoReducer;
