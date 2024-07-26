const TelegramBot = require('node-telegram-bot-api')

const token = '7203233389:AAEXhD3GAhCbDDet9WhSJlcpn7HbEao0tXI'

const bot = new TelegramBot(token, {polling: true})

const commands = [
  {
    command: 'start',
    description: 'Start bot'
  }
]
bot.setMyCommands(commands)

const keyboard = [
  ['Seasons Resataurant', 'Buzad Cafe Restaurant'],
  ['Sherep Restaurant', 'Tavern Yerevan Riverside'],
  ['Syrovarnya Northern Avenue']
]

bot.on('text', (msg) => {
  const chatId = msg.chat.id

  if(msg.text === '/start') {
    bot.sendMessage(chatId, 'Bot started', {
      reply_markup: { keyboard }
    })
  } else if (msg.text === 'Seasons Resataurant') {
    bot.sendLocation(chatId, 40.18258193152576, 44.50881108641355)
    bot.sendPhoto(chatId, 'https://mediamax.am/datas/znews/big_/2021/04/1619775007_1347798.jpg')
    bot.sendPhoto(chatId, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/12/80/1c/caption.jpg?w=1200&h=-1&s=1')
    bot.sendPhoto(chatId, 'https://media-cdn.tripadvisor.com/media/photo-s/21/fe/e9/f9/seasons-sweetland.jpg')
  } else if (msg.text === 'Buzad Cafe Restaurant') {
    bot.sendLocation(chatId, 40.17518917651247, 44.51961954236387)
    bot.sendPhoto(chatId, 'https://media-cdn.tripadvisor.com/media/photo-s/21/cb/67/94/feel-lights-play.jpg')
    bot.sendPhoto(chatId, 'https://move2armenia.am/wp-content/uploads/2023/05/263721290_267792925411082_505860859229515368_n.jpg')
    bot.sendPhoto(chatId, 'https://media-cdn.tripadvisor.com/media/photo-p/25/db/de/ed/caption.jpg')
  } else if (msg.text === 'Sherep Restaurant') {
    bot.sendLocation(chatId, 40.17852296391122, 44.51108608307484)
    bot.sendPhoto(chatId, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/93/5f/17/sherep-restaurant.jpg?w=1200&h=-1&s=1')
    bot.sendPhoto(chatId, 'https://barevarmenia.com/wp-content/uploads/2020/04/sherep.webp')
    bot.sendPhoto(chatId, 'https://avatars.mds.yandex.net/get-altay/4341149/2a0000017b81e3b7bc0c7e8388331912e2af/orig')
  } else if (msg.text === 'Tavern Yerevan Riverside') {
    bot.sendLocation(chatId, 40.17291101914252, 44.49824285635358)
    bot.sendPhoto(chatId, 'https://visityerevan.am/media/images/b46039343_314927839102850_7465013843211583488_n.jpg')
    bot.sendPhoto(chatId, 'https://media-cdn.tripadvisor.com/media/photo-s/13/45/28/b0/nice-environment-at-evening.jpg')
    bot.sendPhoto(chatId, 'https://media-cdn.tripadvisor.com/media/photo-s/15/68/86/26/tavern-yerevan-riverside.jpg')
  } else if (msg.text === 'Syrovarnya Northern Avenue') {
    bot.sendLocation(chatId, 40.18237790523757, 44.5157747415615)
    bot.sendPhoto(chatId, 'https://media-cdn.tripadvisor.com/media/photo-s/1d/e7/1d/08/syrovarnya.jpg')
    bot.sendPhoto(chatId, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ce/32/29/exterior.jpg?w=1200&h=-1&s=1')
    bot.sendPhoto(chatId, 'https://media-cdn.tripadvisor.com/media/photo-s/1d/e7/1c/ce/interior.jpg')
  } 
})
