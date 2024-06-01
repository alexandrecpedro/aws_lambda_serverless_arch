# STAGE VARIABLES

## (A) CREATE A STAGE VARIABLE

- Access *API Gateway* Console
- Choose an API
- Choose *Stages*
- If you already have a stage where you want to define the stage variable, choose that stage
- If you don't have a stage yet, click on *Create Stage* and provide a name for the new stage
- Click on the 3 dots icon
- Choose *Edit Stage*
- Under *Stage Variables* section, click on *Add stage variable*
- Fill the blanks
- Click on *Save Changes*

## (B) SET STAGE VARIABLE TO A METHOD

- Go to *Resources*
- Choose a desired method from an specific resource
- Choose *Integration Request*
- Under *Lambda Function*, edit it to the following pattern: <function_name>:${stageVariables.<stageVariable_name>}
- Choose the check mark icon
- Copy the command shown
- Run the command from an IDE, using the terminal
<!-- Change the ${stageVariables.<stageVariable_name>} to the respective desired value -->
- Choose *OK*
- Deploy the API
