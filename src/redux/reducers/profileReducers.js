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
  PROFILE_DELETE_REQUEST,
  PROFILE_DELETE_SUCCESS,
  PROFILE_DELETE_FAIL,
  PROFILE_REVIEW_SAVE_SUCCESS,
  PROFILE_REVIEW_SAVE_REQUEST,
  PROFILE_REVIEW_SAVE_FAIL,
  PROFILE_REVIEW_SAVE_RESET,
} from '../constants/profileConstants';

function profileListReducer(state = { profiles: [] }, action) {
  switch (action.type) {
    case PROFILE_LIST_REQUEST:
      return { loading: true };
    case PROFILE_LIST_SUCCESS:
      return { loading: false, profiles: action.payload };
    case PROFILE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function profileDetailsReducer(state = { profile: { reviews: [] } }, action) {
  switch (action.type) {
    case PROFILE_DETAILS_REQUEST:
      return { loading: true };
    case PROFILE_DETAILS_SUCCESS:
      return { loading: false, profile: action.payload };
    case PROFILE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function profileDeleteReducer(state = { profile: {} }, action) {
  switch (action.type) {
    case PROFILE_DELETE_REQUEST:
      return { loading: true };
    case PROFILE_DELETE_SUCCESS:
      return { loading: false, profile: action.payload, success: true };
    case PROFILE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function profileSaveReducer(state = { profile: {} }, action) {
  switch (action.type) {
    case PROFILE_SAVE_REQUEST:
      return { loading: true };
    case PROFILE_SAVE_SUCCESS:
      return { loading: false, success: true, profile: action.payload };
    case PROFILE_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function profileReviewSaveReducer(state = {}, action) {
  switch (action.type) {
    case PROFILE_REVIEW_SAVE_REQUEST:
      return { loading: true };
    case PROFILE_REVIEW_SAVE_SUCCESS:
      return { loading: false, review: action.payload, success: true };
    case PROFILE_REVIEW_SAVE_FAIL:
      return { loading: false, errror: action.payload };
    case PROFILE_REVIEW_SAVE_RESET:
      return {};
    default:
      return state;
  }
}

export {
  profileListReducer,
  profileDetailsReducer,
  profileSaveReducer,
  profileDeleteReducer,
  profileReviewSaveReducer,
};
