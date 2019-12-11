package letsbet


import org.springframework.security.access.annotation.Secured

class UserController {

    def springSecurityService

    @Secured('permitAll')
    User save(User resource) {
        new User(
                username: resource.username,
                password: springSecurityService.encodePassword(resource.password)
        ).save()
    }
}