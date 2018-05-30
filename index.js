var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "NDQ3NDU3MTU4NjE2MDU1ODA4.DeH2fg.buW9mjs8wkthmJnB-CWn5ZOAnwU",
    autorun: true
});

//Discord.Colors = {
//    DEFAULT: 0,
//    AQUA: 1752220,
//    GREEN: 3066993,
//    BLUE: 3447003,
//    PURPLE: 10181046,
//    GOLD: 15844367,
//    ORANGE: 15105570,
//    RED: 15158332,
//    GREY: 9807270,
//    DARKER_GREY: 8359053,
//    NAVY: 3426654,
//    DARK_AQUA: 1146986,    
//    DARK_GREEN: 2067276,
//    DARK_BLUE: 2123412,
//    DARK_PURPLE: 7419530,
//    DARK_GOLD: 12745742,
//    DARK_ORANGE: 11027200,
//    DARK_RED: 10038562,
//    DARK_GREY: 9936031,
//    LIGHT_GREY: 12370112,
//    DARK_NAVY: 2899536

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
    bot.setPresence({
        game: {
        name: "o pinto no ninja",
        type: 1,
        }
    });
});

bot.deleteMessage({
	channelID: "442838504519499780",
    messageID: "445393238774513666",
});
bot.on("message", function(user, userID, channelID, message, event) {
    if (message.startsWith("/kick")) {
      let matches = /\/kick (<.+>) (.+)/.exec(message)
      if (matches) {
            bot.kick({
              serverID: '442838504519499776',
              userID: event.d.mentions[0].id,
            })
            bot.sendMessage({
              to: channelID,
              message: "<@" + userID + ">, o membro foi **kickado** com sucesso!"
            })
            setTimeout(() => {
              bot.deleteMessage({
                channelID: channelID,
                messageID: event.d.id,
              })
            }, 1000)
            let member = bot.servers[bot.channels[channelID].guild_id].members[event.d.mentions[0].id];
            bot.sendMessage({
              to: "446495398182256650",
              embed: {
                color: 1752220,
                description: "**• Comando por:** <@" + userID + ">" + "\n**• Comando:** /kick" + "\n**• Player kickado**: " + member.username + "\n**• Motivo:** " + matches[2]
              },
            })
          }
        }
       })

       bot.on("guildMemberAdd", function(member, user, userID, channelID, message, event) {
        var avatar = "http://cdn.discordapp.com/avatars/" + userID + "/" + bot.users[userID].avatar;
           bot.sendMessage({
               to:'446495398182256650',
               embed: {
                   description: "Olá <@" + member.id +">, seja bem-vindo ao World Ninja!" + "\nMeu patrão: https://twitter.com/ninjablessed" + "\nMeu desenvolvedor: https://twitter.com/Joaoowsz", 
                   color: 3066993,
                    "icon_url": avatar,
                   },
                })
    });

bot.on("message", function(user, userID, channelID, message, event) {
    if(message.startsWith("/anunciar")) {
      bot.sendMessage({
        to:"446481883346501652",
        message: "@everyone",
      })
        var avatar = "http://cdn.discordapp.com/avatars/" + userID + "/" + bot.users[userID].avatar;

        bot.sendMessage ({
            to:"446481883346501652",
            "embed": {
              "color":15105570,
              "url": "https://discordapp.com",
              "timestamp": new Date().toISOString(),
              "footer": {
                "icon_url": avatar,
                "text": "Enviado por: " + user
              },
              "fields": [
                {
                  "name": "📢 Anúncio",
                  "value": message.slice(10)
                }
              ]
            }
          })

            bot.deleteMessage({
                channelID: channelID,
                messageID: event.d.id,
              })
        }
    })     

    bot.on("message", function(user, userID, channelID, message, event) {
      if(message.startsWith("/status")) {
        bot.sendMessage({
          to:"451375466885021706",
          message: "",
        })
  
          bot.sendMessage ({
              "embed": {
                "color":15105570,
                "url": "https://discordapp.com",
                "footer": {
                  "icon_url": "https://cdn.discordapp.com/attachments/451375466885021706/451386682034487296/download.png",
                  "text": ""
                },
                "thumbnail": {
                  "url": "https://cdn.discordapp.com/attachments/391962691536814090/397121204084801536/92.png"
                },
                "author": {
                  "name": "World Ninja",
                  "icon_url": "https://cdn.discordapp.com/attachments/451375466885021706/451386682034487296/download.png"
                },
                "fields": [
                  {
                    "name": "💻 ID",
                    "value": "446476615053213697",
                    "inline": true
                  },
                  {
                     "name": "👑 Dono do servidor",
                  "value": "<@227809283239182336>",
                  "inline": true
                },
                {
                  "name": "⚙ Bots",
               "value": "2",
               "inline": true
             },
             {
               "name": "📅 Criação do servidor",
            "value": "17 de Maio, 2018 às 21:58",
            "inline": true
          }
                ]
              }
            })
  
              bot.deleteMessage({
                  channelID: channelID,
                  messageID: event.d.id,
                })
          }
      })