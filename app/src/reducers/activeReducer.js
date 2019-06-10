/**
 * Created by Aram on 10.06.2019.
 */
export default function(state= null, action){
    switch (action.type) {
        case "Repo_Selected": return action.payload;
            break;
    }
    return state;
}