import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface State {
  list: string[]
}

const initialState: State = {
  // list: JSON.parse(localStorage.getItem('messages') || '[]')
  list: []
};

interface FactItem {
  fact: string,
  length: number
}

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  (baseURL: string) => {
    console.log('calling fetchMessages');
    return axios.get(baseURL + '/facts?limit=10')
      .then((result) => {
        console.log(result);

        return result.data.data.map((factItem: FactItem) => factItem.fact);
      });
  }
);

const messagesSlice = createSlice({
  name: 'message',
  initialState: initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      console.log('Add Message :', action.payload);
      const messages = state.list.concat([ action.payload ]);

      // localStorage.setItem('messages', JSON.stringify(messages));

      return {
        ...state,
        list: messages
      };
    },
    removeMessage: (state, action: PayloadAction<number>) => {
      const firstPart = state.list.slice(0, action.payload);
      const secondPart = state.list.slice(action.payload + 1, state.list.length);

      return {
        ...state,
        list: firstPart.concat(secondPart)
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action: PayloadAction<string[]>) => {
      console.log('fetchMessages fulfilled');

      return {
        ...state,
        list: action.payload
      };
    })
  }
});

export const { addMessage, removeMessage } = messagesSlice.actions;

export default messagesSlice.reducer;