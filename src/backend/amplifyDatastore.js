import { DataStore } from "aws-amplify";
import { Todo } from "./models";

const create = async () => {
    const result = await  DataStore.save(
        new Todo({
        name: "My first todo",
        description: "Hello world!",
        })
        
    );
    console.log(result);
    };

create();

