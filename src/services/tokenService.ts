import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../models/models';

const TOKEN_KEY = "AuthToken";

@Injectable({providedIn: 'root'})
export class TokenService {
    constructor(private router: Router) { }

    public setToken(token: Credentials) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    }

    public getToken(): Credentials {
        var t = sessionStorage.getItem(TOKEN_KEY);
        if (t) { return JSON.parse(t); }
        return {Email: "", Password: "", ID: "", Nickname: "",};
    }

    public isLogged(): boolean {
        if (this.getToken()) {
        return true;
        }
        return false;
    }

    public logout() {
        window.sessionStorage.clear();
        this.router.navigate(["/login"]);
    }

    public getUserNickname(): string {
        var token: Credentials = this.getToken();
        return token.Nickname;
    }

    public getUseID(): string {
        var token: Credentials = this.getToken();
        return token.ID;
    }
}