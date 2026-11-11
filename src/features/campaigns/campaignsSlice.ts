import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Campaign } from './types';

type LoadStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface CampaignsState {
  items: Campaign[];
  status: LoadStatus;
  error: string | null;
}

const initialState: CampaignsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchCampaigns = createAsyncThunk('campaigns/fetchAll', async () => {
  const response = await fetch('/api/campaigns');
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return (await response.json()) as Campaign[];
});

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaigns.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCampaigns.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCampaigns.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export default campaignsSlice.reducer;
