const client = require("..");
const { MessageButton, MessageActionRow } = require("discord-buttons")

client.on('clickButton', async (button) => {
    if (button.id == 'AddVerifiedRole') {
        button.reply.send(` <:FosterBot:1191014868267049041> You have been verified!`, true)
        const member = button.clicker.member;
        const role = member.guild.roles.cache.find(r => r.name === "Verified")
        await member.roles.add(role.id)
    }
})