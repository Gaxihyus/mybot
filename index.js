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
             if (command === prefix + "funfacts") {
                console.log("Comando funfacts requisitado por: " + message.author.username);
                let replies = ["https://cdn.discordapp.com/attachments/404058102565044234/493836015576940545/WhatsApp_Image_2018-09-24_at_13.47.00.jpeg",
                    "https://www.raiseyourbrain.com/wp-content/uploads/2015/01/fun-facts-about-pandas-26-300x200.jpg?x84682", "https://piximus.net/media/20475/fun-facts-1.jpg",
                    "https://images.template.net/wp-content/uploads/2015/08/Gecko-Feet-Fact.jpg", "https://img.izismile.com/img/img5/20120604/640/video_gaming_fun_facts_640_04.jpg",
                    "https://i.kym-cdn.com/photos/images/original/000/466/001/369.png", "https://m.media-amazon.com/images/M/MV5BNGYyYmZhY2MtMmU2OC00NmMwLWExYTktYTU3NzRjNDBmMjM5L2ltYWdlXkEyXkFqcGdeQXVyNjM2NDIwMzQ@._V1_.jpg",
                    "https://i.pinimg.com/originals/e1/82/7e/e1827ea68cf27b8fd1d3eb0285511850.jpg", "https://qph.fs.quoracdn.net/main-qimg-06ddf88599e44dd1615b534b142e9204-c", "https://i.kym-cdn.com/photos/images/original/000/431/247/f0c.png",
                    "https://pics.me.me/w-tp-fun-fact-every-character-you-kill-in-assassins-20752602.png", "http://img.izismile.com/img/img5/20120604/640/video_gaming_fun_facts_640_01.jpg",
                    "https://i.kym-cdn.com/photos/images/original/000/397/835/f33.png", "https://78.media.tumblr.com/06300aa5fa66060758fbf1f52b71a1f4/tumblr_mk1gxyr1sz1roqv59o1_500.png",
                    "https://78.media.tumblr.com/ef0d2d83ec25886ce025b45a3d72af94/tumblr_milrpkMd301roqv59o1_500.png", "https://thechive.files.wordpress.com/2013/01/wtf-interesting-facts-22.jpg?quality=85&strip=info&w=500",
                    "https://data.whicdn.com/images/34318990/original.png", "https://i.imgur.com/k8evXfG.png", "https://78.media.tumblr.com/bde223d39ea54233360c4567f13ec426/tumblr_neufccTg9d1roqv59o1_500.png",
                    "https://78.media.tumblr.com/169291dac78516a7e494a4f92b9330af/tumblr_nl0m6mECYa1roqv59o1_500.png", "https://i.pinimg.com/originals/f6/b4/f5/f6b4f57ae9e8a7de0e689474c6ca9491.jpg",
                    "https://78.media.tumblr.com/2e216af874a0058bcd04bbfc89a0fd28/tumblr_p1ux0o1ntP1roqv59o1_500.png", "https://78.media.tumblr.com/b4cbe425fdb0b778654469d9c2407562/tumblr_nsbxjlcmu31roqv59o1_500.png",
                    "https://78.media.tumblr.com/65e4e8801e9e8ed67697fd3c61eced4f/tumblr_mfz2pbU92W1roqv59o1_500.png", "https://i.pinimg.com/originals/07/cf/a4/07cfa4dbd73b918fc4430a27565e6283.png",
                    "https://78.media.tumblr.com/6b0e1c11cd00c6cb1a1243d0304fe110/tumblr_njzh0iSsny1roqv59o1_500.png", "http://36.media.tumblr.com/218bf2671deab7331cf714fac279c4af/tumblr_nom6txJtFu1roqv59o1_500.png",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCmyNtCWMOhn3peCxXOGmk8y3MFmkyZN-F0tFyjqe3_u5ZdRG", "http://aboutube.com/wp-content/uploads/2017/02/tumblr_okx2uby2ii1roqv59o1_500.png",
                    "https://78.media.tumblr.com/ec736d9d3271e3e97189b34f78ba55c3/tumblr_nphrtpwRDS1roqv59o1_500.png", "https://i.pinimg.com/236x/10/17/27/101727c8041164adc29dcf78fda2601a--wtf-fun-facts-awesome-facts.jpg",
                    "https://www.soumo.eu/wp-content/uploads/2018/03/26003/d59a07298ce1c6dd3d2b44b99e2c1ab1.png", "http://images6.fanpop.com/image/photos/33700000/WTF-fun-fact-random-33735084-499-499.png",
                    "https://i.pinimg.com/236x/eb/12/90/eb12906c1c9b111c22b0e1382bcdcc8e--creepy-facts-wtf-fun-facts.jpg"];
                    if (command === prefix + "ask") {
                        console.log("Comando ask requisitado por: " + message.author.username);
                        message.channel.send("https://cdn.discordapp.com/attachments/494191132318892043/510206947824369695/BRobot_think.gif").then(msg => {
                            msg.delete(3000)
                        })
                            .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
                
                        let replies = ["Sim!", "É Claro ue :3", "Claro q sim!", "MAN É TÃO OBVIO Q SS", "Yee", "YUSS", "Yup", "Sim XD", "Obviamente", "N faço idéia", "talvez sim, talvez não", "Não sei, será?!", "Nope men", "MDS NÃO!", "Claro!...que não .-.", "Sla po :7", "Nem", "Nah", "Creio q não, jovem", "Hmmmmmmmmm... n sei te dizer...", ":regional_indicator_n: :regional_indicator_o:", ":regional_indicator_y: :regional_indicator_e: :regional_indicator_s:"];
                        setTimeout(function () {
                
                            if (args[1]) { // Se o argumento for [1], ou seja um espaço a mais, ele vai fazer esta ação:
                
                                if (message.content.includes("vc é tsundere") || message.content.includes("vc e tsundere") || message.content.includes("voce é tsundere") || message.content.includes("voce e tsundere") || message.content.includes("tu é tsundere") || message.content.includes("tu e tsundere")) {
                
                                    message.channel.send("N-não é como se eu quisesse respoder suas mensagens nem nada assim, b-BAKA!!! :flushed: ");
                
                                }
                                else {
                
                                    message.channel.send(replies[Math.floor(Math.random() * replies.length)])
                
                                }
                
                            } else // else = Caso ao contrário fazer: ou seja se não for args[1] ele vai mandar isso:
                                message.channel.send("faz a pergunta uai...");
                
                        }, 3500);
                
                    }
                    if (command === prefix + "ship") {
                        console.log("Comando ship requisitado por: " + message.author.username);
                        var name1 = messageArray[1].substring(0, 2);
                        var name2 = messageArray[2].substring(3);
                        var shipname = name1 + name2;
                        let replies = ["MDS ELES SÃO MT FOFOOOOOS! EU SHIPO ELES TBM! #" + shipname, "Vei pq eles não tão juntos ainda? ELES TEM Q FICAR JUNTOOOOOS ;-; #" + shipname + "forever", "Nâo mesmo '-'", "VEI AIDS É MELHOR Q UM SHIP DESSES"]; // Respostas do Dark Code.
                        if (args[2]) { // Se o argumento for [1], ou seja um espaço a mais, ele vai fazer esta ação:
                            message.channel.send(replies[Math.floor(Math.random() * replies.length)])
                        } else // else = Caso ao contrário fazer: ou seja se não for args[1] ele vai mandar isso:
                            message.channel.send("Faça um ship!\n**Exemplo:** \n**" + prefix + "ship** eu waifu");

                            if (command === prefix + "funfacts") {
                                console.log("Comando funfacts requisitado por: " + message.author.username);
                                let replies = ["https://cdn.discordapp.com/attachments/404058102565044234/493836015576940545/WhatsApp_Image_2018-09-24_at_13.47.00.jpeg",
                                    "https://www.raiseyourbrain.com/wp-content/uploads/2015/01/fun-facts-about-pandas-26-300x200.jpg?x84682", "https://piximus.net/media/20475/fun-facts-1.jpg",
                                    "https://images.template.net/wp-content/uploads/2015/08/Gecko-Feet-Fact.jpg", "https://img.izismile.com/img/img5/20120604/640/video_gaming_fun_facts_640_04.jpg",
                                    "https://i.kym-cdn.com/photos/images/original/000/466/001/369.png", "https://m.media-amazon.com/images/M/MV5BNGYyYmZhY2MtMmU2OC00NmMwLWExYTktYTU3NzRjNDBmMjM5L2ltYWdlXkEyXkFqcGdeQXVyNjM2NDIwMzQ@._V1_.jpg",
                                    "https://i.pinimg.com/originals/e1/82/7e/e1827ea68cf27b8fd1d3eb0285511850.jpg", "https://qph.fs.quoracdn.net/main-qimg-06ddf88599e44dd1615b534b142e9204-c", "https://i.kym-cdn.com/photos/images/original/000/431/247/f0c.png",
                                    "https://pics.me.me/w-tp-fun-fact-every-character-you-kill-in-assassins-20752602.png", "http://img.izismile.com/img/img5/20120604/640/video_gaming_fun_facts_640_01.jpg",
                                    "https://i.kym-cdn.com/photos/images/original/000/397/835/f33.png", "https://78.media.tumblr.com/06300aa5fa66060758fbf1f52b71a1f4/tumblr_mk1gxyr1sz1roqv59o1_500.png",
                                    "https://78.media.tumblr.com/ef0d2d83ec25886ce025b45a3d72af94/tumblr_milrpkMd301roqv59o1_500.png", "https://thechive.files.wordpress.com/2013/01/wtf-interesting-facts-22.jpg?quality=85&strip=info&w=500",
                                    "https://data.whicdn.com/images/34318990/original.png", "https://i.imgur.com/k8evXfG.png", "https://78.media.tumblr.com/bde223d39ea54233360c4567f13ec426/tumblr_neufccTg9d1roqv59o1_500.png",
                                    "https://78.media.tumblr.com/169291dac78516a7e494a4f92b9330af/tumblr_nl0m6mECYa1roqv59o1_500.png", "https://i.pinimg.com/originals/f6/b4/f5/f6b4f57ae9e8a7de0e689474c6ca9491.jpg",
                                    "https://78.media.tumblr.com/2e216af874a0058bcd04bbfc89a0fd28/tumblr_p1ux0o1ntP1roqv59o1_500.png", "https://78.media.tumblr.com/b4cbe425fdb0b778654469d9c2407562/tumblr_nsbxjlcmu31roqv59o1_500.png",
                                    "https://78.media.tumblr.com/65e4e8801e9e8ed67697fd3c61eced4f/tumblr_mfz2pbU92W1roqv59o1_500.png", "https://i.pinimg.com/originals/07/cf/a4/07cfa4dbd73b918fc4430a27565e6283.png",
                                    "https://78.media.tumblr.com/6b0e1c11cd00c6cb1a1243d0304fe110/tumblr_njzh0iSsny1roqv59o1_500.png", "http://36.media.tumblr.com/218bf2671deab7331cf714fac279c4af/tumblr_nom6txJtFu1roqv59o1_500.png",
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCmyNtCWMOhn3peCxXOGmk8y3MFmkyZN-F0tFyjqe3_u5ZdRG", "http://aboutube.com/wp-content/uploads/2017/02/tumblr_okx2uby2ii1roqv59o1_500.png",
                                    "https://78.media.tumblr.com/ec736d9d3271e3e97189b34f78ba55c3/tumblr_nphrtpwRDS1roqv59o1_500.png", "https://i.pinimg.com/236x/10/17/27/101727c8041164adc29dcf78fda2601a--wtf-fun-facts-awesome-facts.jpg",
                                    "https://www.soumo.eu/wp-content/uploads/2018/03/26003/d59a07298ce1c6dd3d2b44b99e2c1ab1.png", "http://images6.fanpop.com/image/photos/33700000/WTF-fun-fact-random-33735084-499-499.png",
                                    "https://i.pinimg.com/236x/eb/12/90/eb12906c1c9b111c22b0e1382bcdcc8e--creepy-facts-wtf-fun-facts.jpg"];

                                    if (command === prefix + "bomdia") {

                                        var date = new Date();
                                        let replies = ["Bom dia! :)", "Bom diaaaaaa :3", "Bom dia frô du dia", "SENP.... bom dia :D"];
                                        if (date.getHours() >= 13 && date.getHours() < 18) {
                                            message.channel.send("Meio atrasado não? Já são " + date.getHours() + " horas! O correto seria boa tarde! XD");
                                        }
                                        else if (date.getHours() > 18) {
                                            message.channel.send("Olha, seria bom vc olhar pra janela ou pro relógio. Já são " + date.getHours() + " horas! O correto seria boa noite! XD");
                                        }
                                        else if (date.getHours() < 5 && date.getHours() > 00) {
                                            message.channel.send("Boa madrugada! Agora vai dormir pq já são " + date.getHours() + " horas!");
                                        }
                                        else if (date.getHours() === 12) {
                                            message.channel.send("E agora? meio-dia seria bom dia ou boa tarde? :thinking: ..... Bem, bom meio-dia pra tu XD");
                                        }
                                        else if (date.getHours() === 00) {
                                            message.channel.send("meia-noite.... Seria um novo dia com bom dia? ou ainda boa noite? dianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoite \n **RangeError:** Maximum call stack size exceeded");
                                        }
                                        else {
                                            message.channel.send(replies[Math.floor(Math.random() * replies.length)]);
                                        }
                                
                                
                                    }
                                    if (command === prefix + "boatarde") {
                                        var date = new Date();
                                        let replies = ["Boa tarde! :)", "Tarde :D", "Uma Excelente tarde para Vossa Senhoria :tophat:", "UOOOOOOUUU, O SENPAI ME NOT.....ahem, boa tarde :D"];
                                
                                        if (date.getHours() >= 6 && date.getHours() < 12) {
                                            message.channel.send("Meio adiantado não? ainda são " + date.getHours() + " horas! Quer que o dia passe mais rápido? XD");
                                        }
                                        else if (date.getHours() > 18) {
                                            message.channel.send("Olha, seria bom vc olhar pra janela ou pro relógio. Já são " + date.getHours() + " horas! O correto seria boa noite! XD");
                                        }
                                        else if (date.getHours() < 5 && date.getHours() > 00) {
                                            message.channel.send("Boa madrugada! Agora vai dormir pq já são " + date.getHours() + " horas!");
                                        }
                                        else if (date.getHours() === 12) {
                                            message.channel.send("E agora? meio-dia seria bom dia ou boa tarde? :thinking: ..... Bem, bom meio-dia pra tu XD");
                                        }
                                        else if (date.getHours() === 00) {
                                            message.channel.send("Ah não cara.... é meia noite e vc me fala boa tarde? da onde tu tirou isso?????");
                                        }
                                        else {
                                            message.channel.send(replies[Math.floor(Math.random() * replies.length)]);
                                        }
                                
                                
                                    }
                                    if (command === prefix + "boanoite") {
                                        var date = new Date();
                                        let replies = ["Boa noite! :)", "Noite :D", "Noite boa pra jogar! :video_game: ", "Boa noite! Nessas horas da noite eu penso no Sen... SENHOR JOGO DE AÇÃO Q EU VOU JOGAR!"];
                                
                                        if (date.getHours() >= 6 && date.getHours() < 12) {
                                            message.channel.send("Olha, já amanheceu viu XD. são " + date.getHours() + " horas! Suspeito q  vc tenha virado a noite jogando? XD");
                                        }
                                        else if (date.getHours() === 00) {
                                            message.channel.send("meia-noite.... Seria um novo dia com bom dia? ou ainda boa noite? dianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoite \n **RangeError:** Maximum call stack size exceeded");
                                        }
                                        else if (date.getHours() < 5 && date.getHours() > 00) {
                                            message.channel.send("Boa madrugada! Agora vai dormir pq já são " + date.getHours() + " horas!");
                                        }
                                        else if (date.getHours() === 12) {
                                            message.channel.send("Não, não jovem, hoje em dia usamos o sistema 24h então meia-noite é 00h00 e n 12h00");
                                        }
                                        else if (date.getHours() > 12 && date.getHours() < 18) {
                                            message.channel.send("Meio cedo pra boa noite, não? ainda são " + date.getHours() + " horas. Como já diz o sistema de conexão da PSN : Tente novamente mais tarde");
                                        }
                                        else {
                                            message.channel.send(replies[Math.floor(Math.random() * replies.length)]);
                                        }
                                        if (command === prefix + "parouimpar") {

                                            if (args[2]) {
                                    
                                                var escolha = "";
                                                if (messageArray[1] === "par") {
                                                    escolha = "ímpar";
                                                }
                                                else if (messageArray[1] === "impar" || messageArray[1] === "ímpar") {
                                                    escolha = "par";
                                                }
                                                var n1 = parseInt(messageArray[2]);
                                                var n2 = math.randomInt(0, 5);
                                    
                                                message.channel.send(escolha + "! " + n2);
                                    
                                                var n3 = n1 + n2;
                                                if (n3 % 2 === 0) {
                                    
                                                    if (escolha === "par") {
                                    
                                                        message.channel.send("Ganhei! Mais sorte na próxima, " + message.author);
                                    
                                                    }
                                                    else {
                                                        message.channel.send(":(");
                                                    }
                                                }
                                                else {
                                                    if (escolha === "par") {
                                    
                                                        message.channel.send(":(");
                                    
                                                    }
                                                    else {
                                                        message.channel.send("Ganhei! Mais sorte na próxima, " + message.author);
                                                    }
                                                }
                                    
                                            }
                                            else {
                                                message.channel.send("Calma ae, meu jovem! Pra gente brincar disso tem que fazer certo! digite **parouimpar** suaescolha seunumero \n **Exemplo:** \n **" + prefix + "parouimpar** par 2");
                                            }
                                    
                                        }                                
                                        if (command === prefix + "roll") {

                                            if (args[2]) {
                                    
                                                if (isNaN(args[1]) || isNaN(args[2])) {
                                    
                                                    message.channel.send("<:wat:404459079415889933>");
                                                    message.channel.send("Desde qnd isso é número véi?");
                                    
                                                }
                                                else {
                                    
                                                    if (parseInt(args[1]) >= parseInt(args[2])) {
                                    
                                                        message.channel.send("<:fred:404438414201454594>");
                                                        message.channel.send("O número mínimo precisa ser maior que o número máximo, ou vc fugiu da escola?");
                                    
                                                    }
                                                    else {
                                                        var num = Math.floor(Math.random() * parseInt(args[2])) + parseInt(args[1]);
                                                        message.channel.send("Saiu o número: " + num);
                                                    }
                                    
                                                }
                                    
                                    
                                            }
                                            else {
                                                message.channel.send("Opa!\nUse **" + prefix + "roll** (numero mínimo) (número máximo) pra isso funcionar!");
                                            }
                                    
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