import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

//  we are creating a thunk using redux-toolkit's createAsyncThunk function.
// SYNTAX: createAsyncThunk(actionTypeName, payloadCreator, options?)
// now we can dispatch this thunk from our component using the 'fetchAddress' action creator.
export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  // 1) Get the user's geolocation position

  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Use the position to get the address
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj.city}, ${addressObj.postcode}, ${addressObj.countryName}`;

  // 3) Return the position and address as an object
  // This is the payload for the FULFILLED action/state in the extraReducers
  return { position, address };
});

const initialState = {
  username: "",
  password: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
