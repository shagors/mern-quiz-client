import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}
export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}

//** inser user data */
export const usePublishResult = (resultData) => {
    const { result, userName } = resultData;
    (async () => {
        try {
            if(result !== [] && !userName) throw new Error("Couldn't get result");
            await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data);
        } catch (error) {
            console.log(error);
        }
    })();
};