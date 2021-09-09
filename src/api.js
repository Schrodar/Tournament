

const base_url = 'http://swecupapi.azurewebsites.net/';

export const cupsURL = () => `${base_url}Tournament`







const url = 'http://localhost:3009'

export const add_users = () => `${url}/users`;

export const add_team =  () => `${url}/team`;

export const profile_pic = () =>`${url}/user/me/avatar`;

export const tournament_pic = (id) => `${url}/tournament/img/${id}`;

export const team_pic = (id) => `${url}/team/img/${id}`;

export const user_login = () => `${url}/users/login`;

export const add_tournament = () => `${url}/tournament`;

export const user_logout = () => `${url}/users/logout`;

export const user_allpc_logout = () => `${url}/users/logoutAll`;

export const get_all_users = () => `${url}/users`;

export const get_user_profile = () => `${url}/user/me`;

export const all_tournaments = () => `${url}/tournament`;

export const get_tournament = (id) => `${url}/tournament/${id}`;

export const add_team_member = (id) => `${url}/team/${id}`;

export const uppdate_user = () => `${url}/users/change`

export const set_tournament_compleat = (id) =>  `${url}/tournament/iscompleat/${id}`;

export const tournament_teams_array = (id) => `${url}/tournament/${id}`;

export const set_team_activity = (id) => `${url}/team/active/${id}`;

export const delete_tournament = (id) => `${url}/tournament/${id}`;

export const delete_team = (id) => `${url}/team/${id}`;

export const delete_user = (id) => `${url}/users/${id}`;

export const delete_user_pic = () => `${url}/user/avatar/delete`;

export const delete_tournament_img = (id) => `${url}/tournament/deleteimg/${id}`;

export const delete_team_img = (id) => `${url}/team/deleteimg/${id}`;

