package letsbet

class BootStrap {

    def init = { servletContext ->
        new User(username: "user1", password: "{noop}password").save()
    }
    def destroy = {
    }
}
