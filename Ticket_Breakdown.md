# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
- Ticket #1
 * Title: Add custom id to Agents table
 * Description: Add a new column to the Agents table called custom_id.
 * Acceptance Criteria:
  ** A new migration should be created using (ORM) to add new column to Agents table
  ** The new column should be named custom_id
  ** The new column should be a string
  ** The new column should be unique
  ** The new column should be nullable
 * Estimated Time: 2-3 hours
 * Testing details:
  ** Make sure that the new column is added to the Agents table locally

- Ticket #2
 * Title: Use custom id instead of internal id in reports
 * Description: We want to use the custom_id field of the Agent instead of the internal id when generating the reports.
 * Acceptance Criteria:
  ** The Agent metadata should display the custom_id field instead of the internal id
  ** If the Agent doesn't have a custom_id, the internal id should be displayed
 * Estimated Time: 4-5 hours
 * Testing details:
  ** Use a report with both Agents with custom_id and Agents without custom_id
  ** Create at least 3 unit tests to test the new functionality
  ** One should be testing only Agents with custom_id
  ** One should be testing only Agents without custom_id
  ** One should be testing both Agents with and without custom_id 