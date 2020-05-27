const commando = require("discord.js-commando");
const discord = require("discord.js");
var kliens = new commando.Client ({
   
    disableEveryone: true,
    
    unknownCommandResponse: false,
    
});
const TOKEN = "NzEzMjc1NTY2ODQwNzQxOTA4.XsdwPQ.XTuxRroQNAndbjJcuQH4AkW37sA"

//uzenetek

kliens.on("message",message=> {
  if (message.content.includes("szia")){
    message.channel.send("hali")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("itt vagy bot?")){
    message.channel.send("Igen, online vagyok!")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("Frida mennyire fire?", "Frida mennyire tűz?", "Frida mennyire jó?")){
    message.channel.send("Nagyon")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("!parancsok")){
    message.channel.send("a parancsok még fejlesztés alatt vannak.")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("lil kire")){
    message.channel.send("**Lil kire a világ legnagyobbb zenei előadója**")
  }
});




kliens.on("message",message=> {
  if (message.content.includes("Frida mennyire tűz?")){
    message.channel.send("Nagyon")
  }
});


 
kliens.on("message",message=> {
  if (message.content.includes("!frida")){
    message.channel.send("**Frida egy német előkelő cár, sándor fia. Sokszor kakil a királyi budiba, de ez őt nem zavarja, mert szereti hogyha prank toiletezik. 2 hétig járt I. Szakácsi Erikkel, de sajnos eriknek nem volt elég fullos. Frida így nyilatkozott: Erik nem érdemelte meg a szép fogaim. Erik véleménye: kakimaki volt a bigegggge. Discord server partner hivatalosan is de amugy ez nem fontos, mert nem ismerem a vesszőket.**")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("Frida mennyire jó?")){
    message.channel.send("Nagyon")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("!instagram")){
    message.channel.send("szakacsi.erik , fridafandl , hanna.somodi")
  }
});


kliens.on("message",message=> {
  if (message.content.includes("!pog")){
    message.channel.send("Ez nem a nerdhub pog")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("Bot")){
    message.channel.send("Amúgy én is egy bot vagyok")
  }
});


kliens.on("message",message=> {
  if (message.content.includes("!discord")){
    message.channel.send("Ez egy zárt discord, ne zaklasd")
  }
});


kliens.on("message",message=> {
  if (message.content.includes("Frida")){
    message.channel.send("Találj más szót a fridára, mert mindig ide fogok írni valamit")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("frida")){
    message.channel.send("Találj más szót a fridára, mert mindig ide fogok írni valamit")
  }
});



//szidalmak

kliens.on("message",message=> {
  if (message.content.includes("fasz")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("gyökér")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("fuck")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("shit")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});


kliens.on("message",message=> {
  if (message.content.includes("nyomorék")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});


kliens.on("message",message=> {
  if (message.content.includes("idióta")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});


kliens.on("message",message=> {
  if (message.content.includes("utállak")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("kuss")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("hülye")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("nigger")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("niga")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("kuki")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});



kliens.on("message",message=> {
  if (message.content.includes("buzi")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});


kliens.on("message",message=> {
  if (message.content.includes("fallosz")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});



kliens.on("message",message=> {
  if (message.content.includes("szar")){
    message.channel.send("**ne írj trágár üzenetet**")
    if (message.author.id === "620970061267599371") return;
  }
});


kliens.on("message",message=> {
  if (message.content.includes("KURVA")){
    message.channel.send("**ne írj trágár üzenetet**")
  }
});





//status

kliens.on('ready', () => {
  console.log("A bot elindult")

  kliens.user.setActivity("!addbot", { type: "STREAMING"}, {url: "https://www.twitch.tv/kriszhadvice" });
});


// TOKEN AKTIVATOR

kliens.login(TOKEN)



//igaz hamis


kliens.registry.registerGroup("parancsok", "Parancsok");
kliens.registry.registerDefaults();
kliens.registry.registerCommandsIn(__dirname + "/commands");

//! commandok


kliens.on("message",message=> {
  if (message.content.includes("!addbot")){
    message.channel.send("https://discord.com/oauth2/authorize?client_id=713275566840741908&permissions=8&scope=bot")
  }
});




kliens.on("message",message=> {
  if (message.content.includes("!help")){
    message.channel.send("https://docs.google.com/document/d/1RQQ_VE-_-ycP_Edg6C0hnXxEuEymc5gNFDVhQBiLpIw/edit?usp=sharing")
  }
});

kliens.on("message",message=> {
  if (message.content.includes("!versio")){
    message.channel.send("Jelenleg az 1.0.0-ás verziómba járok. A következő verzióimban több fontos update lesz. Ha látni szeretnéd ezeket, akkor a help parancsban lévő dokumentumban megtalálod. ")
  }
});

//delete command 

kliens.on("message", message => {
  if (message.author.bot) return;
  if (message.author.id === "620970061267599371") return;
  
  let szavak = ["KURVA ANYÁD", "KURVA ANYAD", "kurva anyad", "kurva anyád", "rohadj meg", "ROHADJ MEG", "halj meg", "KRVA", "krva", "baszodj meg", "baszódj meg", "BASZODJ MEG", "BASZÓDJ MEG", "utállak", "UTÁLLAK", "UTALLAK", "utallak", "buzi", "FOGYATEKOS", "fogyatekos", "FOGYATÉKOS", "fogyatékos"]
  let talalt = false;

  for (var a in szavak) {
    if (message.content.toLowerCase().includes(szavak[a].toLowerCase())) talalt = true;
  }
  if (talalt) {
 message.delete();
 message.author.send("Átléptél egy határt.");
  }
})

//clear (prefix kell)

const prefix = "!"

kliens.on("message", message => {

let kuldo =message.author;

let cont = message.content.slice(prefix.length).split("!");

let args = cont.slice(1);

if (message.content.startsWith(prefix + 'clear')) {


async function purge() {

message.delete();




if (isNaN(args[0])) {
message.channel.send('Szám beli értéket adj meg!');
return;


}


const fetched = await message.channel.fetchMessages({limit: args[0]});
console.log(fetched.size + 'Üzenet törlés...');


message.channel.bulkDelete(fetched)

.catch(error => console.log(`Error: ${error}`));

}

purge();

}

});




// music bot (prefix kell) (js modul update)

const ytdl = require("ytdl-core")
const queue = new Map()

kliens.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith(`${prefix}play`)) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}skip`)) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}stop`)) {
		stop(message, serverQueue);
		return;
	} else {
		return;
	}
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	var voiceChannel = message.member.voiceChannel
	if(!message.member.voiceChannel){
        message.channel.send("Bent kell legyél egy voice szobában!")
        return;
    }
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('kő permission ._.');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} várólistába kerűt!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('voice szobában kell legyé!');
	if (!serverQueue) return message.channel.send('nem tok zenére skipelni!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('voice szobában ke legyé!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

//JOIN

kliens.on('guildMemberAdd', member => {
  member.guild.defaultChannel.send(`Cső, ${member}!`);
  console.log(`${member.user.username} has joined`);
});

