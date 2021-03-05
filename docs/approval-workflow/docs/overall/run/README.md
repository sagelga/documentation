---
sidebar: auto
prev: ../start/
---
# How the script runs
## Approval Status
For each of the approval request, it will only contains one of the four status listed below

1. Approved - Approver approves that form, concludes that the form should be elevated to next step
2. Rejected - Approver rejects that form, concludes that the form is rejected
3. Waiting - System is still waiting for the response. Timer of idle time is recorded.
4. Skipped -

Request will be queued to be processed only when they are still considered as active. For requests that have been approved, rejected or marked as skip will be skipped.

### Edit the status
Edits with the status is possible, but please make sure that the status is in a valid format by different method defined below:

#### Edit status manually
Works with all status type
1. Go to the response row that you want to override
2. Go to the 'current step' of approval (marked with 'Waiting') or any step that will not get skipped. For more information about response status, please visit the link below.
3. Edit the status of that cell to any valid status value
4. Starts or wait for script to run
Make sure that you are typing in the correct format of approval status. If the status is incorrect, it will fallback and tries to roll back to the previous status.
