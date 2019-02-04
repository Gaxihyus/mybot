const Discord = require("discord.js"); // API Discord.JS (Comandos)
const fs = require("fs");
const math = require("mathjs");
var client = new Discord.Client(); // Criar uma nova Client

// Configuração
const config = require('./config.json');
var prefix = config.prefix; // Prefixo de comandos, isso aqui pode ser mudado facilmente. como por exemplo; !help, &help.
var token = config.token; // Token do BOT isso aqui é extremamente importante!!! Portanto tenha cuidado para não apagar ou mandar para alguém por acidente, se não qualquer pessoa tem acesso aos códigos do bot!!!
var Yellow = config.Yellow;
var Dark = config.Dark;

client.on("ready", function () { // Evento "quando a client estiver pronta/ligada" função:
    console.log(`O ${client.user.username} está online em ${client.guilds.size} servidores!`); // Mensagem que é mandada no console quando ele liga.
    client.guilds.get('487788472917033000').channels.get('488109225957130244').send(`O ${client.user.username} está online!`); // Mensagem que é mandada no canal de #logs do servidor oficial do Dark Code™.

    /*-= STATUS DO BOT =-*/
    client.user.setPresence({game: {name: "Dark Code™ | &help" }, status: 'online' });

    client.user.setPresence({activity: {name: "Dark Code™ | &help"}, status: 'online'})
   /*-=-=-=-=-=-=-=-=-=*/
    setInterval(function() {
        let statuses = ["Dark Code™ | &help"]; // Status do Dark Code que atualizam a cada 1 minuto. Para adicionar um novo apenas acrescente com vírgula... exemplo; let statuses = ["Dark Code™ | &help", "oi", "sou um bot lescal com nescau :3"];
        let status = statuses[Math.floor(Math.random()*statuses.length)]
 
        client.user.setPresence({game: {name: status }, status: 'online' });

        client.user.setPresence({activity: {name: status}, status: 'online'})
    }, 60000)
 });
client.on("message", (message) => {
if (message.author.equals(client.user)) return;

if (!message.content.startsWith(prefix)) return;
if (message.channel.type == "dm") return;

const messageArray = message.content.split(" ");  
const command = messageArray[0];
const args = message.content.slice(prefix.length).trim().split(/ +/g);
        //----------------- FUN COMMANDS -----------------
        if(command === prefix+"ping") {
            message.channel.sendMessage("Pong! "+ (client.ping) + "ms");
         }
        if(command === prefix+"ask") {
            let replies = ["Claro...que não '-'","Sim eu acho","CLARO Q N"]; // Respostas do Dark Code.
            if(args[1]) { // Se o argumento for [1], ou seja um espaço a mais, ele vai fazer esta ação:
            message.channel.sendMessage(replies[Math.floor(Math.random()*replies.length)])
            } else // else = Caso ao contrário fazer: ou seja se não for args[1] ele vai mandar isso:
            message.channel.sendMessage("Please, make a question.");
           }       
           if (message.content.includes("atomo") || message.content.includes("DevAtomo") || message.content.includes("devatomo") || message.content.includes("Devatomo")) {

            let replies = ["Quem ta usando meu nome em vão ae?", message.author + ", falou de mim?", "o q tem eu?", "kkk eae men",];
    
        if(command === prefix+"clear") {
            if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: You are not allowed to do this!').catch(console.error);
            var quantidade = args[1];
        
            if (isNaN(quantidade)) return message.channel.send(':warning: Please enter the number of messages to clear.');
            if (quantidade > 100) return message.channel.send(':warning: Please choose a number below 100.');
            
            message.channel.bulkDelete(math.eval('1 +'+args[1]));
        
            message.channel.sendMessage(quantidade+" messages were cleaned! :white_check_mark:");
          }
          if(command === prefix+"kick") {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":no_entry: Desculpe, sem permissão.");
        
               let expulso = message.mentions.members.first();
               var motivo = args.slice(2).join(" ");

               if(!args[1]) return message.channel.send("You must specify a user!");

               var kickEmbed = new Discord.RichEmbed()
               .setAuthor(expulso.displayName+" was kicked out of the server!")
               .setTitle("Reason: " + motivo)
               .setThumbnail(message.author.avatarURL)
               .setColor("RANDOM");

               var NOTreasonEmbed = new Discord.RichEmbed()
               .setAuthor(expulso.displayName+" was kicked out of the server!")
               .setThumbnail(message.author.avatarURL)
               .setColor("RANDOM");
        
               if(!motivo) { 
                   message.channel.send(NOTreasonEmbed);
                   expulso.kick();
               } else
                message.channel.send(kickEmbed);
                expulso.kick();
            }
            if(command === prefix+"ban") {
                if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: Desculpe, sem permissão.");
        
                let expulso2 = message.mentions.members.first();
                var motivo2 = args.slice(2).join(" ");
 
                if(!args[1]) return message.channel.send("You must specify a user!");
 
                var kickEmbed = new Discord.RichEmbed()
                .setAuthor(expulso.displayName+" was kicked out of the server!")
                .setTitle("Reason: " + motivo2)
                .setThumbnail(message.author.avatarURL)
                .setColor("RANDOM");
 
                var NOTreasonEmbed = new Discord.RichEmbed()
                .setAuthor(expulso2.displayName+" was banned out of the server!")
                .setThumbnail(message.author.avatarURL)
                .setColor("RANDOM");
         
                if(!motivo) { 
                    message.channel.send(NOTreasonEmbed);
                    expulso2.kick();
                } else
                 message.channel.send(kickEmbed);
                 expulso2.kick();
             }
             if(command === prefix+"avatar") {
                let target = message.mentions.users.first() || message.author;
          
                message.channel.send({files: [
                  {
                    attachment: target.displayAvatarURL,
                    name: "avatar.png"
                  }
                ]});
              }
             if(command === prefix+"webhook") {
                 mensagem = args[1];
                const hook = new Discord.WebhookClient('488429367186423808', 'pEffcPJRN27H1DHDBx-0uj_TuMIOSBlXwJ7g6Bjm-s7xG1c9iGADfsedQuXfc_bRQHx8');

                hook.send(mensagem);
             }
             if(command === prefix+"say") {
                 let msg = args.split.slice(" ");

                 message.channel.sendMessage(msg);
             }

         //----------------ADMIN COMMANDS------------------------
        
        if(command === prefix+"help") {
            message.channel.sendMessage("**Sup!**\nUse the command &terraria to get some cool infos about my terraria commands!\n\nUse the command &ask to make me a question!");
         }

        if(command === prefix+"ded") {
            message.channel.sendMessage("To on!! :grin: :thumbsup: ");
         }

    });
client.login(process.env.TOKEN);