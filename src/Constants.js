import Discord from "discord.js";

export const DISCORD_API_ROOT_URL = "https://discord.com/api"
export const DISCORD_API_TOKEN = "ODUzMzM4NjYyODc1NTYyMDU1.YMT7jw.oQUH9TQl7leq_wgVqt4o7iuUZLo"
export const CQR_GITHUB_REPOSITORY_URL = "https://github.com/TeamChocoQuest/ChocolateQuestRepoured"

export function TOKEN_HEADER() {
    var headers = new Headers();
    headers.append('Authorization', 'Bot ' + DISCORD_API_TOKEN);
    headers.append('access-control-allow-origin', '*');

    return headers;
}

export function generateUserAvatarURL(userID, avatarHash) {
    let url = "https://cdn.discordapp.com/avatars/";
    url += userID + "/" + avatarHash + ".webp";

    return url;
}
