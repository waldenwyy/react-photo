export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const REFINE_DATA = 'REFINE_DATA';

export const fetchData = (pageNumber) => {
    const fetchUrl = `https://picsum.photos/v2/list?page=${pageNumber}&limit=25`;
    
    return (dispatch) => {
       dispatch(fetchDataBegin());

        return fetch(fetchUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                } else {
                    return response.json();
                }
            })
            .then(result => {
                dispatch({
                    type: FETCH_DATA_SUCCESS,
                    payload: {
                        result
                    }
                })
            })
            .catch(err => dispatch({
                type: FETCH_DATA_FAILURE,
                error: err
            }))
    }
}

export const refineData = (refine) => ({
    type: REFINE_DATA,
    payload: refine
})

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = DATA => ({
    type: FETCH_DATA_SUCCESS,
    payload: {
        DATA
    }
});

export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: {
        error
    }
});