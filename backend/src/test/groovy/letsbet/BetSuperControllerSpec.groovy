package letsbet


import grails.testing.gorm.DomainUnitTest
import grails.testing.web.controllers.ControllerUnitTest
import spock.lang.Specification

class BetSuperControllerSpec extends Specification implements ControllerUnitTest<BetSuperController>, DomainUnitTest<Bet> {

    User userOne
    User userTwo
    def isOwner = true

    Closure doWithSpring() {
        { ->
            auth(AuthService)
        }
    }

    def setup() {
        userOne = new User(username: "user1", password: "{noop}password").save(flush: true)
        userTwo = new User(username: "user1", password: "{noop}password").save(flush: true)
        new Bet(title: "t-1", description: "d-1", rules: "r-1", commissioner: userOne, isStarted: false).save(flush: true)
        new Bet(title: "t-2", description: "d-2", rules: "r-2", commissioner: userTwo, isStarted: false).save(flush: true)

        controller.auth = Mock(AuthService) {
            isOwner(_) >> { Bet bet -> isOwner }
            getCurrentUser() >> userOne
        }
    }

    def cleanup() {
    }

    void "collection GET returns all bets having the current user as commissioner"() {
        when:
        controller.index()

        then:
        response.status == 200
        response.text == '[{"id":1,"title":"t-1","description":"d-1","rules":"r-1","commissioner":{"id":1,"username":"user1"},"isStarted":false}]'
        Bet.count() == 2
    }

    void "collection POST creates a new bet"() {
        when:
        request.method = 'POST'
        request.json = '{"title": "t-3", "description": "d-3", "rules": "r-3"}'
        controller.save()

        then:
        response.status == 201
        response.text == '{"id":3,"title":"t-3","description":"d-3","rules":"r-3","commissioner":{"id":1,"username":"user1"},"isStarted":false}'
        Bet.count() == 3
    }

    void "resource PUT updates bet"() {
        when:
        request.method = 'PUT'
        request.json = '{"title": "t-3", "description": "d-3", "rules": "r-3", "commissioner": {"id": 1}}'
        request.parameters = [id: '1']
        controller.update()

        then:
        response.status == 200
        response.text == '{"id":1,"title":"t-3","description":"d-3","rules":"r-3","commissioner":{"id":1,"username":"user1"},"isStarted":false}'
        Bet.count() == 2
    }

    void "resource PUT prevents bet update when current user is not owner"() {
        given:
        isOwner = false

        when:
        request.method = 'PUT'
        request.json = '{"title": "t-3", "description": "d-3", "rules": "r-3", "commissioner": {"id": 1}}'
        request.parameters = [id: '1']
        controller.update()

        then:
        response.status == 403
        Bet.count() == 2
    }

    void "resource GET returns bet"() {
        when:
        request.method = 'GET'
        request.parameters = [id: '1']
        controller.show()

        then:
        response.status == 200
        response.text == '{"id":1,"title":"t-1","description":"d-1","rules":"r-1","commissioner":{"id":1,"username":"user1"},"isStarted":false}'
        Bet.count() == 2
    }

    void "resource DELETE deletes bet"() {
        when:
        request.method = 'DELETE'
        request.parameters = [id: '1']
        controller.delete()

        then:
        response.status == 204
        Bet.count() == 1
    }
}