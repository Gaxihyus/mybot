require('http').createServer().listen(3000);
const Discord = require("discord.js"); // API Discord.JS (Comandos)
const math = require("mathjs");
var client = new Discord.Client(); // Criar uma nova Client

// Configuração
const config = require('./config.json');
var prefix = config.prefix;

//Variaveis Diversas
var medo = false;
var segundaresp = false;
var tocando = false;
var dispatcher;
var radiodispatcher;
var votospause = 0;
var votosresume = 0;
var votosnext = 0;
var votosstop = 0;
const votounext = new Set();
const votoupause = new Set();
const votouresume = new Set();
const votoustop = new Set();

client.on('error', function () {

    var date = new Date();
    console.log("Ocorreu um erro de conexão Às " + date.getHours() + ":" + date.getMinutes());

});
client.on("ready", function () { // Evento "quando a client estiver pronta/ligada" função:


    client.on('message', message => {
        var date = new Date();
        if (message.isMentioned(client.user)) {
            message.reply("pra q vc ta me enchendo o saco em plenas " + date.getHours() + " horas? Fala o q q vc quer");
        }
    });

    /*-= STATUS DO BOT =-*/
    /*-=-=-=-=-=-=-=-=-=*/
    setInterval(function () {
        let statuses = ["jogos mais caros que os seus", "Jogos que vc quer ter", "Mineirinho Ultra Adventures", "Hentaikey.com", "Mu", "Runescape", "Red Dead Redemption 2", "Kamasutra Pro", "Um Guei leu isso"]; // Status do Dark Code que atualizam a cada 1 minuto. Para adicionar um novo apenas acrescente com vírgula... exemplo; let statuses = ["Dark Code™ | &help", "oi", "sou um bot lescal com nescau :3"];
        let status = statuses[Math.floor(Math.random() * statuses.length)]

        client.user.setPresence({ game: { name: status }, status: 'online' });

        client.user.setPresence({ activity: { name: status }, status: 'online' })
    }, 60000)
});
   //----------------- FUN COMMANDS -----------------

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
                message.channel.send("<:wat:404459079415889933> faz a pergunta uai...");

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

        message.channel.send(replies[Math.floor(Math.random() * replies.length)]);

    }

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


    }
    if (message.content.includes("DevAtomo") || message.content.includes("devatomo") || message.content.includes("atomo") || message.content.includes("ATOMO")) {

        let replies = ["Quem ta usando meu nome em vão ae?", message.author + ", falou de mim?", "o q tem eu?", "kkk eae men", "<:hmm:472423246428504065>", "https://cdn.discordapp.com/attachments/494191132318892043/498935795919355914/react2.PNG", "Fala duma vez.\nhttps://cdn.discordapp.com/attachments/494191132318892043/503045990903840788/BRobot_GREET.png"];

        if (!message.content.includes(prefix)) {

            if (message.content.includes("gay") || message.content.includes("GAY") || message.content.includes("Gay") || message.content.includes("guei")) {
                message.channel.send("vc q é gay, " + message.author + ":stuck_out_tongue_winking_eye:");
                segundaresp = false;
            }
            else if (message.content.includes("o quão especial é vc")) {
                message.channel.send("eu diria...... 22");
                segundaresp = false;
            }
            else if (message.content.includes("?")) {

                let resp = ["É uai XD", "Acho q não hein, " + message.author];
                message.channel.send(resp[Math.floor(Math.random() * resp.length)]);
                segundaresp = false;
            }
            else if (message.content.includes("corrupção") || message.content.includes("corrupto") || message.content.includes("corrompa")) {
                message.channel.send(":smiling_imp:\nhttps://www.youtube.com/watch?v=lnZGE-1n55U");
                segundaresp = false;
            }

            else if (message.content.includes("vc ta vivo") || message.content.includes("é vivo") || message.content.includes("tá vivo") || message.content.includes("ta vivo")) {
                medo = true;
                message.channel.send("talvez eu seja vivo.... ou não XD");
                segundaresp = false;
            }
            else {
                message.channel.send(replies[Math.floor(Math.random() * replies.length)]);
                segundaresp = true;
            }

            if (message.content.includes("medo") && medo) {
                message.channel.send("calma, " + message.author + " XD eu sou só um BOT! ");
                medo = false;
                segundaresp = false;
            }


        }
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

                message.channel.send("Desde qnd isso é número véi?");

            }
            else {

                if (parseInt(args[1]) >= parseInt(args[2])) {

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


    if (command === prefix + "ded") {
        message.channel.send("Tudo On! :thumbsup: ");
    }
    if (message.channel.type == "dm") return;

    if (command === prefix + "kick") {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":no_entry: Desculpe, sem permissão.");

        let expulso = message.mentions.members.first();
        var motivo = args.slice(2).join(" ");

        if (!args[1]) return message.channel.send("Mas eu vou kickar quem? Você? Marque o usuário que vc quer kickar! (vc marca as pessoas com @)");

        var kickEmbed = new Discord.RichEmbed()
            .setAuthor(expulso.displayName + " foi expulso do servidor!")
            .setTitle("Reason: " + motivo)
            .setThumbnail(message.author.avatarURL)
            .setColor("RANDOM");

        var NOTreasonEmbed = new Discord.RichEmbed()
            .setAuthor(expulso.displayName + " foi expulso do servidor!")
            .setThumbnail(message.author.avatarURL)
            .setColor("RANDOM");

        if (!motivo) {
            message.channel.send(NOTreasonEmbed);
            expulso.kick();
        } else
            message.channel.send(kickEmbed);
        expulso.kick();
    }
    if (command === prefix + "avatar") {
        let target = message.mentions.users.first() || message.author;

        message.channel.send({
            files: [
                {
                    attachment: target.displayAvatarURL,
                    name: "avatar.png"
                }
            ]
        });
    }




});
client.login(process.env.TOKEN);