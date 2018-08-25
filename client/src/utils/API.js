import axios from 'axios';

export default {
    getUsers: function() {
        return axios.get('/api/users');
    },
    getUsers: function() {
        return axios.get('/api/users/' + id );
    },
    deleteUsers: function(id) {
        return axios.delete('/api/users' + id );
    },
    saveUsers: function(usersData) {
        return axios.post("/api/user", usersData);
    }
};