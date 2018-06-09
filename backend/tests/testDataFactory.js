exports.UserDataFactory = class UserDataFactory {
  static get validNewUser() {
    return {
      username: 'testuserjaspinder',
      email: 'test@example.com',
      password: 'testuserpassword',
      confirmPassword: 'testuserpassword',
    };
  }

  static get validNewUser2() {
    return {
      username: 'testuser123',
      email: 'test123@example.com',
      password: 'testuserpassword123',
      confirmPassword: 'testuserpassword123',
    };
  }
  static get newUserWithBadUsernameLength() {
    return { ...this.validNewUser, username: 'bad' };
  }
  static get newUserWithBadEmail() {
    return { ...this.validNewUser, email: 'bademail' };
  }
  static get newUserWithBadPasswordLength() {
    return { ...this.validNewUser, password: 'abc', confirmPassword: 'abc' };
  }
  static get newUserWithBadConfirmPassword() {
    return { ...this.validNewUser, confirmPassword: 'abc' };
  }
  static get newUserWithAlreadyTakenUserName() {
    return { ...this.validNewUser, email: 'test123@example.com' };
  }
  static get newUserWithAlreadyTakenEmail() {
    return { ...this.validNewUser,x username: 'testuserjaspinder123' };
  }
};
