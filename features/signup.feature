Feature: ParaBank User Registration and Login

  Scenario: Register a new user and login successfully

    Given I open the ParaBank application
    When I click on Register link
    And I enter valid registration details
    And I click on Register button
    Then the account should be created successfully
    When I logout from the application
    And I login with the newly created credentials
    Then I should see the Account Overview page
    And I should print the account balance