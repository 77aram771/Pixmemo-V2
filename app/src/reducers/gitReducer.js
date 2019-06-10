/**
 * Created by Aram on 10.06.2019.
 */
var gitRepos = [];
export default function (state = gitRepos, action) {
    switch (action.type) {
        case "Get_Repos": {
            gitRepos = action.payload;
            console.log(action, 'action');
            return gitRepos;
        }
            break;
    }
    return gitRepos;
}