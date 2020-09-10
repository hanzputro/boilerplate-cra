import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_SUCCESS,
  PROFILE_LIST_FAIL,
  PROFILE_DETAILS_REQUEST,
  PROFILE_DETAILS_SUCCESS,
  PROFILE_DETAILS_FAIL,
  PROFILE_SAVE_REQUEST,
  PROFILE_SAVE_SUCCESS,
  PROFILE_SAVE_FAIL,
  PROFILE_DELETE_SUCCESS,
  PROFILE_DELETE_FAIL,
  PROFILE_DELETE_REQUEST,
  PROFILE_REVIEW_SAVE_REQUEST,
  PROFILE_REVIEW_SAVE_FAIL,
  PROFILE_REVIEW_SAVE_SUCCESS,
} from '../constants/profileConstants';
import Axios from 'axios';

const listProfiles = (pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_LIST_REQUEST });
    const { data } = await Axios.get('https://reqres.in/api/users?page=' + pageNumber);
    dispatch({ type: PROFILE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROFILE_LIST_FAIL, payload: error.message });
  }
};

const saveProfile = (profile) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROFILE_SAVE_REQUEST, payload: profile });
    const {
      userSignin: { userInfo },
    } = getState();
    if (!profile._id) {
      const { data } = await Axios.post('/api/profiles', profile, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: PROFILE_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.put('/api/profiles/' + profile._id, profile, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: PROFILE_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PROFILE_SAVE_FAIL, payload: error.message });
  }
};

const detailsProfile = (profileId) => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_DETAILS_REQUEST, payload: profileId });
    const { data } = await Axios.get('/api/profiles/' + profileId);
    dispatch({ type: PROFILE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROFILE_DETAILS_FAIL, payload: error.message });
  }
};

const deleteProdcut = (profileId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({ type: PROFILE_DELETE_REQUEST, payload: profileId });
    const { data } = await Axios.delete('/api/profiles/' + profileId, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token,
      },
    });
    dispatch({ type: PROFILE_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: PROFILE_DELETE_FAIL, payload: error.message });
  }
};

const saveProfileReview = (profileId, review) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {
        userInfo: { token },
      },
    } = getState();
    dispatch({ type: PROFILE_REVIEW_SAVE_REQUEST, payload: review });
    const { data } = await Axios.post(`/api/profiles/${profileId}/reviews`, review, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    dispatch({ type: PROFILE_REVIEW_SAVE_SUCCESS, payload: data });
  } catch (error) {
    // report error
    dispatch({ type: PROFILE_REVIEW_SAVE_FAIL, payload: error.message });
  }
};

export { listProfiles, detailsProfile, saveProfile, deleteProdcut, saveProfileReview };
