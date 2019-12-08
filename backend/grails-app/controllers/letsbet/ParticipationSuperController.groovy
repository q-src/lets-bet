package letsbet


import grails.rest.*

class ParticipationSuperController extends RestfulController<Participation> {

    def springSecurityService

    ParticipationSuperController(Class<Participation> domainClass) {
        this(domainClass, false)
    }

    ParticipationSuperController(Class<Participation> domainClass, boolean readOnly) {
        super(domainClass, readOnly)
    }

    @Override
    protected Participation createResource() {
        Participation participation = super.createResource() as Participation
        participation.participant = springSecurityService.currentUser
        participation
    }

    @Override
    protected List listAllResources(Map params) {
        return Participation.findAllByParticipant(springSecurityService.currentUser as User)
    }
}
