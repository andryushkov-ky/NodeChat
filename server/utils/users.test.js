const expect = require('expect');

const {Users} = require('./users');

describe('User', () => {
    let users;

    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: '1',
            name: 'Rob',
            room: 'Office'
        }, {
            id: '2',
            name: 'Nat',
            room: 'React'
        }, {
            id: '3',
            name: 'Set',
            room: 'Office'
        }]
    });

    it('should add new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            name: 'Rob',
            room: 'The Office'
        };
        const resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names users in room Office', () => {
        const userList = users.getUserList('Office');

        expect(userList).toEqual(['Rob', 'Set']);
    });

    it('should return names users in room React', () => {
        const userList = users.getUserList('React');

        expect(userList).toEqual(['Nat']);
    });

    it('should remove a user', () => {
        const userId = '1';
        const user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        const userId = '99';
        const user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        const userId = '2';
        const user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        const userId = '21';
        const user = users.getUser(userId);

        expect(user).toNotExist();
    });
})