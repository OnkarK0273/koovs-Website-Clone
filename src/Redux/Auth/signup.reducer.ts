/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { SignupDetail } from "../../utils/types";
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "./signup.types";

export interface ActionType {
  type: string;
  payload: SignupDetail;
}

const initSignupState = {};

export const signupReducer = (state = initSignupState, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        newUsers: [...state.newUsers, payload],
      };
    }

    case SIGNUP_ERROR: {
      return { ...state };
    }

    default: {
      return state;
    }
  }
};
