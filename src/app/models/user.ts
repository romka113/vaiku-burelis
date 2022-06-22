export class User {
  public loginTime: number = new Date().getTime();
  constructor(
    public idToken: string,
    public email: string,
    public refreshToken: string,
    public expiresIn: number,
    public localId: string,
    loginTime?: number
  ) {
    if (loginTime != null) {
      this.loginTime = loginTime;
    }
  }

  public isExpired(): boolean {
    return new Date().getTime() > this.loginTime + this.expiresIn * 1000;
  }
  public static generateUser(user: User, loginTime?: number): User {
    return new User(
      user.idToken,
      user.email,
      user.refreshToken,
      user.expiresIn,
      user.localId,
      loginTime == null ? new Date().getTime() : loginTime
    );
  }
}
