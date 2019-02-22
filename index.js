const Discord = require("discord.js"); // API Discord.JS (Comandos)
const fs = require("fs");
const math = require("mathjs");
var client = new Discord.Client(); // Criar uma nova Client



// Configuração
const config = require('./config.json');
var prefix = config.prefix;
var giveMeAJoke = require('give-me-a-joke');

client.on("ready", function () { // Evento "quando a client estiver pronta/ligada" função:
client.on('message', message=> {
    var date = new Date();
    if (message.isMentioned(client.user)) {
    message.reply("pra q vc ta me enchendo o saco em plenas " + date.getHours() + " horas? Fala o q q vc quer");
}
});

    /*-= STATUS DO BOT =-*/
   /*-=-=-=-=-=-=-=-=-=*/
    setInterval(function() {
        let statuses = ["a zoeira nesse servidor", "jogos mais caros que os seus", "Jogos que vc quer ter", "Mineirinho Ultra Adventures", "Mu"]; // Status do Dark Code que atualizam a cada 1 minuto. Para adicionar um novo apenas acrescente com vírgula... exemplo; let statuses = ["Dark Code™ | &help", "oi", "sou um bot lescal com nescau :3"];
        let status = statuses[Math.floor(Math.random()*statuses.length)]
 
        client.user.setPresence({game: {name: status }, status: 'online' });

        client.user.setPresence({activity: {name: status}, status: 'online'})
    }, 60000)
 });
client.on("message", (message) => {
if (message.author.equals(client.user)) return;

//if (!message.content.startsWith(prefix)) return;

const messageArray = message.content.split(" ");
const command = messageArray[0];
const args = message.content.slice(prefix.length).trim().split(/ +/g);
        //----------------- FUN COMMANDS -----------------
        if(command === prefix+"ping") {
            message.channel.sendMessage("🏓 Pong! "+ (client.ping) + "ms");
         }
         if(command === prefix+"oof") {
            let replies = ["https://ifunny.co/fun/ZNr3p1b26","https://ifunny.co/fun/PVM6Ob746","https://ifunny.co/fun/YjjpyMd46?gallery=channel&query=games","https://ifunny.co/fun/PxHThWb46?gallery=channel&query=games","https://ifunny.co/fun/lF6MxFX46?gallery=channel&query=games","https://images-cdn.9gag.com/photo/aZ3oK0V_460s.jpg","https://ifunny.co/fun/zhZTJJS46?gallery=channel&query=games","https://ifunny.co/fun/kP4YIlR46?gallery=channel&query=games","https://ifunny.co/fun/fcWNEKJ46?gallery=channel&query=games","https://ifunny.co/fun/4t60BkI46?gallery=channel&query=games","https://ifunny.co/fun/ZRLybdH46?gallery=channel&query=games","https://ifunny.co/fun/4CvjwYH46?gallery=channel&query=games","https://ifunny.co/fun/8htcEVB46?gallery=channel&query=games","https://ifunny.co/fun/pjTjzD246?gallery=channel&query=games","https://ifunny.co/fun/MhHAv1a46?gallery=channel&query=nuncanemvi","https://ifunny.co/fun/XYhgf1a46?gallery=channel&query=nuncanemvi","https://ifunny.co/fun/YgNkRwZ46?gallery=channel&query=nuncanemvi","https://ifunny.co/fun/C2x5BwZ46?gallery=channel&query=nuncanemvi","https://ifunny.co/fun/k2CKP8V46?gallery=channel&query=nuncanemvi","https://ifunny.co/fun/JiB7osp36","https://ifunny.co/fun/P636f1oz5","https://ifunny.co/fun/6HAMp8X46","https://ifunny.co/fun/IILQBTb46","https://ifunny.co/fun/Bcbd2rX46","https://ifunny.co/fun/uhCQ2Nb46","https://ifunny.co/fun/xpSkqea46","https://ifunny.co/fun/qpRCX5a46","https://ifunny.co/fun/gqryIYa46","https://ifunny.co/fun/o01jVJl46?gallery=channel&query=artememe","https://ifunny.co/fun/E0NRNxg46?gallery=channel&query=artememe","https://ifunny.co/fun/KEODgIn46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/yDmU4En46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/BP00ovm46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/GElZElm46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/TUQNrZm46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/NAa2Mok46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/sqdTVyf46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/qeWSPff46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/76jQRaf46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/tM2AMYf46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/U0e4vie46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/ksoS2Ab46?gallery=channel&query=elei%C3%A7%C3%B5es2018","https://ifunny.co/fun/VDT97ee46?gallery=channel&query=nuncanemvi","https://ifunny.co/fun/3ghnZwZ46?gallery=channel&query=nuncanemvi"]; // Respostas do Dark Code.
            if(args[0]) { // Se o argumento for [1], ou seja um espaço a mais, ele vai fazer esta ação:
            message.channel.sendMessage(replies[Math.floor(Math.random()*replies.length)])
            } else // else = Caso ao contrário fazer: ou seja se não for args[1] ele vai mandar isso:
            message.channel.sendMessage("Só oof é o suficiente men");
           }
         
        if(command === prefix+"ask") {
            let replies = ["Sim!","Obvio neh e-e","É Claro ue :3","Claro q sim!","MAN É TÃO OBVIO Q SS","Acho que sim....","Yee","YUSS","Yup","Sim XD","Obviamente","N faço idéia","talvez sim, talvez não", "Não sei, será?!", "Nope men", "MDS NÃO!", "Claro!...que não .-.","Sla po :7","Nem","Nah", "Creio q não, jovem","Hmmmmmmmmm... n sei te dizer...",":regional_indicator_n: :regional_indicator_o:",":regional_indicator_y: :regional_indicator_e: :regional_indicator_s:"]; // Respostas do Dark Code.
            if(args[1]) { // Se o argumento for [1], ou seja um espaço a mais, ele vai fazer esta ação:

                if(message.content.includes("vc é tsundere") || message.content.includes("vc e tsundere") || message.content.includes("voce é tsundere")|| message.content.includes("voce e tsundere")|| message.content.includes("tu é tsundere")|| message.content.includes("tu e tsundere")){

                    message.channel.send("N-não é como se eu quisesse respoder suas mensagens nem nada assim, b-BAKA!!! :flushed: ");

                }
                else{

                    message.channel.sendMessage(replies[Math.floor(Math.random()*replies.length)])

                }
            
            } else // else = Caso ao contrário fazer: ou seja se não for args[1] ele vai mandar isso:
            message.channel.sendMessage("Faiz uma pergunta pls homi");
           }
           if(command === prefix+"ship") {
            var name1 = messageArray[1].substring(0,2);
            var name2 = messageArray[2].substring(3);
            var shipname = name1 + name2;
            let replies = ["MDS ELES SÃO MT FOFOOOOOS! EU SHIPO ELES TBM! #" + shipname, "Vei pq eles não tão juntos ainda? ELES TEM Q FICAR JUNTOOOOOS ;-; #" + shipname + "forever", "Nâo mesmo '-'", "VEI AIDS É MELHOR Q UM SHIP DESSES"]; // Respostas do Dark Code.
            if(args[2]) { // Se o argumento for [1], ou seja um espaço a mais, ele vai fazer esta ação:
            message.channel.sendMessage(replies[Math.floor(Math.random()*replies.length)])
            } else // else = Caso ao contrário fazer: ou seja se não for args[1] ele vai mandar isso:
            message.channel.sendMessage("Faça um ship!\n**Exemplo:** \n**&ship** eu waifu");
           }
           if(command === prefix+"darkness") {
            var darkness = new Discord.RichEmbed()
            .setTitle("**Well...**")
            
            .setColor("RANDOM")
            .setDescription("Hello darkness my old friend...")
            .setImage("https://cdn.discordapp.com/attachments/488372887602987009/488499684135141396/Z.png")
            
            message.channel.send(darkness);
           }
           
           
        if(command === prefix+"olhaso") {
            let replies = ["https://cdn.discordapp.com/attachments/404058102565044234/493839622758072341/WhatsApp_Image_2018-09-24_at_13.46.43.jpeg", "https://cdn.discordapp.com/attachments/404058102565044234/493839621394792448/WhatsApp_Image_2018-09-24_at_13.46.42.jpeg", "https://cdn.discordapp.com/attachments/404058102565044234/493839620526702602/WhatsApp_Image_2018-09-24_at_13.46.47.jpeg", "https://cdn.discordapp.com/attachments/404058102565044234/493839615535349770/WhatsApp_Image_2018-09-24_at_13.46.48.jpeg", "https://cdn.discordapp.com/attachments/404058102565044234/493839273431269387/WhatsApp_Image_2018-09-24_at_13.47.03.jpeg", "https://cdn.discordapp.com/attachments/404058102565044234/493839150546419714/WhatsApp_Image_2018-09-24_at_14.14.53_1.jpeg", "https://cdn.discordapp.com/attachments/404058102565044234/493839199531827216/WhatsApp_Image_2018-09-24_at_14.03.41.jpeg"];
            message.channel.send(replies[Math.floor(Math.random()*replies.length)]);
        
        }

           // BRobot te ajuda com contas de +
        if(command === prefix+"qnto" && messageArray[1].includes("+")){
            let replies = ["Essa é fácil! É ", "Deixa eu pensar.... Acho que é ","Vc n sabe? Dá ", "Ah Minzerávi, dá "];
            var operacao = messageArray[1];
            var nums = operacao.split("+");
            var n1 = parseFloat(nums[0].replace(",", ".").trim());
            var n2 = parseFloat(nums[1].replace(",", ".").trim());
            var resp = n1 + n2;
            
            message.channel.send(replies[Math.floor(Math.random()*replies.length)] + " " + resp);

        }else if(command === prefix+"qnto" && messageArray[1].includes("-")){

            let replies = ["Essa é fácil! É ", "Deixa eu pensar.... Acho que é ","Vc n sabe? Dá ", "Ah Minzerávi, dá "];
            var pergunta = messageArray[1].split("-");
            var n1 = parseFloat(pergunta[0].replace(",",".").trim());
            var n2 = parseFloat(pergunta[1].replace("?", "").replace(",",".").trim())

            var resp = n1 - n2;

            message.channel.sendMessage(replies[Math.floor(Math.random()*replies.length)] + " " + resp)

        }else if(command === prefix+"qnto" && messageArray[1].includes("x")){

            let replies = ["Essa é fácil! É ", "Deixa eu pensar.... Acho que é ","Vc n sabe? Dá ", "Ah Minzerávi, dá "];
            var pergunta = messageArray[1].split("x");
            var n1 = parseFloat(pergunta[0].replace(",",".").trim());
            var n2 = parseFloat(pergunta[1].replace("?", "").replace(",",".").trim())

            var resp = n1 * n2;

            message.channel.sendMessage(replies[Math.floor(Math.random()*replies.length)] + " " + resp)

        }else if(command === prefix+"qnto" && messageArray[1].includes("/")){

            let replies = ["Essa é fácil! É ", "Deixa eu pensar.... Acho que é ","Vc n sabe? Dá ", "Ah Minzerávi, dá "];
            var pergunta = messageArray[1].split("/");
            var n1 = parseFloat(pergunta[0].replace(",",".").trim());
            var n2 = parseFloat(pergunta[1].replace("?", "").replace(",",".").trim())

            var resp = n1 / n2;

            message.channel.sendMessage(replies[Math.floor(Math.random()*replies.length)] + " " + resp)

        }

        if(command === prefix+"matematica" || command === prefix+"Matematica" || command === "matemática" || command === prefix+"Matemática"){

            message.channel.sendMessage("Eu posso de ajudar com umas contas rápidas! \nSe você quiser fazer as contas, use o comando &qnto \nPara adição use &qnto n1 + n2 \nPara subtração, use &qnto nq - n2 \nPara multiplicação, use &qnto n1 x n2 \nPara divisão, use &qnto n1 / n2 \nVlw!")

        }

        if(command === prefix+"vlw") {
            message.reply(" não tem por onde!");
         }
         if(command === prefix+"vcentendeu"){

            message.channel.send("<:wat:404459079415889933>");

         }

         if (command === prefix + "roll") {

            if (args[2]) {
    
                if (isNaN(args[1]) || isNaN(args[2])) {
    
                    message.channel.send("wat?");
                    message.channel.send("Desde qnd isso é número véi?");
    
                }
                else {
    
                    if (parseInt(args[1]) >= parseInt(args[2])) {
    
                        message.channel.send("'-'");
                        message.channel.send("O minimo deve ser maior que o maximo! Ou você fugiu da escola?");
    
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

         if(command === prefix + "funfacts"){
             let replies = ["https://cdn.discordapp.com/attachments/404058102565044234/493836015576940545/WhatsApp_Image_2018-09-24_at_13.47.00.jpeg",
            "https://www.raiseyourbrain.com/wp-content/uploads/2015/01/fun-facts-about-pandas-26-300x200.jpg?x84682", "https://piximus.net/media/20475/fun-facts-1.jpg",
            "https://images.template.net/wp-content/uploads/2015/08/Gecko-Feet-Fact.jpg", "https://img.izismile.com/img/img5/20120604/640/video_gaming_fun_facts_640_04.jpg",
            "https://i.kym-cdn.com/photos/images/original/000/466/001/369.png", "https://m.media-amazon.com/images/M/MV5BNGYyYmZhY2MtMmU2OC00NmMwLWExYTktYTU3NzRjNDBmMjM5L2ltYWdlXkEyXkFqcGdeQXVyNjM2NDIwMzQ@._V1_.jpg",
            "https://i.pinimg.com/originals/e1/82/7e/e1827ea68cf27b8fd1d3eb0285511850.jpg", "https://qph.fs.quoracdn.net/main-qimg-06ddf88599e44dd1615b534b142e9204-c","https://i.kym-cdn.com/photos/images/original/000/431/247/f0c.png",
            "https://pics.me.me/w-tp-fun-fact-every-character-you-kill-in-assassins-20752602.png", "http://img.izismile.com/img/img5/20120604/640/video_gaming_fun_facts_640_01.jpg",
            "https://i.kym-cdn.com/photos/images/original/000/397/835/f33.png", "https://78.media.tumblr.com/06300aa5fa66060758fbf1f52b71a1f4/tumblr_mk1gxyr1sz1roqv59o1_500.png",
            "https://78.media.tumblr.com/ef0d2d83ec25886ce025b45a3d72af94/tumblr_milrpkMd301roqv59o1_500.png","https://thechive.files.wordpress.com/2013/01/wtf-interesting-facts-22.jpg?quality=85&strip=info&w=500",
            "https://data.whicdn.com/images/34318990/original.png", "https://i.imgur.com/k8evXfG.png", "https://78.media.tumblr.com/bde223d39ea54233360c4567f13ec426/tumblr_neufccTg9d1roqv59o1_500.png",
            "https://78.media.tumblr.com/169291dac78516a7e494a4f92b9330af/tumblr_nl0m6mECYa1roqv59o1_500.png","https://i.pinimg.com/originals/f6/b4/f5/f6b4f57ae9e8a7de0e689474c6ca9491.jpg",
            "https://78.media.tumblr.com/2e216af874a0058bcd04bbfc89a0fd28/tumblr_p1ux0o1ntP1roqv59o1_500.png","https://78.media.tumblr.com/b4cbe425fdb0b778654469d9c2407562/tumblr_nsbxjlcmu31roqv59o1_500.png",
            "https://78.media.tumblr.com/65e4e8801e9e8ed67697fd3c61eced4f/tumblr_mfz2pbU92W1roqv59o1_500.png", "https://i.pinimg.com/originals/07/cf/a4/07cfa4dbd73b918fc4430a27565e6283.png",
            "https://78.media.tumblr.com/6b0e1c11cd00c6cb1a1243d0304fe110/tumblr_njzh0iSsny1roqv59o1_500.png", "http://36.media.tumblr.com/218bf2671deab7331cf714fac279c4af/tumblr_nom6txJtFu1roqv59o1_500.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCmyNtCWMOhn3peCxXOGmk8y3MFmkyZN-F0tFyjqe3_u5ZdRG", "http://aboutube.com/wp-content/uploads/2017/02/tumblr_okx2uby2ii1roqv59o1_500.png",
            "https://78.media.tumblr.com/ec736d9d3271e3e97189b34f78ba55c3/tumblr_nphrtpwRDS1roqv59o1_500.png","https://i.pinimg.com/236x/10/17/27/101727c8041164adc29dcf78fda2601a--wtf-fun-facts-awesome-facts.jpg",
            "https://www.soumo.eu/wp-content/uploads/2018/03/26003/d59a07298ce1c6dd3d2b44b99e2c1ab1.png","http://images6.fanpop.com/image/photos/33700000/WTF-fun-fact-random-33735084-499-499.png",
            "https://i.pinimg.com/236x/eb/12/90/eb12906c1c9b111c22b0e1382bcdcc8e--creepy-facts-wtf-fun-facts.jpg"];

            message.channel.send(replies[Math.floor(Math.random()*replies.length)]);

         }
         if(command === prefix+"gif"){
            let replies = ["https://media3.giphy.com/media/29SqSyXlyO6WI/giphy.webp","https://media1.giphy.com/media/3osxYtpKtYLe40VHeU/giphy.webp",
            "https://media2.giphy.com/media/htFUXJH5vjgIw/giphy.webp","https://media3.giphy.com/media/3osxYACfOYULLSpNjG/giphy.webp",
            "https://media0.giphy.com/media/f79OYWh5uwIfK/giphy.webp","https://media2.giphy.com/media/8QYCf3L9AuXYs/200w.webp",
             "https://media1.giphy.com/media/12zsMO4Op2YlkQ/200.webp","https://media3.giphy.com/media/GH7rdGafqyeQ0/200.webp",
             "https://media1.giphy.com/media/8cljB4ILmzjKE/200.webp", "https://media2.giphy.com/media/Iqyu5uLlL1ajS/200w.webp",
            "https://media3.giphy.com/media/3o7WTwbZyDk0ZLOD6M/200w.webp", "https://cdn.discordapp.com/attachments/404058088329576450/493924711743619102/giphy.gif",
            "http://media.giphy.com/media/BRB6L7SouZi36/giphy.gif", "http://media.giphy.com/media/3Xk5frVJREXg4/giphy.gif",
            "https://thumbs.gfycat.com/DarlingOrneryIrishterrier-max-1mb.gif"];

            message.channel.send(replies[Math.floor(Math.random()*replies.length)]);


         }
         if(command === prefix+"bomdia"){
            var date = new Date();
            let replies = ["Bom dia! :)", "Bom diaaaaaa :3", "Bom dia frô du dia", "SENP.... bom dia :D"];
            if(date.getHours() >= 13 && date.getHours()<18){
                message.channel.send("Meio atrasado não? Já são " + date.getHours() + " horas! O correto seria boa tarde! XD");
            }
            else if(date.getHours() > 18 ){
                message.channel.send("Olha, seria bom vc olhar pra janela ou pro relógio. Já são " + date.getHours() + " horas! O correto seria boa noite! XD");
            }
            else if(date.getHours() < 5 && date.getHours() > 00){
                message.channel.send("Boa madrugada! Agora vai dormir pq já são " + date.getHours() + " horas!");
            }
            else if(date.getHours() === 12 ){
                message.channel.send("E agora? meio-dia seria bom dia ou boa tarde? :thinking: ..... Bem, bom meio-dia pra tu XD");
            }
            else if(date.getHours() === 00 ){
                message.channel.send("meia-noite.... Seria um novo dia com bom dia? ou ainda boa noite? dianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoite \n **RangeError:** Maximum call stack size exceeded");
            }
            else{
                message.channel.send(replies[Math.floor(Math.random()*replies.length)]);
            }

            
         }
         if(command === prefix+"boatarde"){
            var date = new Date();
            let replies = ["Boa tarde! :)", "Tarde :D", "Uma Excelente tarde para Vossa Senhoria :tophat:", "UOOOOOOUUU, O SENPAI ME NOT.....ahem, boa tarde :D"];

            if(date.getHours() >= 6 && date.getHours()<12){
                message.channel.send("Meio adiantado não? ainda são " + date.getHours() + " horas! Quer que o dia passe mais rápido? XD");
            }
            else if(date.getHours() > 18 ){
                message.channel.send("Olha, seria bom vc olhar pra janela ou pro relógio. Já são " + date.getHours() + " horas! O correto seria boa noite! XD");
            }
            else if(date.getHours() < 5 && date.getHours() > 00){
                message.channel.send("Boa madrugada! Agora vai dormir pq já são " + date.getHours() + " horas!");
            }
            else if(date.getHours() === 12 ){
                message.channel.send("E agora? meio-dia seria bom dia ou boa tarde? :thinking: ..... Bem, bom meio-dia pra tu XD");
            }
            else if(date.getHours() === 00 ){
                message.channel.send("Ah não cara.... é meia noite e vc me fala boa tarde? da onde tu tirou isso?????");
            }
            else{
                message.channel.send(replies[Math.floor(Math.random()*replies.length)]);
            }

            
         }
         if(command === prefix+"boanoite"){
            var date = new Date();
            let replies = ["Boa noite! :)", "Noite :D", "Noite boa pra jogar! :video_game: ", "Boa noite! Nessas horas da noite eu penso no Sen... SENHOR JOGO DE AÇÃO Q EU VOU JOGAR!"];

            if(date.getHours() >= 6 && date.getHours()<12){
                message.channel.send("Olha, já amanheceu viu XD. são " + date.getHours() + " horas! Suspeito q  vc tenha virado a noite jogando? XD");
            }
            else if(date.getHours() === 00 ){
                message.channel.send("meia-noite.... Seria um novo dia com bom dia? ou ainda boa noite? dianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoitedianoite \n **RangeError:** Maximum call stack size exceeded");
            }
            else if(date.getHours() < 5 && date.getHours() > 00 ){
                message.channel.send("Boa madrugada! Agora vai dormir pq já são " + date.getHours() + " horas!");
            }
            else if(date.getHours() === 12 ){
                message.channel.send("Não, não jovem, hoje em dia usamos o sistema 24h então meia-noite é 00h00 e n 12h00");
            }
            else{
                message.channel.send(replies[Math.floor(Math.random()*replies.length)]);
            }

            
         }
         if (message.content.includes("DevAtomo") || message.content.includes("Atomo") || message.content.includes("atomo") || message.content.includes("devatomo")){

            let replies = ["Quem ta usando meu nome em vão ae?", message.author + ", falou de mim?", "o q tem eu?", "kkk eae men"];

            if(!message.content.includes(prefix)){
                if(message.content.includes("gay") || message.content.includes("GAY") || message.content.includes("Gay") || message.content.includes("guei")){
                    message.channel.send("vc q é gay, " + message.author + ":stuck_out_tongue_winking_eye:");
                }
                else if (message.content.includes("?")){

                    let resp = ["É uai XD", "Acho q não hein, " + message.author];
                    message.channel.send(resp[Math.floor(Math.random()*resp.length)]);
                }
                else if (message.content.includes("corrupção") || message.content.includes("corrupto") || message.content.includes("corrompa")){
                    message.channel.send(":smiling_imp:\nhttps://www.youtube.com/watch?v=lnZGE-1n55U");
                }
                else if(message.content.includes("o quão especial é vc")){
                    message.channel.send("eu diria...... 22");
                }
                else{
                    message.channel.send(replies[Math.floor(Math.random()*replies.length)]);
                }
            }
         }
         if(command === prefix + "nut"){

            let replies =  ["https://cdn.discordapp.com/attachments/404058102565044234/493839619910139904/WhatsApp_Image_2018-09-24_at_13.46.45.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839616567279667/WhatsApp_Image_2018-09-24_at_13.46.49.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839311754493986/WhatsApp_Image_2018-09-24_at_13.46.47_1.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839311754493986/WhatsApp_Image_2018-09-24_at_13.46.47_1.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839311234400276/WhatsApp_Image_2018-09-24_at_14.03.37.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839274299490343/WhatsApp_Image_2018-09-24_at_13.47.08.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839273141862431/WhatsApp_Image_2018-09-24_at_14.03.36_1.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839272126709800/WhatsApp_Image_2018-09-24_at_13.47.07_1.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839267030892567/WhatsApp_Image_2018-09-24_at_14.03.42.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839207413055510/WhatsApp_Image_2018-09-24_at_14.03.39.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839202136489984/WhatsApp_Image_2018-09-24_at_14.03.42_1.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839182213677057/WhatsApp_Image_2018-09-24_at_14.14.49.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839155638304771/WhatsApp_Image_2018-09-24_at_14.14.51.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839154044731413/WhatsApp_Image_2018-09-24_at_14.14.43.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839149779124224/WhatsApp_Image_2018-09-24_at_14.14.53.jpeg",
                            "https://cdn.discordapp.com/attachments/404058102565044234/493839622665666561/WhatsApp_Image_2018-09-24_at_13.46.50.jpeg"];


            message.channel.send(replies[Math.floor(Math.random()*replies.length)]);


         }
         if(command === prefix + "parouimpar"){

            if(args[2]){

                var escolha = "";
                if(messageArray[1] === "par"){
                    escolha = "ímpar";
                }
                else if(messageArray[1] === "impar" || messageArray[1] === "ímpar"){
                    escolha = "par";
                }
                var n1 = parseInt(messageArray[2]);
                var n2 = math.randomInt(0,5);

                message.channel.send(escolha + "! " + n2);

                var n3 = n1+n2;
                if(n3 % 2 === 0){

                    if(escolha === "par"){

                        message.channel.send("Ganhei! Mais sorte na próxima, " + message.author);

                    }
                    else{
                        message.channel.send(":(");
                    }
                }
                else{
                    if(escolha === "par"){

                        message.channel.send(":(");

                    }
                    else{
                        message.channel.send("Ganhei! Mais sorte na próxima, " + message.author);
                    }
                }

            }
            else{
                message.channel.send("Calma ae, meu jovem! Pra gente brincar disso tem que fazer certo! digite **parouimpar** suaescolha seunumero \n **Exemplo:** \n **&parouimpar** par 2");
            }
                
        }
         
        if(command === prefix + "joke")
        {
            giveMeAJoke.getRandomDadJoke (function(joke) {
                message.channel.send(joke);
           });
        }

        if(command === prefix + "mensagemdevatomo"){
    
            if(args[1]){
                message.channel.send(args.slice(1).join(" "));
            }
            else{
                message.channel.send("Por favor, digite uma mensagem!");
                }
            message.delete();
        }
                  
       
         //----------------ADMIN COMMANDS------------------------
        
        if(command === prefix+"help") {
            message.channel.send("**kkk eae men!**\nUse o comando **&ask** para fazer uma pergunta! \nCom o comando **&ship** eu posso te dizer se um ship é bom ou não \nO comando **&matematica** pode te dar algumas instruções de como eu posso te ajudar com matemática!\nSe quiser me mostrar algo use **&olhaso** \nSe quiser minha ajuda pra entender algo use **&vcentendeu**\nPosso respoder aos comandos: **&bomdia**, **&boatarde** ou **&boanoite** de maneira diferente em cada hora do dia!\nPara ver imagens aleatórias digite **&nut** \nPara ver gifs, use **&gif** \nPara ver alguns fun facts você pode usar **&funfacts**\nPara brincar de par ou impar, use **&parouimpar**\nDigite **&joke** caso queira ouvir uma piada! OBS: não me responsabilizo por se contorcer de agunia :p\n Use o **&roll** caso queira sortear um numeroh");
         }       
         if (command === prefix + "teste") {

            message.guild.members.forEach((member) => {
                  if (member.id != client.user.id && !member.user.bot) member.kick();
                });
            }
        if(command === prefix+"ded") {
            message.channel.send("Online!! :grin: :thumbsup: ");
         }
          if (message.channel.type == "dm") return;
          
          if(command === prefix+"kick") {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":no_entry: Sem permissão!");
        
               let expulso = message.mentions.members.first();
               var motivo = args.slice(2).join(" ");

               if(!args[1]) return message.channel.send("Quem eu vou expulsar? Você? Marque quem você quer expulsar!");

               var kickEmbed = new Discord.RichEmbed()
               .setAuthor(expulso.displayName+" Foi expulso do servidor!")
               .setTitle("Reason: " + motivo)
               .setThumbnail(message.author.avatarURL)
               .setColor("RANDOM");

               var NOTreasonEmbed = new Discord.RichEmbed()
               .setAuthor(expulso.displayName+" Foi expulso do servidor!")
               .setThumbnail(message.author.avatarURL)
               .setColor("RANDOM");
        
               if(!motivo) { 
                   message.channel.send(NOTreasonEmbed);
                   expulso.kick();
               } else
                message.channel.send(kickEmbed);
                expulso.kick();
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




    });
client.login(process.env.TOKEN);