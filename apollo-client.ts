import { ApolloClient,InMemoryCache } from "@apollo/client";
export const getClient=()=>{
    const client = new ApolloClient({
        uri:"http://localhost:5001/api/melting-camel",
        cache: new InMemoryCache(),
        headers:{
            Authorization: `apikey sanesteban::stepzen.net+1000::6e8f9b28a144736cce970770050ba8069b1df0d55b9342ffca2d68f6f4e8d50b`,
        }
    });
    return client;
};
