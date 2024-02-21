import VariablesAndConstants
  from "./variables/VariablesAndConstants";
  import VariableTypes
  from "./variables/VariableTypes";
  import BooleanVariables
  from "./variables/BooleanVariables";
  import IfElse
  from "./conditionals/IfElse";
  import TernaryOperator
  from "./conditionals/TernaryOperator";
  import ES5Functions 
  from "./functions/ES5Functions";
  import ArrowFunctions
  from "./functions/ArrowFunctions";
  import ImpliedReturn
  from "./functions/ImpliedReturn";
  import FunctionParanthesisAndParameters
  from "./functions/FunctionParenthesisAndParameters";
  import WorkingWithArrays
  from "./arrays/WorkingWithArrays";
  
  import JsonStringify from "./json/JsonStringify";
   import TemplateLiterals from "./string/TemplateLiterals";
   import House from "./json/House";
   import Spreading from "./json/Spreading";
   import Destructing from "./json/Destructing";
   import FunctionDestructing from "./json/FunctionDestructing";
function JavaScript() {
    console.log('Hello World!');

    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <IfElse/>
         <TernaryOperator/>
         <ES5Functions/>
         <ArrowFunctions/>
         <ImpliedReturn/>
         <FunctionParanthesisAndParameters/>
         <WorkingWithArrays/>
         <JsonStringify/>
         <TemplateLiterals/>
         <House/>
         <Spreading/>
         <Destructing/>
         <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript
 
 