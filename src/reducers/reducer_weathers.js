export default function (state = null, action) {
  switch(action.type) {
    case 'CHANGE_WEATHER':
      return action.payload;
    default:
      return 'blah blah';
  }
}
