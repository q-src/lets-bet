package letsbet

import grails.rest.RestfulController
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.access.AccessDeniedException

import javax.transaction.Transactional

import static org.springframework.http.HttpStatus.FORBIDDEN

@Transactional
class BetSuperController extends RestfulController<Bet> {

    @Autowired
    AuthService auth

    BetSuperController() {
        this(Bet)
    }

    BetSuperController(Class<Bet> domainClass) {
        this(domainClass, false)
    }

    BetSuperController(Class<Bet> domainClass, boolean readOnly) {
        super(domainClass, readOnly)
    }

    @Override
    protected Bet createResource() {
        Bet bet = super.createResource() as Bet
        bet.commissioner = auth.getCurrentUser()
        bet.isStarted = false
        bet
    }

    @Override
    protected List<Bet> listAllResources(Map params) {
        Bet.findAllByCommissioner(auth.getCurrentUser())
    }

    @Override
    protected Bet updateResource(Bet resource) {
        if (!auth.isOwner(resource)) {
            throw new AccessDeniedException("Bets can only be updated by the corresponding commissioner.")
        }
        return super.updateResource(resource) as Bet
    }

    @Override
    Object update() {
        try {
            return super.update()
        } catch (AccessDeniedException e) {
            respond resource, [status: FORBIDDEN]
        }
    }
}