import {MiddlewareSequence, RequestContext} from '@loopback/rest';
import {AuthenticationService} from "./services/authentication.service";
import {log} from 'console';
import {AUTHENTICATION_SERVICE, UserServiceBindings} from "./keys";

export class MySequence extends MiddlewareSequence {
    async handle(context: RequestContext){
        await this.processAccessToken(context)
        await super.handle(context)
    }

    async processAccessToken(context:RequestContext){
        const token = context.request.headers.authorization;
        if (token)
        {
            const authService = await context.get<AuthenticationService>(AUTHENTICATION_SERVICE)
            const user = await authService.getUserProfile(token)
            context.bind(UserServiceBindings.USER).to(user)
        }
    }
}
