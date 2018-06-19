var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "NDU3OTA1NzExMjg4OTQyNjAy.Dgf5pw.yERb5jAqVl_WAPThuqVqi1ZmEUg",
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
//    DARK_GREEN: 2067276,a
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
        name: "Siga: @Joaoowsz",
        type: 1,
        }
    });
});

bot.on("message", function(user, userID, channelID, message, event) {
  if (bot.servers[bot.channels[channelID].guild_id].members[userID].roles.includes("434854904771772427","432707857884905477")) {
  if(message.startsWith("/anunciar")) {
      var avatar = "http://cdn.discordapp.com/avatars/" + userID + "/" + bot.users[userID].avatar;
      bot.sendMessage({
        to: channelID,
        message: "@everyone"
      })
      bot.sendMessage({
          to: channelID,
              "embed": {
                "color": 1752220,
                "timestamp": new Date().toISOString(),
                "footer": {
                  "icon_url": avatar,
                  "text": "Atenciosamente, " + user
                },
                "fields": [
                  {
                    "name": "📢 Atenção:",
                    "value": message.slice(10)
                  }
                ]
              }
          })
        }

          bot.deleteMessage({
              channelID: channelID,
              messageID: event.d.id,
            })
      }
  })

  bot.on("guildMemberAdd", function(member, user, userID, channelID, message, event) {
    bot.sendMessage({
        to: '386940261797986307',
        embed: {
            description: "Olá <@" + member.id +">, seja bem-vindo á Comunidade de Designer!" + "\nDesenvolvedor do Bot: https://twitter.com/Joaoowsz", 
            color: 10181046,
             "icon_url": "https://cdn.discordapp.com/attachments/458045910383853569/458374239968296963/ee15ee2204940b811508b13eac92068d.jpg",
             "text": "Divirta-se! 😉",
            },
         })
});

bot.on("message", function(user, userID, channelID, message, event) {
  if (bot.servers[bot.channels[channelID].guild_id].members[userID].roles.includes("&227809283239182336","&432707857884905477")) {
  if (message.startsWith("/kick")) {
    let matches = /\/kick (<.+>) (.+)/.exec(message)
    if (matches) {
          bot.kick({
            serverID: '386933605269635082',
            userID: event.d.mentions[0].id,
          })
          bot.sendMessage({
            to: channelID,
            message: "<@" + userID + ">, o membro foi **punido** com sucesso!"
          })
          setTimeout(() => {
            bot.deleteMessage({
              channelID: channelID,
              messageID: event.d.id,
            })
          }, 1000)
          let member = bot.servers[bot.channels[channelID].guild_id].members[event.d.mentions[0].id];
          bot.sendMessage({
            to: "397355418214465536",
            embed: {
              color: 15158332,
              description: "**• Punido por:** <@" + userID + ">" + "\n**• Punição:** /kick" + "\n**• Membro punido**: " + member.username + "\n**• Motivo:** " + matches[2]
            },
          })
        }
      }
    }
     })

     bot.on("message", function(user, userID, channelID, message, event) {
      if (bot.servers[bot.channels[channelID].guild_id].members[userID].roles.includes("&227809283239182336","&432707857884905477")) {
      if (message.startsWith("/ban")) {
        let matches = /\/ban (<.+>) (.+)/.exec(message)
        if (matches) {
              bot.ban({
                serverID: '386933605269635082',
                userID: event.d.mentions[0].id,
              })
              bot.sendMessage({
                to: channelID,
                message: "<@" + userID + ">, o membro foi **punido** com sucesso!"
              })
              setTimeout(() => {
                bot.deleteMessage({
                  channelID: channelID,
                  messageID: event.d.id,
                })
              }, 1000)
              let member = bot.servers[bot.channels[channelID].guild_id].members[event.d.mentions[0].id];
              bot.sendMessage({
                to: "397355418214465536",
                embed: {
                  color: 10038562,
                  description: "**• Punido por:** <@" + userID + ">" + "\n**• Punição:** /ban" + "\n**• Membro punido**: " + member.username + "\n**• Motivo:** " + matches[2]
                },
              })
            }
          }
        }
         })