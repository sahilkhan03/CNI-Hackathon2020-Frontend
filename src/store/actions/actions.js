import {apiCall} from "./api"

export const setWeb = (formData, filesCSV) => ({
    type: "SET", 
    formData,
    filesCSV
})

export const resetWeb = () => ({
    type: "RESET"
})

export const resetData = () => {
    return dispatch => {
        return dispatch(resetWeb())
    }
}

export const fetchData = (formData, filesCSV) => {
    return dispatch => {
        return apiCall("https://cni-hackathon-backend.herokuapp.com/api/submitdata", formData)
            .then(res => dispatch(setWeb(res, filesCSV)))
            .catch(err => console.log(err));
    }
}

