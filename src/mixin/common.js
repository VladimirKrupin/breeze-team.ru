import settings from "../config/settings";
import env from "../config/env";
let appSettings = settings.get(env.get());

export default {
    get: function(){
        return {
            data: function () {
                return {
                    apiHost: appSettings.apiHost,
                    frontHost: appSettings.frontHost,
                    socials: {
                        'git':'https://github.com/VladimirKrupin/breeze-team.ru',
                        'vk':'https://vk.com/?id=244842255',
                        'fb':'https://www.facebook.com/profile.php?id=100021975798495',
                        'inst':'https://www.instagram.com/vladimir_togliatti/',
                        'tw':'https://twitter.com/Vladimir_Krpn',
                        'coders_link':'https://breeze-team.com',
                        'about_us':'https://vk.com/?id=244842255',
                        'news':'https://vk.com/?id=244842255',
                        'mit':'https://github.com/VladimirKrupin/breeze-team.ru/blob/master/LICENSE',
                        'skill':'https://skill-tracking.com',
                    },
                    defaultHeaders: {
                        'Lang':localStorage.getItem('lang'),
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                    }
                }
            },
            methods: {
                langHandler: function (lang){
                    this.$store.dispatch('profile/changeLang',{lang:lang});
                    this.$store.dispatch('profile/setDbLang',{lang:lang});
                },
            }
        }
    }
}