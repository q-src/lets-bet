package letsbet

import grails.plugin.springsecurity.SpringSecurityService
import groovy.transform.CompileStatic

@CompileStatic
class AuthService {

    SpringSecurityService springSecurityService

    User getCurrentUser() {
        springSecurityService.currentUser as User
    }

    def isOwner(Bet bet) {
        bet.getPersistentValue('commissioner') == getCurrentUser()
    }
}
