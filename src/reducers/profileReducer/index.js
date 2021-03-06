import { handleAction } from 'redux-actions';

const initialStore = {
  name: 'Andrey',
  lastName: 'Martynov',
};

const reducer = handleAction('', store => store, initialStore);

export default reducer;

export const getProfileFromStore = store => store.profile;
