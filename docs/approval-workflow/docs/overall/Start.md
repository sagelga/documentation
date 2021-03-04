# Before you start
## Install the script
First thing you need to do is to install the script. The script will allows you to run the flow.
1. Go to [https://github.com/sagelga/approval-workflow](https://github.com/sagelga/approval-workflow)
    ![](/src/Screenshot 2021-03-04 180754.png)
2. Select "Clone" (noticeable by the bright green button)
3. Extract `.zip` file
4. In `src/`, there will be multiple `.js` file. 
5. For each file, do as following
    1. Open the file
    2. Copy all of its content
    3. Paste it to the Google Apps Script console.
6. Make sure you copy all of the files inside of `src/`.
7. Done.

## Start the script
Here's some options you can run the script 

### Manually via UI
1. Open the `sheet`
![](docs/approval-workflow/docs/overall/src/firefox_rqrWTbHsaN.png)
2. In tool bar, select `Approval Addons`
3. Click on `Run` to start the script.
![](docs/approval-workflow/docs/overall/src/firefox_sNaRKZXHbL.png)

::: tip MISSING SOMETHING?
If you did not see `Approval Addons`, it might means you improperly install the script.
:::

### Automatically via Timer 
Running the script manually is too hard work for you. We recommended you to set the triggers and let Google do it's job. 
1. Go to the Script editing page, click Edit > Current project's triggers
    ![](docs/approval-workflow/docs/overall/src/script-edit.png)
2. Click Add Trigger
    ![](docs/approval-workflow/docs/overall/src/developer-hub-triggers.png)
3. Edit Trigger parameters 
    - In "Choose which function to run" Select `approveProcess`
    - In "Select event source", specify when or how you want to start the script.
        - Time-based (e.g. Hourly, Daily)
        - Event-based (e.g. After new Form sent)
    - and for other parameter, you can leave it as is.
4. After you done configuring, press "Save" 
    
::: tip
We recommend you to read Google Documentations on what each options differs on
:::
