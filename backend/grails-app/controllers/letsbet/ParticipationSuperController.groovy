package letsbet


import grails.rest.*
import grails.converters.*
import org.springframework.web.bind.annotation.RequestMapping

class ParticipationSuperController extends RestfulController {

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
        participation.user = springSecurityService.currentUser
        participation
    }
}
