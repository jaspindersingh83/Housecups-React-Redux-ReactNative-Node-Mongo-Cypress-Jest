import Socket from 'socket.io-client';

const socket = Socket('https://housecups-backend.herokuapp.com');

export default socket;
