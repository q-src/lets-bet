package letsparticipation


import grails.testing.gorm.DomainUnitTest
import grails.testing.web.controllers.ControllerUnitTest
import letsbet.*
import spock.lang.Specification

class ParticipationSuperControllerSpec extends Specification implements ControllerUnitTest<ParticipationSuperController>, DomainUnitTest<Participation> {

    User userOne
    User userTwo
    Bet bet
    def isOwner = true

    Closure doWithSpring() {
        { ->
            auth(AuthService)
        }
    }

    def setup() {
        userOne = new User(username: "user1", password: "{noop}password").save(flush: true)
        userTwo = new User(username: "user1", password: "{noop}password").save(flush: true)
        bet = new Bet(title: "t-1", description: "d-1", rules: "r-1", commissioner: userOne, isStarted: true).save(flush: true)
        def p = new Participation(bet: bet, participant: userOne, statement: 's-1')
        p.save(flush: true)
        new Participation(bet: bet, participant: userTwo, statement: 's-2').save(flush: true)

        controller.auth = Mock(AuthService) {
            isOwner(_) >> { Participation participation -> isOwner }
            getCurrentUser() >> userOne
        }
    }

    def cleanup() {
    }

    void "collection GET returns all participations of the current user"() {
        when:
        controller.index()

        then:
        response.status == 200
        response.text == '[{"id":1,"statement":"s-1","participant":{"id":1,"username":"user1"},"bet":{"id":1,"title":"t-1","description":"d-1","commissioner":{"id":1,"username":"user1"}}}]'
        Participation.count() == 2
    }

    void "collection POST creates a new participation"() {
        when:
        request.method = 'POST'
        request.json = '{"statement": "s-3", "bet": {"id": 1}}'
        controller.save()

        then:
        response.status == 201
        response.text == '{"id":3,"statement":"s-3","participant":{"id":1,"username":"user1"},"bet":{"id":1,"title":"t-1","description":"d-1","commissioner":{"id":1,"username":"user1"}}}'
        Participation.count() == 3
    }

    void "resource PUT updates participation"() {
        when:
        request.method = 'PUT'
        request.json = '{"title": "t-3", "description": "d-3", "rules": "r-3", "commissioner": {"id": 1}}'
        request.parameters = [id: '1']
        controller.update()

        then:
        response.status == 200
        response.text == '{"id":1,"statement":"s-1","participant":{"id":1,"username":"user1"},"bet":{"id":1,"title":"t-1","description":"d-1","commissioner":{"id":1,"username":"user1"}}}'
        Participation.count() == 2
    }

    void "resource GET returns participation"() {
        when:
        request.method = 'GET'
        request.parameters = [id: '1']
        controller.show()

        then:
        response.status == 200
        response.text == '{"id":1,"statement":"s-1","participant":{"id":1,"username":"user1"},"bet":{"id":1,"title":"t-1","description":"d-1","commissioner":{"id":1,"username":"user1"}}}'
        Participation.count() == 2
    }

    void "resource DELETE deletes participation"() {
        when:
        request.method = 'DELETE'
        request.parameters = [id: '1']
        controller.delete()

        then:
        response.status == 204
        Participation.count() == 1
    }
}