package letsbet


import grails.rest.*
import org.springframework.beans.factory.annotation.Autowired

class ParticipationSuperController extends RestfulController<Participation> {

    @Autowired
    AuthService auth

    ParticipationSuperController() {
        this(Participation)
    }

    ParticipationSuperController(Class<Participation> domainClass) {
        this(domainClass, false)
    }

    ParticipationSuperController(Class<Participation> domainClass, boolean readOnly) {
        super(domainClass, readOnly)
    }

    @Override
    protected Participation createResource() {
        Participation participation = super.createResource() as Participation
        participation.participant = auth.getCurrentUser()
        participation
    }

    @Override
    protected List listAllResources(Map params) {
        Participation.findAllByParticipant(auth.getCurrentUser())
    }

    @Override
    protected Participation queryForResource(Serializable id) {
        def resource = super.queryForResource(id) as Participation
        if (!auth.isOwner(resource)) {
            return
        }
        resource
    }
}
