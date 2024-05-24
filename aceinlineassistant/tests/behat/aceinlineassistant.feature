@editor @editor_atto @atto @atto_aceinlineassistant
Feature: Atto aceinlineassistant button
  To format text in Atto, I need to add symbols

  @javascript
  Scenario: Insert code
    Given I log in as "admin"
    And I open my course in edit mode
    And I add Activity
    And I add a text area
    When I click on "Show more buttons" "button"
    And I click on "Ace Inline Assistant" "button"
    And I press ace-interactive-code
    Then I should see an interactive code
