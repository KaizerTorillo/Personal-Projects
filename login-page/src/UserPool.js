import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData  = {
    UserPoolId: "us-east-1_BMOSxaECH",
    ClientId:"26t18756rg21iclkgl5q1v9gr5"
}

export default new CognitoUserPool(poolData);