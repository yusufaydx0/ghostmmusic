

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://ghostmusic:asdasd123@cluster0.lfzf6zl.mongodb.net/?appName=Cluster0",
  spotifyClientId : "a90001c0361b4334a31475633c1e523c",
  spotifyClientSecret : "b9ad4f46c30242ffbf5ddf65b84f6f21",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/alenor",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
            name: "GlceYT",
            password: "glace",
            host: "us-01.strixnodes.com",
            port: 8003,
            secure: false
    }
  ]
}
