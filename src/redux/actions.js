import { NAVIGATE } from "./actionTypes";

export const Navigate = destination => ({
  type: NAVIGATE,
  payload: {
    currentTab: destination
  }
});
