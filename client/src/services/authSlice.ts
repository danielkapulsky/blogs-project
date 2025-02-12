import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPayload } from "../interfaces/userInterface";
import { jwtDecode } from "jwt-decode";

interface AuthState {
  token: string | null;
  user: UserPayload | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;

      const decoded = jwtDecode<UserPayload>(action.payload);
      state.user = {
        _id: decoded._id,
        role: decoded.role,
      }
    },
    clearAuthToken: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const {setAuthToken, clearAuthToken} = authSlice.actions;
export default authSlice.reducer;
