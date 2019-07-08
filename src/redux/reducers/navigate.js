import { NAVIGATE } from "../actionTypes";

const initialNavigationState = {
  currentTab: "Home"
};

export default function(state = initialNavigationState, action) {
  switch (action.type) {
    case NAVIGATE: {
      const { currentTab } = action.payload;
      return {
        ...state,
        currentTab: currentTab
      };
    }
    default:
      return state;
  }
}
