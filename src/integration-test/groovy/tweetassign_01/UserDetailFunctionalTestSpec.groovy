package tweetassign_01

import geb.spock.GebSpec
import grails.test.mixin.integration.Integration
import spock.lang.Ignore
import spock.lang.Shared

@Integration
/**
 * Created by nayna on 4/5/2016.
 */
class UserDetailFunctionalTestSpec extends GebSpec{



    def setup(){
        when:
        go'/'
        $("#login-form input[name=handle]").value("richelliot")
        $("#login-form input[name=password]").value("msse2016ASSIGN")
        $("#login").click()
        sleep(1000)


        then:
        $(".page-header").text() == "Greetings"
    }


      def 'U1: User’s detail page will display the user’s name as well as a scrollable list of that user’s postings'(){

          when:
          $("#details").click()

          then:
          $("#userDetails td")[0].text() == "Richard Elliot"
          //$("#userMsg td")[0].text() != ''

      }

    /*  def 'U2: User’s detail page will provide a way for the logged in user to follow the detail user'(){

          when:
          show all accounts
          //go(/details)

          then:
           //click a follow button located next to the user you want to follow
           (#follow).click()
          go(/details/username/toFollow/userTofollow)

      }

      def 'U3: When the logged in user is following the detail user, the detail page will display a message or icon indicating this'(){

          when:
          //go(/details/username/toFollow/userTofollow) with some input text

          then:
          //
          some alert or icon next to following user

      }

    def 'U4: When the logged in user goes to their own detail page, they can edit their name and email(){

        when:
        //go(/details/username) when on the user's detail page


        then:
        //(#editDetail).click //edit button clicked
        //updated name and email - will this be a post with the new information?

    }*/


}
