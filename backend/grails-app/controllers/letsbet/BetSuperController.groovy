package letsbet


import grails.rest.RestfulController

class BetSuperController extends RestfulController<Bet> {

    def springSecurityService

    BetSuperController(Class<Bet> domainClass) {
        this(domainClass, false)
    }

    BetSuperController(Class<Bet> domainClass, boolean readOnly) {
        super(domainClass, readOnly)
    }

    @Override
    protected Bet createResource() {
        Bet bet = super.createResource() as Bet
        bet.commissioner = springSecurityService.currentUser
        bet.isStarted = false
        bet
    }
}