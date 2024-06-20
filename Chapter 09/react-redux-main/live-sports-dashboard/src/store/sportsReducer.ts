// src/store/sportsReducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { fetchLiveScoresAsync } from './actions/sportsActions';

interface SportsState {
  liveScores: any[]; // Define appropriate data structure for live scores
  loading: boolean;
  error: string | null;
}

const initialState: SportsState = {
  liveScores: [],
  loading: false,
  error: null,
};

export const sportsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchLiveScoresAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchLiveScoresAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.liveScores = action.payload;
    })
    .addCase(fetchLiveScoresAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch live scores';
    });
});
