import {AuthorizationContext, AuthorizationDecision, AuthorizationMetadata, Authorizer} from '@loopback/authorization';
import {inject, Provider} from '@loopback/core';
import {repository} from '@loopback/repository';
import {UserServiceBindings} from '../keys';
import {RolesRepository, UsersRepository} from '../repositories';
import {Roles, UserRolesRelations, UserRolesWithRelations, Users, UsersRelations} from '../models';
import {RoleNames} from './user.service';

export class MyAuthorizationProvider implements Provider<Authorizer> {
    constructor(
        @repository(UsersRepository)
        public userRepository: UsersRepository,
        @repository(RolesRepository)
        public roleRepository: RolesRepository,
    ) {}

    value(): Authorizer {
        return this.authorize.bind(this);
    }

    @inject(UserServiceBindings.USER) contextUser: Users;
    async authorize(
        authorizationCtx: AuthorizationContext,
        metadata: AuthorizationMetadata,
    ) {
        const user = (await this.userRepository.findOne({
            where: {keycloak_uid: this.contextUser.keycloak_uid},
            include: [{relation: 'userRoles', scope: {
                include: [{relation: 'roles'}]
                }}],
        }));
        if (!user)
            throw new Error('User not found')

         const userRoles = user.userRoles as UserRolesWithRelations[]

         if (userRoles[0].roles.roleName === RoleNames.ADMIN) {
             return AuthorizationDecision.ALLOW;
         }

        if (!user.userRoles) throw new Error('User has not any role')

        const {allowedRoles, deniedRoles} = metadata;

        const roles = await this.getPermissionList(user);

        let permissions: string[] = [];

        for (const role of roles) {
            if (role.permissions)
                permissions = [
                    ...new Set([
                        ...permissions,
                        ...role.permissions.map(
                            permission => permission.permissionName,
                        ),
                    ]),
                ];
        }

        if (deniedRoles) {
            for (const role of roles) {
                if (deniedRoles.includes(role.roleName)) {
                    return AuthorizationDecision.DENY;
                }
            }
        }

        if (allowedRoles) {
            for (const allowedRole of allowedRoles) {
                if (permissions.includes(allowedRole))
                    return AuthorizationDecision.ALLOW;
            }
        }

        return AuthorizationDecision.DENY;
    }

    async getPermissionList(user: Users & UsersRelations) {
        const roles = await this.roleRepository.find({
            include: [{relation: 'permissions'}],
            where: {id: {inq: user.userRoles?.map(item => item.roleId)}},
        });

        if (!roles)
            throw new Error('Roles not found');

        return roles;
    }
}