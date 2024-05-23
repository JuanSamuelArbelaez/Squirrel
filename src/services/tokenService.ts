import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../models/models';
import { isPlatformBrowser } from '@angular/common';

const TOKEN_KEY = "AuthToken";

@Injectable({ providedIn: 'root' })
export class TokenService {
    [x: string]: any;
    private localStorage: Storage | null = null;

    constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
        if (isPlatformBrowser(this.platformId)) {
            this.localStorage = localStorage;
        }
    }

    public setToken(token: Credentials) {
        if (this.localStorage) {
            this.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
        }
    }

    public getToken(): Credentials {
        if (this.localStorage) {
            const t = this.localStorage.getItem(TOKEN_KEY);
            return t ? JSON.parse(t) : { Email: "", Password: "", ID: "", Nickname: "" };
        }
        return { Email: "", Password: "", ID: "", Nickname: "" };
    }

    public isLogged(): boolean {
        return !!this.getToken();
    }

    public logout() {
        if (this.localStorage) {
            this.localStorage.removeItem(TOKEN_KEY);
            this.router.navigate(["/login"]);
        }
    }

    public getUserNickname(): string {
        const token: Credentials = this.getToken();
        return token.Nickname;
    }

    public getUserID(): string {
        const token: Credentials = this.getToken();
        return token.ID;
    }
}
