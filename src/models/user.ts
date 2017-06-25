/**
 * Created by ydeng on 6/23/17.
 */

// User model for GirHub user API
// https://api.github.com/users/{username}

export interface User {

  login: string;
  avatar_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;

}
