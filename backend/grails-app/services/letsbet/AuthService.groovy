package letsbet

import grails.plugin.springsecurity.SpringSecurityService
import groovy.transform.CompileStatic

@CompileStatic
class AuthService {

    SpringSecurityService springSecurityService

    User getCurrentUser() {
        springSecurityService.currentUser as User
    }

    boolean isOwner(Bet bet) {
        if (null == bet) {
            return false
        }
        bet.getPersistentValue('commissioner') == getCurrentUser()
    }

    boolean isOwner(Participation participation) {
        if (null == participation) {
            return false
        }
        participation.getPersistentValue('participant') == getCurrentUser()
    }
}
