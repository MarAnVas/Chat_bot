import { handleActions } from 'redux-actions';
import { addNewMessage } from '../../actions/chatsActions';

const initialReducer = {
  messagesByIds: {
    1: {
      id: 1,
      text: 'Привет, я бот из 1 чата',
      author: 'Bot',
    },
    2: {
      id: 2,
      text: 'Привет, я бот из 2 чата',
      author: 'Bot',
    },
    3: {
      id: 3,
      text: 'Привет, я бот из 3 чата',
      author: 'Bot',
    }
  },
  messagesIds: [1, 2, 3],
};

const reducer = handleActions(
  {
    [addNewMessage]: (state, { payload }) => ({
      messagesByIds: { ...state.messagesByIds, [payload.id]: payload },
      messagesIds: [...state.messagesIds, payload.id],
    }),
  },
  initialReducer,
);

export default reducer;
