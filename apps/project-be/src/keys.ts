// src/keys.ts

import {BindingKey} from "@loopback/core";
import {AuthenticationService} from "./services/authentication.service";
import {Users} from './models';

export namespace UserServiceBindings {
    export const USER = BindingKey.create<Users | undefined>(
        'services.user.token'
    )
    // Define other binding keys if needed
}
export const AUTHENTICATION_SERVICE = BindingKey.create<AuthenticationService>(
    'services.authentication'
)
