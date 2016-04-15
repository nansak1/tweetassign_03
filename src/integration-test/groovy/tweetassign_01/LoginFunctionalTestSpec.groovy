package tweetassign_01

import geb.spock.GebSpec
import grails.test.mixin.integration.Integration
import spock.lang.Ignore

@Integration

class LoginFunctionalTestSpec extends GebSpec{

    def setup(){

    }

    def 'L1: When not logged in, route user to the login screen '(){
        when:
        go'/'
        then:
        $(".page-header").text() == "Login"
    }

   def 'L2: Login screen allows a user to enter username and password to gain access '(){
        when:
        go '/'
        $("#login-form input[name=handle]").value("richelliot")
        $("#login-form input[name=password]").value("msse2016ASSIGN")
        $("#login").click()
        sleep(2000)
        then:
        $(".page-header").text() == "Greetings!!"
    }

   def 'L3: Invalid login will be rejected with an error message'(){
        when:
        go '/'
        $("#login-form input[name=handle]").value("blue")
        $("#login-form input[name=password]").value("msse2016ASSIGN")
        $("#login").click()

        sleep(2000)
        then:
        $(".page-header").text() == "Login"
        $('p').text() == "Invalid Login"
    }
}
